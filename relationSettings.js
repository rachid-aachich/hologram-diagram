(function ( $ ) {
 	
    $.fn.relationSettings = function(table) {
		let html = `<h4>Manage Relations (` + table.name + `)</h4>
                    <div class="success" id="form_alert" style="padding-left: 58px;">Invalid field type</div>
                    <!-- Responsive table starts here -->
                    <!-- For correct display on small screens you must add 'data-title' to each 'td' in your table -->
                    <div class="table-responsive-vertical shadow-z-1">
                    <!-- Table starts here -->
                    <table id="table" class="table table-hover table-mc-light-blue">
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