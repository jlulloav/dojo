/**
 * Created by cvfrans on 6/04/15.
 */

define(["dojo/_base/declare","dijit/_WidgetBase", "dijit/_TemplatedMixin", "dojo/text!./templates/customFormOut.html",
        "dojo/i18n!myUtil/nls/formContent", "dojo/dom-construct", "dojo/dom", "dojo/hash", "dijit/form/Button",
        "dojo/dom-style", "dojo/_base/lang", "dojo/domReady!"],
    function(declare, WidgetBase, TemplatedMixin, template, i18n, domConstruct, dom, hash, Button, domStyle, lang){
        return declare([WidgetBase, TemplatedMixin], {
            templateString: template,
            postMixInProperties: function(){
                this.id = "idCustomFormOut";
            },
            postCreate : function (){

                this.lbConfirAccount.innerHTML = i18n.lbConfirAccount;

                this.lbUserName.innerHTML = i18n.userName;
                this.lbEmail.innerHTML = i18n.eMailID;
                this.lbAlterEmail.innerHTML = i18n.altEMailID;
                this.lbPhone.innerHTML = i18n.phone;
                this.lbPostalAdress.innerHTML = i18n.postalAdress;
                this.lbCountry.innerHTML = i18n.country;

                this.lbUserNameView.innerHTML = dijit.byId("idUserName").value;
                this.lbEmailView.innerHTML  = dijit.byId("idEmail").value;
                this.lbAlterEmailView.innerHTML = dijit.byId("idAlterEmail").value

                var countryCode = dom.byId("idCountryCode").value;
                var cityCode = dom.byId("idCityCode").value;
                var phoneNumber = dom.byId("idPhoneNumber").value;

                this.lbPhoneView.innerHTML = countryCode + " " + cityCode + " " + phoneNumber;

                this.lbPostalAdressView.innerHTML = dijit.byId("idAddresPostal").get("value");
                this.lbCountryView.innerHTML = dijit.byId("idCountryInput").value;

                new Button({
                    id: "btnBack",
                    label: i18n.submitBack,
                    onClick: function () {
                        domStyle.set("idCustomFormInput","display","block");
                        domStyle.set("idTranslate","display","block");
                        dijit.byId("idCustomFormOut").destroy();
                    }
                }, this.submitBack);
            }
        });
    });
