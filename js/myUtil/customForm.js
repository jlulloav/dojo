// dojo.provide allows pages to use all of the types declared in this resource.

define(["dojo/_base/declare","dijit/_WidgetBase", "dijit/_TemplatedMixin", "dojo/text!./templates/customForm.html",
        "dojo/i18n!myUtil/nls/formContent", "dojo/dom-construct", "dojo/dom", "dijit/form/ValidationTextBox",
		"dojox/validate", "dojox/validate/web", "dojo/html", "dijit/form/Button","dijit/form/Textarea",
		"dojo/store/Memory","dijit/form/ComboBox", "myUtil/valTextAreaWidget", "myUtil/customFormOut",
		"dojo/dom-style", "dijit/Tooltip", "dijit/form/CheckBox", "dojo/_base/lang", "dojo/domReady!"],
		function(declare, WidgetBase, TemplatedMixin, template, i18n, domConstruct,
				 dom, ValidationTextBox, validate, validateWeb, html, Button, Textarea, Memory, ComboBox,
				 valTextAreaWidget, customFormOut, domStyle, Tooltip, CheckBox, lang){
	        return declare([WidgetBase, TemplatedMixin], {

	            templateString: template,

				postMixInProperties: function(){
					this.id = "idCustomFormInput";
				},
	            postCreate : function myUtil_custom_form_postCreate(){
					new ValidationTextBox ({
						id: "idUserName",
	                    placeHolder: i18n.placeHolder,
	                    required : true
	                }, this.userName);
	        		
	            	new ValidationTextBox ({
						id: "idEmail",
	                    placeHolder: i18n.placeHolder,
	                    required : true,
						validator: dojox.validate.isEmailAddress
	                }, this.email);

	            	new ValidationTextBox ({
						id: "idAlterEmail",
	            		placeHolder: i18n.placeHolder,
						validator: function(a,b){
							if(dojo.trim(this.get('value')) != "" ){
								var valEmail = dojox.validate.isEmailAddress(a,b);
								return valEmail;
							}else{
								return true;
							}
						}
	                }, this.alterEmail);


					var textArea = domConstruct.toDom("<textarea id='idAddresPostal' rows='3' cols='40' data-dojo-type='valTextAreaWidget' required='true'></textarea>");
					domConstruct.place(textArea, this.addresPostal);

				    var countryStore = new Memory({
				        data: [
				            {id: '1', name: 'Perú'}, 
				            {id: '2', name: 'USA'}, 
				            {id: '2', name: 'Colombia'}, 
				            {id: '3', name: 'Bolivia'}
				        ]
				    });

				    new ComboBox({
				        id: "idCountryInput",
				        name: "country",
				        required:"true",
				        value: "",
						readonly: true,
				        store: countryStore,
				        searchAttr: "name",
						_onFocus: function() {
							if (!this.isValid()) {
								this.displayMessage(this.getErrorMessage());
							}
						},
						_onBlur: function() {
							this.validate(false);
						}
				    }, this.countryInput);

					new ValidationTextBox({
						id: "idPassword",
						required : true,
						placeHolder: i18n.placeHolder,
					    type: "password"
					}, this.password);

					new ValidationTextBox({
						id: "idRepeatPassword",
						required : true,
						placeHolder: i18n.placeHolder,
					    type: "password",
						validator: function(value){
							var valPassOne = dijit.byId("idPassword").get('value');
							if(valPassOne != this.get('value')) {
								this.invalidMessage = i18n.invalidMessagePass;
								return false;
							}else{return true;}

						}
					}, this.repeatPassword);

					new CheckBox({
						id: "idTerms",
						checked: false,
						style: "position: absolute;",
						onChange: function(chk){
							if(chk) {
								domStyle.set("idValTerms","border","");
								dijit.byId("idTooltipTerms").destroyRecursive();
							}else{
								new Tooltip({
									id:"idTooltipTerms",
									connectId: ["idValTerms"],
									label: i18n.invalidMessageTerms
								}, "idMsgTermsVal");
							}
						}
					}, this.termsUse);

					new Tooltip({
						id:"idTooltipTerms",
						connectId: ["idValTerms"],
						label: i18n.invalidMessageTerms
					}, this.idMsgTermsVal);

	            	this.lbRegAccount.innerHTML = i18n.regAccount;
	            	this.lbCompulsoryFields.innerHTML = i18n.compulsoryFields;

	            	this.lbUserName.innerHTML = '<span class="asterisk-form-app"> * </span>' + i18n.userName;
	            	this.lbEmail.innerHTML = '<span class="asterisk-form-app"> * </span>' + i18n.eMailID;
	            	this.lbAlterEmail.innerHTML = i18n.altEMailID;

	            	this.lbPhone.innerHTML = i18n.phone;
	            	this.lbCountryCode.innerHTML = i18n.countryCode;
	            	this.lbCityCode.innerHTML = i18n.cityCode;
	            	this.lbPhoneNumber.innerHTML = i18n.phoneNumber;

	            	this.lbPostalAdress.innerHTML = '<span class="asterisk-form-app"> * </span>' + i18n.postalAdress;
	            	this.lbCountry.innerHTML = '<span class="asterisk-form-app"> * </span>' + i18n.country;
	            	this.lbPassword.innerHTML = '<span class="asterisk-form-app"> * </span>' + i18n.password;
	            	this.lbRepeatPassword.innerHTML = '<span class="asterisk-form-app"> * </span>' + i18n.repeatPassword;
	            	//this.lbAcceptTerms.innerHTML = i18n.acceptTerms;
	            	this.lbTermsUse.innerHTML = i18n.termsUse;
	            	
	            	new Button({
						id: "idContinue",
	                    label: i18n.submitContinue,
						onClick: this._onClickContinue
	                }, this.submitContinue);

	                new Button({
	                	id: "btnReset",
						type: "reset",
	                    label: i18n.submitReset
	                }, this.submitReset);
	            },
				_onClickContinue: function(){

					if(!dijit.byId("myForm").validate()){
						return false;
					}
					if(!dijit.byId("idTerms").checked){
						domStyle.set("idValTerms","border","1px solid red");
						return false;
					}

					var myCustomFormOut = new customFormOut();
					//domConstruct.empty("myCustomFormAP");
					domStyle.set("idCustomFormInput","display","none");
					domStyle.set("idTranslate","display","none");

					myCustomFormOut.placeAt(dom.byId("myCustomFormAP"), "last");

				}

	        });
	});
