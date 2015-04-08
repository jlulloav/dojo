require([
    "dojo/_base/config",
    "dojo/parser",
    "dojo/ready",
    "example/CreateAccountWidget"
], function (dojoConfig, parser, ready) {
    var lang = window.location.search.replace('?', '');
    if (lang) {
        dojoConfig.locale = lang;
    }
    ready(function () {
        parser.parse();
    });

});