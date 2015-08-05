describe('Protractor Demo App', function() {
    var firstNumber = element(by.model('first'));
    var secondNumber = element(by.model('second'));
    var operator = element(by.model('operator'));
    var gobutton = element(by.id('gobutton'));
    var latestResult = element(by.binding('latest'));
    var history = element.all(by.repeater('result in memory'));

    beforeEach(function() {
        browser.get('http://juliemr.github.io/protractor-demo/');
    });

    function compute(a, b, operate) {
        firstNumber.sendKeys(a);
        secondNumber.sendKeys(b);
        operator.sendKeys(operate);
        gobutton.click();
    }

    it('should have a history', function() {
        compute(2, 4, '*');
        compute(5, 7, '+');

        expect(history.last().getText()).toContain('2 * 4');
        expect(history.first().getText()).toContain('5 + 7');//this is wrong

    });

});


