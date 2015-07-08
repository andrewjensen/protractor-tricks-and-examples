var WidgetListPage = require('./WidgetListPage.js');

describe('Widget list page', function() {

    beforeEach(function() {
        isAngularSite(false);
    });

    it('should go to the correct page', function() {
        WidgetListPage.go();

        expect(browser.getTitle()).toEqual('Widgets');
    });
});
