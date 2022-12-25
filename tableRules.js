(function ( $ ) {
 	
    $.fn.tableRules = function(table) {
		let html = `<h4>Table rules (` + table.name + `)</h4>
                    <div class="success" id="form_alert" style="padding-left: 58px;">Invalid field type</div>
                    <button id="addRule" class="btn waves-effect waves-light" name="action">Add Rule
                        <i class="material-icons right">add_box</i>
                    </button>
                    <button id="cancelRule" style="display: none;" class="btn waves-effect waves-light" name="action">Cancel
                        <i class="material-icons right" style="width: 20px;">indeterminate_check_box_outlined</i>
                    </button>
                    <div id="add_rule" style="display: none; padding-left: 15px; padding-right: 15px;">
                        <div class="form-group">
                            <div class="input-field">
                                <select id="method">
                                    <option value="get" selected>GET</option>
                                    <option value="post">POST</option>
                                    <option value="put">PUT</option>
                                    <option value="delete">DELETE</option>
                                </select>
                                <label>Method</label>
                            </div>
                        </div>
                        <div class="form-group">
                            <input value="" class="validate" id="variable" type="text" required="required"/>
                            <label for="input" data-error="Please enter your first name." class="control-label invalid">Variable</label>
                        </div>
                        <div class="form-group grid-second">
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
                            <input value="" class="validate" id="value" type="text" required="required"/>
                            <label for="input" data-error="Please enter your first name." class="control-label invalid">Value</label>
                        </div>
                        <div class="form-group">
                            <button id="saveRule" class="btn waves-effect waves-light" name="action">Save Rule
                                <i class="material-icons right">save</i>
                            </button>
                        </div>
                    </div>

                    <!-- Table starts here -->
                    <div id="rule_table" class="table-responsive-vertical shadow-z-1">
                        <!-- Responsive table starts here -->
                        <!-- For correct display on small screens you must add 'data-title' to each 'td' in your table -->
                        <table id="table" class="table table-hover table-mc-light-blue">
                            <thead>
                                <tr>
                                    <th>Method</th>
                                    <th>Variable</th>
                                    <th>Operator</th>
                                    <th>Value</th>
                                </tr>
                            </thead>
                            <tbody id="rule_list">
                            </tbody>
                        </table>
                    </div>`
		let dataTypes = {'Boolean': null,'Number': null,'Decimal': null,'Double': null,'String': null,'TEXT': null,'Datetime': null,'Timestamp': null,'JSON': null};
        this.html(html);
        $('select').formSelect();
        console.log("rules", table.rules);
        $.each(table.rules, function(index, rule) {            
            $("#rule_list").append(`<tr>
                                        <td data-title="name">` + rule.method + `</td>
                                        <td data-title="name">` + rule.leftValue + `</td>
                                        <td data-title="name">` + rule.operator + `</td>
                                        <td data-title="name">` + rule.rightValue + `</td>
                                        <td data-title="actions">
                                            <i class="material-icons menu-icon action-icon delete_rule" id="" data-index="` + index + `">delete</i>
                                        </td>
                                    </tr>`
            );
        });

        $(document).on('click', '.delete_rule', function(){
            let index = $(this).attr('data-index');
            $.fn.removeCallback(index);
            $(this).closest('tr').remove();
            $("#form_alert").text('Rule removed successfully!').show();
        });

        $("#addRule").click(function() {
            $(this).hide();
            $("#cancelRule").show();
            $("#add_rule").show();
            $("#rule_table").hide();
        });

        $("#cancelRule").click(function() {
            $(this).hide();
            $("#addRule").show();
            $("#add_rule").hide();
            $("#rule_table").show();
        });

        $("#saveRule").click(function() {
            let variable = $("#variable").val();
            let value = $("#value").val();
            let operator = $("#operator").val();
            let method = $("#method").val();
            let rule = {
                method: method,
                leftValue: variable,
                rightValue: value,
                operator: operator
            }
            $.fn.saveCallback(rule);
            let index = table.rules.length;
            $("#rule_list").append(`<tr>
                                        <td data-title="name">` + rule.method.toUpperCase() + `</td>
                                        <td data-title="name">` + rule.leftValue + `</td>
                                        <td data-title="name">` + rule.operator + `</td>
                                        <td data-title="name">` + rule.rightValue + `</td>
                                        <td data-title="actions">
                                            <i class="material-icons menu-icon action-icon delete_rule" id="" data-index="` + index + `">delete</i>
                                        </td>
                                    </tr>`);

            $("#cancelRule").hide();
            $("#addRule").show();
            $("#add_rule").hide();
            $("#rule_table").show();
        });

        return this;
    };

    $.fn.onRuleRemove = function(mycallback) {
		$.fn.removeCallback = mycallback
	}

    $.fn.onRuleSave = function(mycallback) {
		$.fn.saveCallback = mycallback
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