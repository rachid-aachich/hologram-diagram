(function ( $ ) {
    $.fn.relationSettings = function(table, tables) {
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
                            <div class="form-group relation-field o2o m2o">
                                <div class="input-field">
                                    <select id="primary">
                                    </select>
                                    <label>Foreign Key</label>
                                </div>
                            </div>
                            <div class="form-group relation-field m2m m2o o2o">
                                <div class="input-field">
                                    <select id="reference_table">
                                    </select>
                                    <label>Reference Table</label>
                                </div>
                            </div>
                            <div class="form-group relation-field m2o o2o">
                                <div class="input-field">
                                    <select id="reference_column">
                                    </select>
                                    <label>Reference Column</label>
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <button id="saveRelation" class="btn waves-effect waves-light" name="action">Save Relation
                                <i class="material-icons right">save</i>
                            </button>
                        </div>
                    </div>

                    <!-- Table starts here -->
                    <table id="relation_table" class="table table-hover table-mc-light-blue">
                        <thead>
                            <tr>
                                <th>Primary Key</th>
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

        $.each(table.data.columns, function(index, column) {
            if(!column.id && !column.password && !column.foreign && !column.file && !isRelated(column, table)) {
                $("#primary").append('<option value="' + column.name + '">' + column.name + '</option>');
            }
        });

        $.each(tables, function(index, tbl) {
            if(tbl.data.name != table.data.name)
                $("#reference_table").append('<option value="' + tbl.data.name + '">' + tbl.data.name + '</option>');
        });

        function populateRefColumn() {
            selectedTable = $("#reference_table").val();
            let columns = tables.find(t => t.data.name === selectedTable).data.columns;
            $("#reference_column").html('');
            $.each(columns, function(index, column) {
                if(column.id || column.uuid) {
                    $("#reference_column").append('<option value="' + column.name + '">' + column.name + '</option>');
                }
            });
            $('#reference_column').formSelect();
        }

        function isRelated(column, table) {
            let related = false;
            $.each(window.api.relations, function(index, relation) {
                if(relation.original == table.name && relation.foreignKey == column.name) {
                    related = true;
                    return;
                }
            });

            return related;
        }

        populateRefColumn();

        $("#reference_table").change(function(obj) {
            populateRefColumn();
        });

        $("#type").change(function(obj) {
            $(".relation-field").hide();
            let type = $("#type").val();
            if(type == 'm2m') {
                $(".m2m").show();
            } else if(type == 'm2o') {
                $(".m2o").show();
            } else if(type == 'o2o') {
                $(".o2o").show();
            }
        });

        $('select').formSelect();

        $(".delete_relation").click(function() {
            let index = $(this).attr('data-index');
            $.fn.removeCallback(index);
            $(this).closest('tr').remove();
            $("#form_alert").text('Relation removed successfully!').show();
        });

        $("#saveRelation").click(function(e) {
            e.preventDefault();
            let relObj = {
                foreign: $("#reference_table").val(),
                foreignKey: $("#primary").val(),
                original: table.name,
                primaryKey: $("#reference_column").val(),
                type: $("#type").children("option").filter(":selected").text()
            }
            $.fn.saveRelationCallback(relObj);
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

        return this;
    };

    $.fn.onRelationRemove = function(mycallback) {
		$.fn.removeCallback = mycallback
	}

    $.fn.onRelationSave = function(mycallback) {
        $.fn.saveRelationCallback = mycallback;
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