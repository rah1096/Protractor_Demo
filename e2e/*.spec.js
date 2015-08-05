describe('Protractor Demo App', function() {
    var firstNumber = element(by.model('first'));
    var secondNumber = element(by.model('second'));
    var operator = element(by.model('operator'));
    var gobutton = element(by.id('gobutton'));
    var latestResult = element(by.binding('latest'));

    beforeEach(function() {
        browser.get('http://juliemr.github.io/protractor-demo/');
    });

    it('should have a title', function() {
        expect(browser.getTitle()).toEqual('Super Calculator');
    });

    it('should add one and two', function() {
       firstNumber.sendKeys(1);
       secondNumber.sendKeys(2);

       gobutton.click();

       expect(latestResult.getText()).toEqual('3');
    });

    it('should add four and six', function() {
        firstNumber.sendKeys(4);
        secondNumber.sendKeys(6);

        gobutton.click();

        expect(latestResult.getText()).toEqual('10')
    });

    it('should multiply four and five', function() {
       firstNumber.sendKeys(4);
       secondNumber.sendKeys(5);

       operator.sendKeys('*');

       gobutton.click();

       expect(latestResult.getText()).toEqual('21'); //fail
    });

    it('should divide thirty and five', function() {
       firstNumber.sendKeys(30);
       secondNumber.sendKeys(5);

       operator.sendKeys('/');

       gobutton.click();

       expect(latestResult.getText()).toEqual('6');
    });
});


