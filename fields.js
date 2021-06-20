(function ( $ ) {
 	
    $.fn.fields = function(field) {
		let title = field ? 'Edit Field "' + field.name + '"' : 'Add New Field'
		let html = `<form style="padding-bottom: 5px;" id="form">
						<input type="hidden" id="new_field_table" />
						<h4> <a href="#" id="go_back">Manage Fields</a> > ` + title + `</h4>
						<div class="form-group">
						  <input value="` + (field ? field.name : '') + `" class="validate ` + (field ? 'valid' : '') + `" id="fieldName" type="text" required="required"/>
						  <label for="input" data-error="Please enter your first name." class="control-label invalid">Field Name</label>
						</div>
						<div class="form-group">
						  <textarea id="fieldDesc" onfocus="this.placeholder = 'Field description that will be used in your API Documentation'" onblur="this.placeholder = ''">` + (field && field.description ? field.description : '') + `</textarea>
						  <label for="textarea" class="control-label">Description</label><i class="bar"></i>
						</div>
						<i class="bar"></i>
						<div class="checkbox">
						  <label>
							<input type="checkbox" id="is_file" ` + (field ? (field.file ? 'checked' : '') : '') + ` /><i class="helper"></i>File
							<span class="hint">(Check if you want this field to represent a file)</span>
						  </label>
						</div>
						<div id="no_file">
							<div class="form-group" id="credentials_check">
								<div class="row" style="padding-left: 0px;">
									<div class="checkbox">
									  <label>
										<input type="checkbox" id="is_login" ` + (field ? (field.login ? 'checked' : '') : '') + `/><i class="helper"></i>Login
										<span class="hint">(Is the field a Login?)</span>
									  </label>
									</div>
									<div class="checkbox">
									  <label>
										<input type="checkbox" id="is_password" `+ (field ? (field.password ? 'checked' : '') : '')+` /><i class="helper"></i>Password
										<span class="hint">(Is the field a Password?)</span>
									  </label>
									</div>
								</div>
							</div>
							<div class="form-group" id="data_type_autocomplete_form">
								<div class="input-field col s12">
									<input type="text" id="data_type_autocomplete" value="` + (field ? field.type : '') + `" class="autocomplete validate" required="required">
									<label for="input" data-error="Please enter your first name." class="control-label invalid">Field Type</label>
								</div>
								<div class="input-field col s12">
									<input type="text" id="field_size" value="` + (field ? field.size : '') + `">
									<label>Field Size</label>
								</div>
							</div>
							<div class="form-group" id="unique" style="margin-bottom: 0px;">
								<div class="row-2" style="padding-left: 0px; align-items: baseline;">
									<div class="checkbox grid-first">
									  <label>
										<input type="checkbox" id="is_unique" ` + (field && field.unique ? 'checked' : '') + `/><i class="helper"></i>Unique
										<span class="hint">(Should the field value be unique?)</span>
									  </label>
									</div>
								</div>
							</div>
							<div class="form-group" id="null" style="margin-bottom: 0px;">
								<div class="row-2" style="padding-left: 0px; align-items: baseline;">
									<div class="checkbox grid-first">
									  <label>
										<input type="checkbox" id="is_null" ` + (field ? (field.null ? 'checked' : '') : 'checked') + `/><i class="helper"></i>Null
										<span class="hint">(Can the field be NULL?)</span>
									  </label>
									</div>
									<div class="input-field col s12 grid-second" style="width: fit-content;">
										<input type="text" placholder="Default value" id="default_value" value="` + (field && field.default ? field.default : '') + `" ` + (field ? (field.null || field.autoIncrement ? 'disabled' : '') : 'disabled') + `>
										<label>Default value</label>
									</div>
								</div>
							</div>
							<div class="form-group" id="increment" style="margin-top: 0px;">
								<div class="row-2" style="padding-left: 0px; align-items: baseline;">
									<div class="checkbox grid-first">
									  <label>
										<input type="checkbox" id="is_autoincrement" ` + (field ? (field.null ? '' : (field.autoIncrement ? 'checked' : '')) : '') + `/><i class="helper"></i>Auto-increment
										<span class="hint">(Is the field auto-incrementable?)</span>
									  </label>
									</div>
									<div class="input-field col s12 grid-second" style="width: fit-content;">
										<input type="number" placholder="1" id="increment_by" value="`+ (field ? (field.incrementBy ? field.incrementBy : '') : '') +`" ` + (field ? (field.null ? 'disabled' : '') : 'disabled') + `>
										<label>Incement by</label>
									</div>
								</div>
							</div>
							
							<section>
								<details class="feature" open>
									<summary class="control-label title-label">Add validation with Regex:</summary>
										<div class="form-group">
											<div class="input-field col s12">
												<div id="regex_label" class="regex" style="display: none; font-size: 17px; padding-top: 11px; padding-bottom: 7px;">/^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$/</div>
												<input type="text" placholder="/Regex/" id="regex_text">
												<label for="code" style="top: -9px;" id="regex_label">Regex String</label>
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
									<summary class="control-label title-label">File Size:</summary>
									<div class="row-2" style="padding-left: 0px;">
										<div class="input-field" style="padding-right: 10px;">
											<input class="custom-class" value="` + (field && field.file && field.fileMinSize ? field.fileMinSize : '') + `" type="number" placeholder="File Min Size" id="file_min_size">
										</div>
										<div class="input-field" style="padding-left: 10px;">
											<input class="custom-class" value="` + (field && field.file && field.fileMaxSize ? field.fileMaxSize : '') + `" type="number" placeholder="File Max Size" id="file_max_size">
										</div>
									</div>
								</details>
							</section>
							<section>
								<details class="feature">
									<summary class="control-label title-label">File Type:</summary>
									<div class="row-5">
										<div class="checkbox grid-first" style="padding-right: 0px;">
											<label>
												<input type="checkbox" id="document_type" ` + (field && field.file && field.fileTypes.includes('document') ? 'checked' : '') + `/><i class="helper"></i>Document
											</label>
										</div>
										<div class="checkbox grid-second">
											<label>
												<input type="checkbox" id="image_type" ` + (field && field.file && field.fileTypes.includes('image') ? 'checked' : '') + `/><i class="helper"></i>Image
											</label>
										</div>
										<div class="checkbox grid-third" style="padding-left: 0px;">
											<label>
												<input type="checkbox" id="video_type" ` + (field && field.file && field.fileTypes.includes('video') ? 'checked' : '') + `/><i class="helper"></i>Video
											</label>
										</div>
										<div class="checkbox grid-forth">
											<label>
												<input type="checkbox" id="audio_type" ` + (field && field.file && field.fileTypes.includes('audio') ? 'checked' : '') + `/><i class="helper"></i>Audio
											</label>
										</div>
										<div class="checkbox grid-fifth">
											<label>
												<input type="checkbox" id="other_type" ` + (field && field.file && field.fileTypes.includes('other') ? 'checked' : '') + `/><i class="helper"></i>Other
											</label>
										</div>
									</div>
								</details>
							</section>
							<section>
								<details class="feature">
									<summary class="control-label title-label">Allowed File Extensions:</summary>
									<div>
										<div class="chips chips-initial input-field" id="file_extension_chips">
											<input class="custom-class" id="file_extension_input">
										</div>
									</div>
								</details>
							</section>
						</div>
						<div class="form-group" style="text-align: center; margin-top: 0px;">
							<div class="error" id="form_error"></div>
							<a class="waves-effect waves-light btn-large" id="save_field" type="submit">` + (field ? `Save Field` : `Add Field`) + `</a>
						</div>
					</form>`
		let dataTypes = {'boolean': null,'int': null,'decimal': null,'double': null,'varchar': null,'string': null,'text': null,'datetime': null,'timestamp': null,'json': null};
        this.html(html);
		var RegexColorize = window.RegexColorize.default;
		var rgx = new RegexColorize();
				
		$("#go_back").click(function(e) {
			e.preventDefault();
			$.fn.goBackCallback();
		});

		function toggleFileSettings() {
			$("#no_file").hide();
			$("#file_control").show();
		}

		function togglePasswordSettings() {
			$("#is_login").prop('checked', false);
			$("#data_type_autocomplete_form").hide();
			$("#unique").hide();
			$("#null").hide();
			$("#increment").hide();
		}

		/** Edit Field */
		if(field) {
			console.log(field);
			validate();

			if(field.file)
				toggleFileSettings();

			if(field.password)
				togglePasswordSettings();

			if(field.regex && field.regex.length > 0) {
				field.regex.forEach(function(element, index) {
					let tag = element.message.substring(0, 15);
					let chip = `<div class="chip regex-chip" data-regex="" data-message="">
									` + tag + `
									<i class="close material-icons">close</i>
								</div>`;
					let chipElem = $(chip);
					chipElem.attr("data-regex", element.rule);
					chipElem.attr("data-message", element.message);

					$(".regex-chips").append(chipElem.get(0).outerHTML);
				});
			}

			if(field.file && field.fileExtensions) {
				field.fileExtensions.forEach(function(extension, index) {
					let chip = '<div class="chip" tabindex="' + index + '">' + extension + '<i class="material-icons close">close</i></div>';
					$("#file_extension_chips").parent().append(chip);
				});
				$("#file_extension_chips").chips();
				/*$("#file_extension_chips").chips('addChip', {
					tag: 'chip content',
					image: '', // optional
				});*/
				//$("#file_extension_chips").chips({data: [{tag: 'Apple',}, {tag: 'Microsoft',}, {tag: 'Google',}],});
			}
			//if(field.)
		}

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
				toggleFileSettings();
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
				$("#default_value").prop('disabled', true);
				$("#data_type_autocomplete_form").show();
				$("#unique").show();
				$("#null").show();
				$("#increment").show();
			} else {
				$("#is_unique").parent().removeClass('disabled-checkbox');
				$("#is_null").parent().removeClass('disabled-checkbox');
				$("#is_unique").prop('disabled', false);
				$("#is_null").prop('disabled', false);
				$("#default_value").prop('disabled', false);
			}
		});

		$("#is_unique").change(function() {
			if(this.checked) {
			} else {
			}
		});

		$("#is_password").change(function() {
			if(this.checked) {
				togglePasswordSettings();
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
			if(isEmpty($("#regex_error_message").val()))
				return false;
			
			let tag = $("#regex_error_message").val().substring(0, 15);
			let chip = `<div class="chip regex-chip" data-regex="" data-message="">
							` + tag + `
							<i class="close material-icons">close</i>
						</div>`;
			let chipElem = $(chip);
			chipElem.attr("data-regex", $("#regex_text").val());
			chipElem.attr("data-message", $("#regex_error_message").val());
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
			$(".regex").text("");
		});

		$(".regex-chips").on('click', ".regex-chip", function() {
			let regex = $(this).attr('data-regex');
			let message = $(this).attr('data-message');
			$("#regex_error_message").val(message);
			$("#regex_text").val(regex);
		});

		$("#save_field").click(function() {
			if(validate()) {
				let field = getField();
				$.fn.callback(field);
			}
		});

		function colorizeRegex() {
			let regex_text = $("#regex_text");
			let regex = $(".regex");
			if(!isEmpty(regex_text.val())) {
				regex_text.hide();
				regex.text(regex_text.val());
				regex.show();
				rgx.colorizeAll();
			}
		}

		$("#fields").click(function(e) {
			let isChild = $(".regex").find(e.target).length;
			if(!$(e.target).is('#regex_text') && isChild == 0)
				colorizeRegex();
			if($(e.target).is('.regex') || isChild == 1) {
				$(".regex").hide();
				$("#regex_text").show();
			}
		});

		$("#regex_text").on('focusout blur', function() {
			colorizeRegex();
		});

		$("#regex_text").keypress(function(e) {
			if(e.keyCode == 13)
				e.preventDefault();
			let content = $("#regex_text").val();
			if(!isEmpty(content))
				$('.regex').text(content.replace(/\n|\r/g, ""));
		});

		$('.regex').bind('DOMSubtreeModified', function(e) {
			//console.log('changed');
		});

		function isEmpty(value) {
			return (value == null || value.length === 0 || value === '');
		}

		function validate() {
			if(!$("#fieldName").hasClass('valid'))
			{
				$.fn.error("Field name is required", "fieldName");
				return false;
			}

			if(isEmpty(getField().type))
			{
				$.fn.error("Field type is required", "data_type_autocomplete");
				return false;
			}

			let validType = false;
			$.each(dataTypes, function(index, value) {
				if(index == getField().type)
					validType = true;
			});

			if(getField().type != "Password" && getField().type != "File" && !validType)
			{
				$.fn.error("Invalid field type", "data_type_autocomplete");
				return false;
			}

			return true;
		}

		function getField() {
			let name = $("#fieldName").val();
			let type = null;
			let size = $("#field_size").val();

			if($("#is_file").is(":checked"))
				type = "File";
			else if($("#is_password").is(":checked"))
				type = "Password";
			else
				type = $("#data_type_autocomplete").val();

			let is_file = type == 'File';
			let is_password = type == "Password";
			let is_login = is_file ? false : $("#is_login").is(":checked");
			let is_unique = is_password || is_file ? false : $("#is_unique").is(":checked");
			let is_autoincrement = is_password || is_file ? false : $("#is_autoincrement").is(":checked");
			let increment_by = is_autoincrement ? $("#increment_by").val() : null;
			let is_null = is_password ? false : $("#is_null").is(":checked");
			let default_value = is_null ? null : $("#default_value").val();
			let fileMinSize = is_file ? $("#file_min_size").val() : null;
			let fileMaxSize = is_file ? $("#file_max_size").val() : null;
			let validation = [];
			let fileTypes = [];
			let fileExtensions = [];

			$(".regex-chips").children('.chip').each(function() {
				let regex = $(this).attr('data-regex');
				let message = $(this).attr('data-message');
				validation.push({"regex": regex, "message": message});
			});

			if($("#document_type").is(":checked"))
				fileTypes.push("document");
			if($("#video_type").is(":checked"))
				fileTypes.push("video");
			if($("#image_type").is(":checked"))
				fileTypes.push("image");
			if($("#audio_type").is(":checked"))
				fileTypes.push("audio");
			if($("#other_type").is(":checked"))
				fileTypes.push("other");

			if($("#file_extension_chips").children(".chip").length > 0) {
				let chips = $("#file_extension_chips").chips('selectChip');

				chips.get(0).M_Chips.chipsData.forEach(function(chip) {
					let ext = chip.tag;
					fileExtensions.push(ext);
				});
			}

			let realType = type;
			if(is_file)
				realType = "text";
			else if(is_password)
				realType = "varchar";

			let column = {
				"name": name,
				"type": realType,
				"size": size,
				"foreign": false,
				"reference": null,
				"foreignKey": null,
				"autoIncrement": is_autoincrement,
				"incrementBy": increment_by,
				"id": false,
				"uuid": false,
				"default": default_value,
				"null": is_null,
				"login": is_login,
				"password": is_password,
				"unique": is_unique,
				"validation": validation,
				"fileMinSize": fileMinSize,
				"fileMaxSize": fileMaxSize,
				"fileTypes": fileTypes,
				"fileExtensions": fileExtensions
			}

			return {"name": name, "type": type, "login": is_login, "unique": is_unique, "column": column};
		}
		rgx.colorizeAll();
        return this;
    };

	$.fn.onGoBack = function(mycallback) {
		$.fn.goBackCallback = mycallback
	}
	
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