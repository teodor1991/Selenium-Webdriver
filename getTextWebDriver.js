var webdriver = require ('selenium-webdriver');
    By = webdriver.By,
    until = webdriver.until;

    var driver = new webdriver.Builder().forBrowser('chrome').build();

driver.get('https://softuni.bg');


driver.findElement(By.css('.header-nav')).then(function(elements){
     elements.getText().then(function(txt){
        console.log('The text of navbar is:' + txt);
        });
    });
