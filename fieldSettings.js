(function ( $ ) {
 	
    $.fn.fieldSettings = function(table) {
		let html = `<h4>Manage Fields</h4>
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
        $.each(table.fieldsUi, function(index, field) {
            let fieldOptions = field.fieldOptions;
            let primary = fieldOptions.primary ? 'checked' : '';
            console.log(fieldOptions);
            $("#field_list").append(`<tr>
                                        <td data-title="name">` + fieldOptions.name + `</td>
                                        <td data-title="primary">
                                            <div class="checkbox" style="padding-left: 36px; padding-bottom: 26px;">
                                                <label>
                                                <input type="checkbox" ` + primary + `/><i class="helper"></i>
                                                </label>
                                            </div>
                                        </td>
                                        <td data-title="actions">
                                            <i class="material-icons menu-icon action-icon">edit</i> 
                                            <i class="material-icons menu-icon action-icon">delete</i> 
                                        </td>
                                    </tr>`
            );
        });
        return this;
    };
	
	$.fn.onFieldSave = function(mycallback) {
		$.fn.callback = mycallback
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