require([
    "dojo/parser",
    "dojo/ready",
    "example/CreateAccountWidget"
], function (parser, ready) {
    ready(function () {
        parser.parse();
    });

});