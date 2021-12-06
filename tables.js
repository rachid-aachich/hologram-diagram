(function ( $ ) {
 	
    $.fn.tableEditor = function(table = false) {
        let html = `<form>
                        <h4>` + (table ? ('Edit Entity "' + table.name + `"`) : 'Create New Entity') + `</h4>
                        <div class="error" id="error_alert" style="padding-left: 58px;">An error has occured</div>
                        <div class="form-group">
                            <input id="tableName" type="text" required="required" value="` + (table ? table.name : '') + `"/>
                            <label for="input" class="control-label">Table Name</label>
                        </div>
                        <div class="form-group">
                            <textarea id="tableDesc" onfocus="this.placeholder = 'Table description that will be used in your API Documentation'" onblur="this.placeholder = ''">` + (table && table.description ? table.description : '') + `</textarea>
                            <label for="textarea" class="control-label">Description</label><i class="bar"></i>
                        </div>
                        <i class="bar"></i>


                        <details class="feature">
                                <summary class="control-label title-label">Select HTTP Methods to support in this Table:</summary>
                                <div class="row">
                                    <div class="checkbox" style="grid-area: first;">
                                        <label>
                                        <input type="checkbox" ` + (table ? table.) + `/><i class="helper"></i>GET
                                        </label>
                                    </div>
                                    <div class="checkbox" style="grid-area: second;">
                                        <label>
                                        <input type="checkbox" checked="checked"/><i class="helper"></i>POST
                                        </label>
                                    </div>
                                    <div class="checkbox" style="grid-area: third;">
                                        <label>
                                        <input type="checkbox" checked="checked"/><i class="helper"></i>PUT
                                        </label>
                                    </div>
                                    <div class="checkbox" style="grid-area: forth;">
                                        <label>
                                        <input type="checkbox" checked="checked"/><i class="helper"></i>DELETE
                                        </label>
                                    </div>
                                </div>
                        </details>
                        
                        <details class="feature">
                            <summary class="control-label title-label">Select Table Traits:</summary>
                            <div class="row">
                                <div class="checkbox" style="grid-area: first;">
                                    <label>
                                    <input type="checkbox" checked="checked"/><i class="helper"></i>Uuid
                                    </label>
                                </div>
                                <div class="checkbox" style="grid-area: second;">
                                    <label>
                                    <input type="checkbox"/><i class="helper"></i>Blameable
                                    </label>
                                </div>
                                <div class="checkbox" style="grid-area: third;">
                                    <label>
                                    <input type="checkbox"/><i class="helper"></i>Timestampable
                                    </label>
                                </div>
                                <div class="checkbox" style="grid-area: forth;">
                                    <label>
                                    <input type="checkbox"/><i class="helper"></i>Softdeletable
                                    </label>
                                </div>
                            </div>
                        </details>
                        
                        <details class="feature">
                            <summary class="control-label title-label">Other Options:</summary>
                            <div class="row">
                                <div class="checkbox" style="grid-area: first;">
                                    <label>
                                    <input type="checkbox" checked="checked"/><i class="helper"></i>Pagination
                                    </label>
                                </div>
                                <div class="checkbox" style="grid-area: second;">
                                    <label>
                                    <input id="requiresAuth" type="checkbox"/><i class="helper"></i>Require Authentication
                                    </label>
                                </div>
                            </div>
                        </details>
                        
                        <div class="feature" style="background: beige; display: none; padding-left: 15px;" id="requiresAuthOptions">
                            <div class="row-3">
                                <div class="form-group grid-first">
                                    <div class="input-field col s12">
                                        <select id="authReqMethod">
                                            <option value="get" selected>GET</option>
                                            <option value="post" selected>POST</option>
                                            <option value="put" selected>PUT</option>
                                            <option value="delete" selected>DELETE</option>
                                        </select>
                                        <label>Method</label>
                                    </div>
                                </div>
                                
                                <div class="form-group grid-second">
                                    <div class="input-field col s12">
                                        <select id="authReqEntity">
                                            <option value="users" selected>Users</option>
                                        </select>
                                        <label>Auth Entity</label>
                                    </div>
                                </div>
                                <div class="form-group grid-third" style="margin-top: 57px;">
                                    <button id="addAuthReq" class="btn waves-effect waves-light" type="submit" name="action">Add
                                        <i class="material-icons right">add_box</i>
                                    </button>
                                </div>
                            </div>
                            <div id="chips" class="chips-placeholder chips"></div>

                        </div>
                    </form>
                    <div class="button-container">
                        <button id="saveTable" type="button" class="button"><span>` + (table ? 'Save Changes' : 'Add Table') + `</span></button>
                    </div>`;
        this.html(html);
        $('select').formSelect();

        if(table) {

        }

        $("#requiresAuth").change(function() {
            if(this.checked) {
                $("#requiresAuthOptions").show();
            } else {
                $("#requiresAuthOptions").hide();
            }
        });
        
        $('#chips').chips({
                onChipAdd: function() { $("#chips").show(); },
                onChipDelete: function() {
                    if($("#chips").children().length <= 1)
                        $("#chips").hide();
                }
            }
        );

        $("#chips").find("input").prop( "disabled", true );

        $("#authReqMethod").change(function() {
            $(this).formSelect();
        });
        
        $("#authReqEntity").change(function() {
            $(this).formSelect();
        });
        
        $("#operator").change(function() {
            $(this).formSelect();
        });
        
        $("#addAuthReq").click(function(e) {
            e.preventDefault();
            let authReqMethod = $('#authReqMethod').formSelect('getSelectedValues');
            let authReqEntity = $("#authReqEntity").formSelect('getSelectedValues');
            $('#chips').chips('addChip', {tag: 'Method:' + authReqMethod + ' - Auth:' + authReqEntity, image: ''});
        });
        
        $("#addRule").click(function(e) {
            e.preventDefault();
            let operator = $('#operator').formSelect('getSelectedValues');
            let leftValue = $("#leftValue").val();
            let rightValue = $("#rightValue").val();
            if(!leftValue || !rightValue)
                return false;
            $("#rule_chips").chips('addChip', {tag: leftValue + ' ' + operator + ' ' + rightValue, image: ''});
        });
        
        $("#saveTable").click(function(e) {
            e.preventDefault();
            let tableName = $("#tableName").val();
            tableName = tableName.replaceAll(' ', '').toLowerCase();
            var validCharacters = /^[A-Za-z0-9-_]*$/;
            if (!validCharacters.test(tableName)) {
                $("#error_alert").text("Invalid entity name");
                $("#error_alert").show();
                return false;
            }
            if(table) {

            } else {
                let tbOpt = {
                    name: tableName,
                    header: {tableIcon: "lock", color: "#010072"},
                    allowDrag: false,
                    fields: [
                        {name: "id", type: "int", primary: true}
                    ],
                    size : {width: "250", height: "153"}
                };
                if(!$.fn.newTableCallback(tbOpt)) {
                    $("#error_alert").text("Table name already exists");
                    $("#error_alert").show();
                    return false;
                }
            }
        });
    }

    $.fn.onNewTable = function(mycallback) {
		$.fn.newTableCallback = mycallback
	}

    $.fn.onTableUpdate = function(mycallback) {
		$.fn.newTableCallback = mycallback
	}

}( jQuery ));