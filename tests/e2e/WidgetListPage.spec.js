var WidgetListPage = require('./WidgetListPage.js');

describe('Widget list page', function() {

    beforeEach(function() {
        isAngularSite(false);
    });

    it('should go to the correct page', function() {
        WidgetListPage.go();

        expect(browser.getTitle()).toEqual('Widgets');
    });

    it('should click on the correct edit button', function() {
        WidgetListPage.go();

        var widgetName = 'Widget Number One';
        WidgetListPage.clickEditWidgetLink(widgetName);

        expect(browser.getTitle()).toEqual(widgetName);
    });
});
