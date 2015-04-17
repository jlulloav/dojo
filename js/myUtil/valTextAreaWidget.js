/**
 * Created by cvfrans on 2/04/15.
 */
define([
    "dojo/_base/declare",
    "dojo/dom-construct",
    "dijit/_WidgetBase",
    "dijit/_FocusMixin",
    "dijit/form/Form",
    "dijit/form/ValidationTextBox",
    "dijit/form/SimpleTextarea"
], function(declare, domConstruct, _WidgetBase, _FocusMixin, Form, ValidationTextBox, SimpleTextarea){
    declare("valTextAreaWidget", [_WidgetBase, _FocusMixin, ValidationTextBox, SimpleTextarea], {

        constructor: function(args){
            this.inherited(arguments);
        },
        postMixInProperties: function () {
            this.inherited(arguments);
        },
        buildRendering: function () {
            this.inherited(arguments);
        },
        postCreate: function(){
            this.inherited(arguments);
        },
        _onFocus: function() {
            if (!this.isValid()) {
                this.displayMessage(this.getErrorMessage());
            }
        },
        _onBlur: function() {
            this.validate(false);
        }
    });
});


