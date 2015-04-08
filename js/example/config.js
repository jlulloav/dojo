dojoConfig = {
    isDebug: true,
    async: true,
    packages: [{
            name: 'example',
            location: location.pathname.replace(/\/[^/]+$/, '') + 'js/example'
        }]
};
var lang = window.location.search.replace('?', '');
if (lang) {
    dojoConfig.locale = lang;
}