define([
    "dojo/_base/declare",
    "dijit/_WidgetBase",
    "dijit/_TemplatedMixin",
    "dijit/_WidgetsInTemplateMixin",
    "dojo/i18n!example/nls/CreateAccountWidget",
    "dojo/text!example/templates/ConfirmAccountWidget.html",
    "dojo/on",
    "dojo/dom-class",
    "dijit/registry",
    "dojo/_base/lang",
], function (
        declare,
        _WidgetBase,
        _TemplatedMixin,
        _WidgetsInTemplateMixin,
        i18n,
        template,
        on,
        domClass,
        registry,
        lang) {
    return declare("example.ConfirmAccountWidget", [_WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin], {
        i18n: i18n,
        templateString: template,
        _goBack: function () {
            domClass.remove(registry.byId('accountFormContainer').domNode,'dijitHidden');
            this.destroy();
        },
        postCreate: function () {
            on(this.backBtn, 'click', lang.hitch(this, this._goBack));
            on(this.confirmBtn, 'click', function(){
                alert(i18n.congratulations);
            });
            this.inherited(arguments);
        }
    });
});