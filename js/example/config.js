dojoConfig = {
    parseOnLoad: false,
    isDebug: true,
    async: true,
    packages: [{
            name: 'example',
            location: location.pathname.replace(/\/[^/]+$/, '') + '/js/example'
        }]
};

var getParam = function (name) {
    var query = window.location.search.replace('?', ''),
            hashes = query.split('&');
    for (var i in hashes)
    {
        var hash = hashes[i].split('=');
        if (hash[0] === name && hash[1]) {
            return hash[1];
        }
    }
    return false;
}
var lang = getParam('lang');
if (lang) {
    dojoConfig.locale = lang;
}