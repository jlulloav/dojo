define([
    "dojo/_base/declare",
    "dijit/_WidgetBase",
    "dijit/_TemplatedMixin",
    "dijit/_WidgetsInTemplateMixin",
    "dojo/i18n!example/nls/CreateAccountWidget",
    "dojo/text!example/templates/CreateAccountWidget.html",
    "dojo/text!./json/countries.json",
    "dojo/text!./json/accounts.json",
    "dojo/store/Memory",
    "dojo/json",
    "dojo/on",
    "dojo/query",
    "dijit/registry",
    "dijit/form/Form",
    "dijit/form/Button",
    "dijit/form/TextBox",
    'dijit/form/CheckBox',
    'dijit/form/Select',
    'dijit/form/ValidationTextBox',
    "example/form/ValidationTextArea",
    "dojox/validate/web"
], function(declare, _WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin, i18n, template, countries, accounts, MemoryStore, json, on, query, registry) {

    var countryStore = new MemoryStore({
        data: json.parse(countries)
    });
    var accountsStore = new MemoryStore({
        data: json.parse(accounts)
    });
    return declare("example/CreateAccountWidget", [_WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin], {
        i18n: i18n,
        templateString: template,
        /**
         * Validate an optional email address field
         * 
         * @param string value
         * @param  object constraints
         * @returns Boolean
         */
        _optionalEmail: function(value, constraints) {
            if (value === '') {
                return true;
            }
            return dojox.validate.isEmailAddress(value, constraints);
        },
        /**
         * Validate that the 2 password fields are equals
         * 
         * @param {string} value
         * @param {object} constraints
         * @returns {Boolean}
         */
        _validateConfirmPassw : function(value, constraints){
            if (value === '') {
                return false;
            }
            var query = require("dojo/query");
            var psw1 = query('#password')[0];
            if(!psw1){
                return false;
            }
            return psw1.value === value;
        },
        /**
         * Set the store to the Countries Combobox
         * 
         * @returns {void}
         */
        _setCountryStore: function() {
            var countrySelect = registry.byId('countryId');
            countrySelect.set('store', countryStore);
        },
        /**
         * Load an account from the store if id is found in the query params
         * 
         * @returns {void}
         */
        _loadAccount: function() {
            var accountId = getParam('id');
            if (accountId) {
                var account = accountsStore.get(accountId);
                if (account) {
                    var accountForm = registry.byId('accountForm');
                    accountForm.set('value', account);
                }
            }
        },
        /**
         * Show the confirmation screen on form submit
         * 
         * @returns {Boolean}
         */
        _confirm: function() {
            var isValid = this.validate();
            if (isValid && !this.get('isconfirmed')) {
                query('.no-confirmation').addClass('dijitHidden');
                query('.confirmation').removeClass('dijitHidden');
                var values = this.get('value');
                query('#usernameConfirm')[0].innerHTML = values.username;
                query('#emailConfirm')[0].innerHTML = values.email;
                query('#alternativeEmailConfirm')[0].innerHTML = values.alternativeEmail;
                query('#phoneConfirm')[0].innerHTML = values.countryCode + ' ' + values.cityCode + ' ' + values.phoneNumber;
                query('#addressConfirm')[0].innerHTML = values.address;
                query('#countryIdConfirm')[0].innerHTML = countryStore.get(values.countryId).name;
                this.set('isconfirmed', true);
                return false;
            }
            return isValid;
        },
        /**
         * on click event of terms of use checkbox
         * 
         * @returns {void}
         */
        _acceptTermsOfUse: function() {
            registry.byId("confirmBtn").set('disabled', !this.checked);
        },
        /**
         * return from confirmation screen to the form 
         * 
         * @returns {void}
         */
        _goBack: function() {
            query('.no-confirmation').removeClass('dijitHidden');
            query('.confirmation').addClass('dijitHidden');
            registry.byId('accountForm').set('isconfirmed', false);
            query("input[type=password]").forEach(function(item){
                item.value='';
            });
        },
        postCreate: function() {
            var accountForm = registry.byId('accountForm');
            on(accountForm, 'submit', this._confirm);
            on(registry.byId('termsOfUse'), 'click', this._acceptTermsOfUse);
            on(registry.byId('backBtn'), 'click', this._goBack);
            this._setCountryStore();
            this._loadAccount();
            this.inherited(arguments);
        }
    });
});