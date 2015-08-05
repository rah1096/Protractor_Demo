describe('Protractor Demo App', function() {
   it('should add one and two', function() {
       browser.get('http://juliemr.github.io/protractor-demo/');

       element(by.model('first')).sendKeys(10);
       element(by.model('second')).sendKeys(2);
       element(by.model('operator')).sendKeys('*');

       element(by.id('gobutton')).click();

       expect(element(by.binding('result.value')).getText()).
           toEqual('20');
   });
});


