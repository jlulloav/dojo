define([
    "dojo/_base/declare",
    "dijit/_WidgetBase",
    "dijit/_TemplatedMixin",
    "dijit/_WidgetsInTemplateMixin",
    "dojo/i18n!example/nls/CreateAccountWidget",
    "dojo/text!example/templates/CreateAccountWidget.html",
    "dojo/i18n!example/nls/countries",
    "dojo/text!./json/accounts.json",
    "dojo/store/Memory",
    "dojo/json",
    "dojo/on",
    "dojo/query",
    "dijit/registry",
    "dojox/validate/web",
    "dojo/_base/lang",
    "dijit/form/Form",
    "dijit/form/Button",
    "dijit/form/TextBox",
    'dijit/form/CheckBox',
    'dijit/form/Select',
    'dijit/form/ValidationTextBox',
    "example/form/ValidationTextArea",
    "example/CountrySelector"
], function (
        declare,
        _WidgetBase,
        _TemplatedMixin,
        _WidgetsInTemplateMixin, 
        i18n, 
        template, 
        countries, 
        accounts, 
        MemoryStore, 
        json, 
        on, 
        query, 
        registry,
        validateWeb,
        lang) {

    var accountsStore = new MemoryStore({
        data: json.parse(accounts)
    });
    return declare("example/CreateAccountWidget", [_WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin], {
        i18n: i18n,
        countries:countries,
        templateString: template,
        /**
         * Validate an optional email address field
         * 
         * @param string value
         * @param  object constraints
         * @returns Boolean
         */
        _optionalEmail: function (value, constraints) {
            return value === '' || validateWeb.isEmailAddress(value, constraints);
        },
        /**
         * Validate that the 2 password fields are equals
         * 
         * @param {string} value
         * @param {object} constraints
         * @returns {Boolean}
         */
        _validateConfirmPassw: function (value) {
            if(value === ''){
                return false;
            }
            return value === this.passwordInput.value;
        },
        /**
         * Load an account from the store if id is found in the query params
         * 
         * @returns {void}
         */
        _loadAccount: function () {
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
        _confirm: function () {
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
        _acceptTermsOfUse: function () {
            registry.byId("continueBtn").set('disabled', !this.checked);
        },
        _onContinueClick: function(){
            query(".screen1").addClass('dijitHidden');
            query(".screen2").removeClass('dijitHidden')
        },
        /**
         * return from confirmation screen to the form 
         * 
         * @returns {void}
         */
        _goBack: function () {
            query('.no-confirmation').removeClass('dijitHidden');
            query('.confirmation').addClass('dijitHidden');
            registry.byId('accountForm').set('isconfirmed', false);
            query("input[type=password]").forEach(function (item) {
                item.value = '';
            });
        },
        postCreate: function () {
            this.alternativeEmailInput.validator = this._optionalEmail;
            this.emailInput.validator = validateWeb.isEmailAddress;
            this.confirmPasswordInput.validator = lang.hitch(this, this._validateConfirmPassw);
            
            var accountForm = registry.byId('accountForm');
            on(this.continueBtn, 'click', this._onContinueClick);
            on(accountForm, 'submit', this._confirm);
            on(registry.byId('termsOfUse'), 'click', this._acceptTermsOfUse);
            on(registry.byId('backBtn'), 'click', this._goBack);
            this._loadAccount();
            this.inherited(arguments);
        }
    });
});