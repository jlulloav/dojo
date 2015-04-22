require([
    "dojo/query",
    "dojo/parser",
    "example/CreateAccountWidget",
    "dijit/layout/BorderContainer",
    "dijit/layout/ContentPane",
    "dojo/domReady!"
], function (query, parser, createAccountForm) {
    /**
     * Change the locale
     * 
     * @param {object} e The event
     * @returns {void}
     */
    function changeLang(e){
        var params = window.location.search;
        if(params){
            e.preventDefault();
            var reg = /lang=\w{2}/, newLang = this.href.split('?')[1];
            if(reg.test(params)){
                params = params.replace(reg,newLang);
            }else{
                params = params+'&'+newLang;
            }
            window.location.href = params;
        }
    }
    query('a.lang-switch').on('click',changeLang);
    
    var accountForm = new createAccountForm();
    accountForm.placeAt('formContainer','last');
    
    parser.parse();

});