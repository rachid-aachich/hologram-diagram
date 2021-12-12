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
                                        <input id="method_get" type="checkbox" checked/><i class="helper"></i>GET
                                        </label>
                                    </div>
                                    <div class="checkbox" style="grid-area: second;">
                                        <label>
                                        <input id="method_post" type="checkbox" checked="checked"/><i class="helper"></i>POST
                                        </label>
                                    </div>
                                    <div class="checkbox" style="grid-area: third;">
                                        <label>
                                        <input id="method_put" type="checkbox" checked="checked"/><i class="helper"></i>PUT
                                        </label>
                                    </div>
                                    <div class="checkbox" style="grid-area: forth;">
                                        <label>
                                        <input id="method_delete" type="checkbox" checked="checked"/><i class="helper"></i>DELETE
                                        </label>
                                    </div>
                                </div>
                        </details>
                        
                        <details class="feature">
                            <summary class="control-label title-label">Select Table Traits:</summary>
                            <div class="row">
                                <div class="checkbox" style="grid-area: first;">
                                    <label>
                                    <input id="trait_uuid" type="checkbox" checked/><i class="helper"></i>Uuid
                                    </label>
                                </div>
                                <div class="checkbox" style="grid-area: second;">
                                    <label>
                                    <input id="trait_blameable" type="checkbox"/><i class="helper"></i>Blameable
                                    </label>
                                </div>
                                <div class="checkbox" style="grid-area: third;">
                                    <label>
                                    <input id="trait_timestampable" type="checkbox"/><i class="helper"></i>Timestampable
                                    </label>
                                </div>
                                <div class="checkbox" style="grid-area: forth;">
                                    <label>
                                    <input id="trait_softdeletable" type="checkbox"/><i class="helper"></i>Softdeletable
                                    </label>
                                </div>
                            </div>
                        </details>
                        
                        <details class="feature">
                            <summary class="control-label title-label">Other Options:</summary>
                            <div class="row">
                                <div class="checkbox" style="grid-area: first;">
                                    <label>
                                    <input id="pagination" type="checkbox" checked/><i class="helper"></i>Pagination
                                    </label>
                                </div>
                                <div class="checkbox" style="grid-area: second;">
                                    <label>
                                    <input id="requiresAuth" type="checkbox"/><i class="helper"></i>Require Authentication
                                    </label>
                                </div>
                            </div>
                        
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
                        </details>
                    </form>
                    <div class="button-container">
                        <button id="saveTable" type="button" class="button"><span>` + (table ? 'Save Changes' : 'Add Table') + `</span></button>
                    </div>`;
        this.html(html);
        $('select').formSelect();

        $('#chips').chips({
            onChipAdd: function() { $("#chips").show(); },
            onChipDelete: function() {
                if($("#chips").children().length <= 1)
                    $("#chips").hide();
            }
        });

        $("#chips").find("input").prop( "disabled", true );

        if(table) {
            if(!table.data.methods.includes('GET'))
                $("#method_get").prop('checked', false);
            
            if(!table.data.methods.includes('POST'))
                $("#method_post").prop('checked', false);

            if(!table.data.methods.includes('PUT'))
                $("#method_put").prop('checked', false);

            if(!table.data.methods.includes('DELETE'))
                $("#method_delete").prop('checked', false);

            if(!table.data.traits.includes('uuid'))
                $("#trait_uuid").prop('checked', false);

            if(table.data.traits.includes('blameable'))
                $("#trait_blameable").prop('checked', true);

            if(table.data.traits.includes('timestampable'))
                $("#trait_timestampable").prop('checked', true);

            if(table.data.traits.includes('softdeletable'))
                $("#trait_softdeletable").prop('checked', true);

            if(!table.data.pagination)
                $("#pagination").prop('checked', false);

            if(table.data.hasOwnProperty('requiresAuth') && table.data.requiresAuth.length > 0) {
                $("#requiresAuth").prop('checked', true);
                $("#requiresAuthOptions").show();
                $.each(table.data.requiresAuth, function( index, value ) {
                    console.log(index, value);
                    $('#chips').chips('addChip', {method: value.method, auth: value.authEntity, tag: 'Method:' + value.method + ' - Auth:' + value.authEntity, image: ''});
                });
            }
        }

        $("#requiresAuth").change(function() {
            if(this.checked) {
                $("#requiresAuthOptions").show();
            } else {
                $("#requiresAuthOptions").hide();
            }
        });

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
            $('#chips').chips('addChip', {method: authReqMethod, auth: authReqEntity, tag: 'Method:' + authReqMethod + ' - Auth:' + authReqEntity, image: ''});
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
            let description = $("#description").val();
            let methods = [];
            let traits = [];
            let requiresAuth = [];
            
            if($("#method_get").is(':checked'))
                methods.push('GET');
            if($("#method_post").is(':checked'))
                methods.push('POST');
            if($("#method_put").is(':checked'))
                methods.push('PUT');
            if($("#method_delete").is(':checked'))
                methods.push('DELETE');
            
            if($("#trait_uuid").is(':checked'))
                traits.push('uuid');
            if($("#trait_blameable").is(':checked'))
                traits.push('blameable');
            if($("#trait_timestampable").is(':checked'))
                traits.push('timestampable');
            if($("#trait_softdeletable").is(':checked'))
                traits.push('softdeletable');
            
            let chips = $("#chips").chips('selectChip');

            chips.get(0).M_Chips.chipsData.forEach(function(chip) {
                requiresAuth.push({method: chip.method, authEntity: chip.auth});
            });

            let pagination = $("#pagination").is(':checked');
            let data = {
                name: tableName,
                description: "Tests of students",
                meta: {
                  createdAt: "datetime",
                  lastUpdatedAt: "datetime",
                  createdBy: "Creator",
                  lastUpdatedBy: "Updater",
                  positionX: "Position X of the table in pixels",
                  positionY: "Position Y of the table in pixels",
                  color: "color of the table"
                },
                methods: methods,
                requiresAuth: requiresAuth,
                pagination: pagination,
                columns: [],
                primaryKey: "id",
                identifier: "uuid",
                auth: false,
                jwt_expires: false,
                jwt_duration: 0,
                traits: traits,
                search: {
                  fulltext: [],
                  soundex: [],
                  exact: [],
                  like: []
                },
                rules: []
            }
            if(table) {
                data.columns = table.data.columns;
                data.primaryKey = table.data.primaryKey;
                data.identifier = data.traits.includes('uuid') ? 'uuid' : table.data.identifier;
                data.auth = table.data.auth;
                data.jwt_expires = table.jwt_expires;
                data.jwt_duration = table.jwt_duration;
                data.search = table.data.search;
                data.rules = table.data.rules;
                table.data = data;
                $.fn.onTableUpdate(table);
            } else {
                data.columns = { // should be an array though
                    name: "id",
                    type: "int",
                    size: "",
                    foreign: false,
                    reference: null,
                    foreignKey: null,
                    autoIncrement: true,
                    id: true,
                    uuid: false,
                    default: null,
                    null: false,
                    login: false,
                    password: false,
                    unique: true
                }
                let tbOpt = {
                    name: tableName,
                    header: {tableIcon: "lock", color: "#010072"},
                    allowDrag: false,
                    fields: [
                        {name: "id", type: "int", primary: true}
                    ],
                    size : {width: "250", height: "153"},
                    data: data
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