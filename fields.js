(function ( $ ) {
 
	var callback = null;
	
    $.fn.fields = function() {
		let html = `<form style="padding-bottom: 5px;">
						<input type="hidden" id="new_field_table" />
						<h4>Add New Field</h4>
						<div class="form-group">
						  <input id="fieldName" type="text" required="required"/>
						  <label for="input" class="control-label">Field Name</label>
						</div>
						<div class="form-group">
						  <textarea id="fieldDesc" onfocus="this.placeholder = 'Field description that will be used in your API Documentation'" onblur="this.placeholder = ''"></textarea>
						  <label for="textarea" class="control-label">Description</label><i class="bar"></i>
						</div>
						<i class="bar"></i>
						<div class="checkbox">
						  <label>
							<input type="checkbox" id="is_file"/><i class="helper"></i>File
							<span class="hint">(Check if you want this field to represent a file)</span>
						  </label>
						</div>
						<div id="no_file">
							<div class="form-group" id="credentials_check">
								<div class="row" style="padding-left: 0px;">
									<div class="checkbox">
									  <label>
										<input type="checkbox" id="is_login"/><i class="helper"></i>Login
										<span class="hint">(Is the field a Login?)</span>
									  </label>
									</div>
											<div class="checkbox">
									  <label>
										<input type="checkbox" id="is_password"/><i class="helper"></i>Password
										<span class="hint">(Is the field a Password?)</span>
									  </label>
									</div>
								</div>
							</div>
							<div class="form-group" id="data_type_autocomplete_form">
								<div class="input-field col s12">
									<input type="text" id="data_type_autocomplete" class="autocomplete">
									<label>Field Type</label>
								</div>
								<div class="input-field col s12">
									<input type="text" id="field_size">
									<label>Field Size</label>
								</div>
							</div>
							<div class="form-group" id="unique" style="margin-bottom: 0px;">
								<div class="row-2" style="padding-left: 0px; align-items: baseline;">
									<div class="checkbox grid-first">
									  <label>
										<input type="checkbox" id="is_unique"/><i class="helper"></i>Unique
										<span class="hint">(Should the field value be unique?)</span>
									  </label>
									</div>
								</div>
							</div>
							<div class="form-group" id="null" style="margin-bottom: 0px;">
								<div class="row-2" style="padding-left: 0px; align-items: baseline;">
									<div class="checkbox grid-first">
									  <label>
										<input type="checkbox" id="is_null" checked/><i class="helper"></i>Null
										<span class="hint">(Can the field be NULL?)</span>
									  </label>
									</div>
									<div class="input-field col s12 grid-second" style="width: fit-content;">
										<input type="text" placholder="Default value" id="default_value" disabled>
										<label>Default value</label>
									</div>
								</div>
							</div>
							<div class="form-group" id="increment" style="margin-top: 0px;">
								<div class="row-2" style="padding-left: 0px; align-items: baseline;">
									<div class="checkbox grid-first">
									  <label>
										<input type="checkbox" id="is_autoincrement"/><i class="helper"></i>Auto-increment
										<span class="hint">(Is the field auto-incrementable?)</span>
									  </label>
									</div>
									<div class="input-field col s12 grid-second" style="width: fit-content;">
										<input type="number" placholder="1" id="increment_by" disabled>
										<label>Incement by</label>
									</div>
								</div>
							</div>
							
							<section>
								<details class="feature" open>
									<summary class="control-label title-label">Add validation with Regex:</summary>
										<div class="form-group">
											<div class="input-field col s12">
												<input type="text" placholder="/Regex/" id="regex_text">
												<label>Regex String</label>
											</div>
											<div class="input-field col s12">
												<input type="text" placholder="Error message" id="regex_error_message">
												<label>Message</label>
											</div>
											<button id="addRegex" class="btn waves-effect waves-light" name="action">Add Regex
												<i class="material-icons right">add_box</i>
											</button>
										</div>
										<div class="regex-chips">
											
										</div>
								</details>
							</section>
							
						</div>
						<div id="file_control" style="display: none;">
							<section>
								<details class="feature" open>
									<summary class="control-label title-label">File Type:</summary>
									<div class="row-5">
										<div class="checkbox grid-first" style="padding-right: 0px;">
											<label>
												<input type="checkbox" id="document_type"/><i class="helper"></i>Document
											</label>
										</div>
										<div class="checkbox grid-second">
											<label>
												<input type="checkbox" id="image_type"/><i class="helper"></i>Image
											</label>
										</div>
										<div class="checkbox grid-third" style="padding-left: 0px;">
											<label>
												<input type="checkbox" id="video_type"/><i class="helper"></i>Video
											</label>
										</div>
										<div class="checkbox grid-forth">
											<label>
												<input type="checkbox" id="audio_type"/><i class="helper"></i>Audio
											</label>
										</div>
										<div class="checkbox grid-fifth">
											<label>
												<input type="checkbox" id="other_type"/><i class="helper"></i>Other
											</label>
										</div>
									</div>
								</details>
							</section>
							<section>
								<details class="feature" open>
									<summary class="control-label title-label">Allowed File Extensions:</summary>
									<div>
										<div class="chips input-field" id="file_extension_chips">
											<input class="custom-class" id="file_extension_input">
										</div>
									</div>
								</details>
							</section>
						</div>
						<div class="form-group" style="text-align: center; margin-top: 0px;">
							<a class="waves-effect waves-light btn-large" id="save_field">Add Field</a>
						</div>
					</form>`
		let dataTypes = {'TINYINT': null,'SMALLINT': null,'MEDIUMINT': null,'INT': null,'BIGINT': null,'DECIMAL': null,'FLOAT': null,'DOUBLE': null,'BIT': null,'CHAR': null,'VARCHAR': null,'BINARY': null,'VARBINARY': null,'TINYBLOB': null,'BLOB': null,'MEDIUMBLOB': null,'LONGBLOB': null,'TINYTEXT': null,'TEXT': null,'MEDIUMTEXT': null,'LONGTEXT': null,'ENUM': null,'SET': null,'DATE': null,'TIME': null,'DATETIME': null,'TIMESTAMP': null,'YEAR': null,'GEOMETRY': null,'POINT': null,'LINESTRING': null,'POLYGON': null,'GEOMETRYCOLLECTION': null,'MULTILINESTRING': null,'MULTIPOINT': null,'MULTIPOLYGON': null,'JSON': null};
        this.html(html);
		$("#data_type_autocomplete").autocomplete({
		  data: dataTypes,
		});
		$("#file_extension_chips").chips({placeholder: 'Enter extension', secondaryPlaceholder: 'Enter extension',});
		$("#file_extension_chips").show();
		$("#file_extension_input").keypress(function(e){
			if(e.keyCode == 32)
				e.preventDefault();
		});
		$("#is_file").change(function() {
			if(this.checked) {
				$("#no_file").hide();
				$("#file_control").show();
			} else {
				$("#no_file").show();
				$("#file_control").hide();
			}
		});
		$("#is_login").change(function() {
			if(this.checked) {
				$("#is_password").prop('checked', false);
				$("#is_unique").prop('checked', true);
				$("#is_null").prop('checked', false);
				$("#is_unique").parent().addClass('disabled-checkbox');
				$("#is_null").parent().addClass('disabled-checkbox');
				$("#is_unique").prop('disabled', true);
				$("#is_null").prop('disabled', true);
				$("#data_type_autocomplete_form").show();
			} else {
				$("#is_unique").parent().removeClass('disabled-checkbox');
				$("#is_null").parent().removeClass('disabled-checkbox');
				$("#is_unique").prop('disabled', false);
				$("#is_null").prop('disabled', false);
			}
		});
		$("#is_password").change(function() {
			if(this.checked) {
				$("#is_login").prop('checked', false);
				$("#data_type_autocomplete_form").hide();
				$("#unique").hide();
				$("#null").hide();
				$("#increment").hide();
			} else {
				$("#data_type_autocomplete_form").show();
				$("#unique").show();
				$("#null").show();
				$("#increment").show();
			}
		});
		$("#is_null").change(function() {
			if(this.checked) {
				$("#default_value").prop('disabled', true);//parent().css('visibility', 'hidden');
				$("#is_autoincrement").prop('checked', false);
				$("#increment_by").prop('disabled', true);//.parent().css('visibility', 'hidden');
			} else {
				$("#default_value").prop('disabled', false);//parent().css('visibility', 'visible');
			}
		});
		$("#is_autoincrement").change(function() {
			if(this.checked) {
				$("#increment_by").prop('disabled', false);
				$("#is_null").prop('checked', false);
				$("#default_value").prop('disabled', true);
			} else {
				$("#increment_by").prop('disabled', true);
				$("#default_value").prop('disabled', false);
			}
		});
		
		$("#addRegex").click(function(e) {
			e.preventDefault();
			let tag = $("#regex_error_message").val().substring(0, 15);
			let chip = `<div class="chip regex-chip" data-regex="" data-message="">
							` + tag + `
							<i class="close material-icons">close</i>
						</div>`;
			let chipElem = $(chip);
			chipElem.attr("data-regex", $("#regex_text").val());
			chipElem.attr("data-message", tag);
			let regexExists = false;
			$(".regex-chips").children('.chip').each(function() { 
				let el = $(this);
				if($("#regex_text").val() == el.attr('data-regex'))
				{
					if(el.hasClass('flash'))
					{
						el.removeClass('flash');
						setTimeout(function(){
							el.addClass('flash');
						}, 100);
					} else {
						el.addClass('flash');
					}

					regexExists = true;
					return true;
				}
			});
			if(regexExists)
				return false;
			$(".regex-chips").append(chipElem.get(0).outerHTML);
			$("#regex_error_message").val("");
			$("#regex_text").val("");
		});
		$(".regex-chips").on('click', ".regex-chip", function() {
			let regex = $(this).attr('data-regex');
			let message = $(this).attr('data-message');
			$("#regex_error_message").val(message);
			$("#regex_text").val(regex);
		});
		let instance = this;
		$("#save_field").click(function() {
			let field = getField();
			$.fn.callback(field);
		});
		function getField() {
			return {"name": "field", "type": "string"};
		}
        return this;
    };
	
	$.fn.onFieldSave = function(mycallback) {
		$.fn.callback = mycallback
	}
}( jQuery ));