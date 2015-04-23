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
    "dojo/_base/array",
    "dojo/dom-class",
    "dijit/registry",
    "dojox/validate/web",
    "dojo/_base/lang",
    "example/ConfirmAccountWidget",
    "dijit/form/Form",
    "dijit/form/Button",
    "dijit/form/TextBox",
    'dijit/form/CheckBox',
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
        array,
        domClass,
        registry,
        validateWeb,
        lang,
        ConfirmAccountWidget) {

    var accountsStore = new MemoryStore({
        data: json.parse(accounts)
    });
    return declare("example.CreateAccountWidget", [_WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin], {
        i18n: i18n,
        countries: countries,
        templateString: template,
        currentScreen: 'screen1',
        id: "accountFormContainer",
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
            if (value === '') {
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
         * on click event of terms of use checkbox
         * 
         * @returns {void}
         */
        _acceptTermsOfUse: function () {
            this.continueBtn.set('disabled', !this.termsOfUse.checked);
        },
        _copyBillingAddressAttrs: function (/* Array */attr) {
            array.forEach(registry.findWidgets(query("#screen2")[0]), function (item) {
                var name = item.get('name').replace('billing', 'shipping');
                array.forEach(attr, function (prop) {
                    var value = this[name].get(prop);
                    if (value) {
                        item.set(prop, this[name].get(prop));
                    }
                }, this);
            }, this);
        },
        _onSameAsBillingClick: function () {
            if (this.sameAsBilling.checked) {
                this._copyBillingAddressAttrs(['value', 'required']);
            } else {
                this._updateBillingAttrs('value', '');
            }
        },
        _updateBillingAttrs: function (attr, value) {
            array.forEach(registry.findWidgets(query("#screen2")[0]), function (item) {
                item.set(attr, value);
            });
        },
        _onContinueClick: function () {
            var form = registry.byId('accountForm');
            var isValid = form.validate();
            if (isValid) {
                switch (this.currentScreen) {
                    case 'screen1':
                        this._updateBillingAttrs('required', true);
                        query(".screen1").addClass('dijitHidden');
                        query(".screen2").removeClass('dijitHidden');
                        this.currentScreen = 'screen2';
                        break;
                    case 'screen2':
                        var confirm = new ConfirmAccountWidget({
                            account: form.get('value')
                        });
                        domClass.add(this.domNode, 'dijitHidden');
                        confirm.placeAt(query("#formContainer")[0], 'last');
                        break;
                }
            }
        },
        /**
         * return from confirmation screen to the form 
         * 
         * @returns {void}
         */
        _goBack: function () {
            this._updateBillingAttrs('required', false);
            query(".screen1").removeClass('dijitHidden');
            query(".screen2").addClass('dijitHidden');
            this.currentScreen = 'screen1';
            query("input[type=password]").forEach(function (item) {
                item.value = '';
            });
        },
        postCreate: function () {
            this.alternativeEmailInput.validator = this._optionalEmail;
            this.emailInput.validator = validateWeb.isEmailAddress;
            this.confirmPasswordInput.validator = lang.hitch(this, this._validateConfirmPassw);

            var accountForm = registry.byId('accountForm');
            on(this.continueBtn, 'click', lang.hitch(this, this._onContinueClick));
            on(accountForm, 'submit', this._confirm);
            on(this.termsOfUse, 'click', lang.hitch(this, this._acceptTermsOfUse));
            on(this.backBtn, 'click', lang.hitch(this, this._goBack));
            on(this.sameAsBilling, 'click', lang.hitch(this, this._onSameAsBillingClick));
            this._loadAccount();
            this.inherited(arguments);
        }
    });
});