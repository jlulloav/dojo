require([
    "dojo/query",
    "dojo/parser",
    "dojo/ready",
    "example/CreateAccountWidget"
], function (query, parser, ready) {
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
    
    ready(function () {
        parser.parse();
    });

});