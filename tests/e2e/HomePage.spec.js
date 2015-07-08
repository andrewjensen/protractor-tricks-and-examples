var HomePage = require('./HomePage.js');

describe('Home page', function() {

    beforeEach(function() {
        isAngularSite(false);
    });

    it('should go to the correct page', function() {
        HomePage.go();

        expect(browser.getTitle()).toEqual('My Widget Site');
    });
});
