exports.config = {

    baseUrl: 'http://localhost:8080',

    capabilities: {
        'browserName': 'chrome'
    },

    specs: ['tests/e2e/**/*.spec.js'],

    onPrepare: function() {
        global.isAngularSite = function(flag) {
            browser.ignoreSynchronization = !flag;
        };
    }
};
