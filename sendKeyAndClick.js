var webdriver = require ('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

    var driver = new webdriver.Builder().forBrowser('chrome').build();
    driver.get('http://library-app.firebaseapp.com');


    driver.findElement(By.css('input')).sendKeys('user@email.com');
    driver.wait(function(){
        return getCssValue('opacity').then(function(result){
            console.log(result);
            return result == '1';
        });
    }, 15000);

    driver.findElement(By.css('.btn-primary')).click();
    driver.wait(until.elementLocated(By.css('.alert-success')), 7000).getText().then(function(txt){
        console.log("Alert success text is:" + txt);
    });
   
    
    