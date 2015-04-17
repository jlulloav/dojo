
define(["dojo/_base/declare","dijit/_WidgetBase", "dijit/_TemplatedMixin",
		"dojo/text!./templates/controller.html", "myUtil/customForm", "dojo/_base/lang", "dojo/domReady!"],
		function(declare, WidgetBase, TemplatedMixin,template, customForm, lang){
	        return declare([WidgetBase, TemplatedMixin], {
	            templateString: template,
	            
	            postCreate : function myUtil_custom_form_postCreate(){
	            	var myCustomForm = customForm();
	            	myCustomForm.placeAt(this.myCustomFormAP, "last");
				}
	        });
	});
