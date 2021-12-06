(function ( $ ) {
 	
    $.fn.fieldSettings = function(table) {
		let html = `<h4>Manage Fields</h4>
                    <div class="success" id="form_alert" style="padding-left: 58px;">Invalid field type</div>
                    <div class="error" id="error_alert" style="padding-left: 58px;">Invalid field type</div>
                    <!-- Responsive table starts here -->
                    <!-- For correct display on small screens you must add 'data-title' to each 'td' in your table -->
                    <div class="table-responsive-vertical shadow-z-1">
                    <!-- Table starts here -->
                    <table id="table" class="table table-hover table-mc-light-blue">
                        <thead>
                            <tr>
                                <th>Field</th>
                                <th>Primary Key</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody id="field_list">
                        </tbody>
                    </table>`
		let dataTypes = {'Boolean': null,'Number': null,'Decimal': null,'Double': null,'String': null,'TEXT': null,'Datetime': null,'Timestamp': null,'JSON': null};
        this.html(html);
        let hasRelation = $.fn.hasRelation(table);
        $.each(table.fieldsUi, function(index, field) {
            let fieldOptions = field.fieldOptions;
            let primary = fieldOptions.primary ? 'checked' : '';
            $("#field_list").append(`<tr>
                                        <td data-title="name">` + fieldOptions.name + `</td>
                                        <td data-title="primary">
                                            <div class="checkbox ` + (hasRelation ? 'disabled-checkbox' : '') + `" style="padding-left: 36px; padding-bottom: 26px;">
                                                <label>
                                                    <input class="primary_checkbox" type="checkbox" ` + primary + `  data-name="` + fieldOptions.name + `" data-index="` + index + `" ` + (hasRelation ? 'disabled' : '') + `/>
                                                    <i class="helper"></i>
                                                </label>
                                            </div>
                                        </td>
                                        <td data-title="actions">
                                            <i class="material-icons menu-icon action-icon edit_field" id="" data-index="` + index + `">edit</i> 
                                            ` + (table.fieldsUi.length > 1 ? `<i class="material-icons menu-icon action-icon delete_field" id="" data-index="` + index + `" data-name="` + fieldOptions.name + `">delete</i>` : '') + `
                                        </td>
                                    </tr>`
            );
        });

        $(".edit_field").click(function() {
            let index = $(this).attr('data-index');
            let fieldOptions;
            $.each(table.fieldsUi, function(i, field) {
                if(i == index)
                    fieldOptions = field.fieldOptions;
            });
            $.fn.callback(fieldOptions);
        });

        $(".delete_field").click(function() {
            let fname = $(this).attr('data-name');
            let fieldOptions;
            $.each(table.fieldsUi, function(i, field) {
                if(field.fieldOptions.name == fname)
                    fieldOptions = field.fieldOptions;
            });

            if(fieldOptions.column.foreign) {
                $("#form_alert").hide();
                $("#error_alert").text('Cannot remove field with foreign constraints').show();
                return false;
            }
            if(table.fieldsUi.length == 1) {
                $("#form_alert").hide();
                $("#error_alert").text('Cannot empty the table').show();
                return false;
            }
            if(fieldOptions.hasOwnProperty('primary') && fieldOptions.primary) {
                $("#form_alert").hide();
                $("#error_alert").text('Cannot remove a primary key field').show();
            } else {
                $.fn.removeCallback(fieldOptions);
                $(this).closest('tr').remove();
                $("#error_alert").hide();
                $("#form_alert").text('Field removed successfully!').show();
            }
        });

        $(".primary_checkbox").change(function() {
            $('.primary_checkbox').not(this).prop('checked', false);  
            let name = $(this).attr('data-name');
            $.fn.changePrimaryKey(name, $(this).is(":checked"));
        });

        return this;
    };

    $.fn.hasRelation = function(table) {
        let hasRelation = false;
        $.each(window.api.relations, function(index, relation) {
            if(table.tableOptions.name == relation.original || table.tableOptions.name == relation.foreign)
                hasRelation = true;
        });

        return hasRelation;
    }
	
	$.fn.onFieldEdit = function(mycallback) {
		$.fn.callback = mycallback
	}

    $.fn.onFieldRemove = function(mycallback) {
		$.fn.removeCallback = mycallback
	}

    $.fn.onPrimaryKeyChange = function(mycallback) {
		$.fn.changePrimaryKey = mycallback
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