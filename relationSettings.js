(function ( $ ) {
 	
    $.fn.relationSettings = function(table) {
		let html = `<h4>Manage Relations (` + table.name + `)</h4>
                    <div class="success" id="form_alert" style="padding-left: 58px;">Invalid field type</div>
                    <!-- Responsive table starts here -->
                    <!-- For correct display on small screens you must add 'data-title' to each 'td' in your table -->
                    <div class="table-responsive-vertical shadow-z-1">
                    <button id="addRelation" class="btn waves-effect waves-light" name="action">Add Relation
                        <i class="material-icons right">add_box</i>
                    </button>
                    <button id="cancelRelation" style="display: none;" class="btn waves-effect waves-light" name="action">Cancel
                        <i class="material-icons right" style="width: 20px;">indeterminate_check_box_outlined</i>
                    </button>
                    <div id="add_relation" style="display: none; padding-left: 15px; padding-right: 15px;">
                        <div class="form-group">
                            <div class="input-field">
                                <select id="type">
                                    <option value="m2m">ManyToMany</option>
                                    <option value="m2o">ManyToOne</option>
                                    <option value="o2o" selected>OneToOne</option>
                                </select>
                                <label>Relation Type</label>
                            </div>
                        </div>
                        <div id="relation_fields">
                            <div class="form-group">
                                <div class="input-field">
                                    <select id="operator">
                                        <option value="==" selected>==</option>
                                        <option value="!=">!=</option>
                                        <option value="===">===</option>
                                        <option value="!==">!==</option>
                                        <option value="<"><</option>
                                        <option value=">">></option>
                                        <option value="<="><=</option>
                                        <option value=">=">>=</option>
                                    </select>
                                    <label>Operator</label>
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="input-field">
                                    <select id="operator">
                                        <option value="==" selected>==</option>
                                        <option value="!=">!=</option>
                                        <option value="===">===</option>
                                        <option value="!==">!==</option>
                                        <option value="<"><</option>
                                        <option value=">">></option>
                                        <option value="<="><=</option>
                                        <option value=">=">>=</option>
                                    </select>
                                    <label>Operator</label>
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <button id="saveRule" class="btn waves-effect waves-light" name="action">Save Relation
                                <i class="material-icons right">save</i>
                            </button>
                        </div>
                    </div>

                    <!-- Table starts here -->
                    <table id="relation_table" class="table table-hover table-mc-light-blue">
                        <thead>
                            <tr>
                                <th>Primay Key</th>
                                <th>Foreign Key</th>
                                <th>Relation</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody id="relation_list">
                        </tbody>
                    </table>`
		let dataTypes = {'Boolean': null,'Number': null,'Decimal': null,'Double': null,'String': null,'TEXT': null,'Datetime': null,'Timestamp': null,'JSON': null};
        this.html(html);
        $('select').formSelect();
        $.each(window.api.relations, function(index, relation) {
            if(relation.original != table.name && relation.foreign != table.name)
                return true;
            
            let original = relation.original +  '.' + (relation.type == 'ManyToMany' ? 'id' : relation.foreignKey);
            let foreign = relation.foreign +  '.' + (relation.type == 'ManyToMany' ? 'id' : relation.primaryKey);
            $("#relation_list").append(`<tr>
                                        <td data-title="name">` + original + `</td>
                                        <td data-title="name">` + foreign + `</td>
                                        <td data-title="name">` + relation.type + `</td>
                                        <td data-title="actions">
                                            <i class="material-icons menu-icon action-icon delete_relation" id="" data-index="` + index + `">delete</i>
                                        </td>
                                    </tr>`
            );
        });

        $(".delete_relation").click(function() {
            let index = $(this).attr('data-index');
            $.fn.removeCallback(index);
            $(this).closest('tr').remove();
            $("#form_alert").text('Relation removed successfully!').show();
        });

        $("#addRelation").click(function() {
            $(this).hide();
            $("#cancelRelation").show();
            $("#add_relation").show();
            $("#relation_table").hide();
        });

        $("#cancelRelation").click(function() {
            $(this).hide();
            $("#addRelation").show();
            $("#add_relation").hide();
            $("#relation_table").show();
        });

        $("#type").change(function() {
            
        });

        return this;
    };

    $.fn.onRelationRemove = function(mycallback) {
		$.fn.removeCallback = mycallback
	}

	$.fn.error = function(error, input_id = false) {
		if(input_id)
			$("#" + input_id).addClass('invalid');
		$("#form_error").html(error);
		$("#form_error").show();
	}

	$.fn.reset = function() {
		$('#form')[0].reset();
		$("#form_error").html("");
		$("#form_error").hide();
		$(".regex-chips").chips();
		$("#file_extension_chips").chips();
		$("#file_control").hide();
		$("#no_file").show();
		$("#is_null").prop('disabled', false);
		$("#default_value").prop('disabled', true);
	}
}( jQuery ));