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
    "dijit/registry",
    "dijit/form/Form",
    "dijit/form/Button",
    "dijit/form/TextBox",
    'dijit/form/CheckBox',
    'dijit/form/Select',
    'dijit/form/ValidationTextBox',
    "example/form/ValidationTextArea",
    "dojox/validate/web"
], function (declare, _WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin, i18n, template, countries, accounts, MemoryStore, json, registry) {

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
        _optionalEmail: function (value, constraints) {
            if (value === '') {
                return true;
            }
            return dojox.validate.isEmailAddress(value, constraints);
        },
        postCreate: function () {
            var accountId = getParam('id');
            if (accountId) {
                var account = accountsStore.get(accountId);
                if (account) {
                    var accountForm = registry.byId('accountForm');
                    accountForm.set('value',account);
                }
            }
            var countrySelect = registry.byId('countryId');
            countrySelect.set('store', countryStore);
            this.inherited(arguments);
        }
    });
});