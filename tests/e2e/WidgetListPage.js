var WidgetListPage = {};

WidgetListPage.go = function() {
    browser.get('/widgets');
};

WidgetListPage.clickEditWidgetLink = function(widgetName) {
    //Find the td that says `widgetName`, then click on the link in the td next to it on the same row.
    element.all(by.css('table#widgets tr')).filter(function(elementFinder) {
        return elementFinder.element(by.css('td:nth-child(2)')).getText().then(function(value) {
            return (value === widgetName);
        });
    }).get(0).element(by.css('td:nth-child(1) a')).click();
};

module.exports = WidgetListPage;
