var webdriver = require ('selenium-webdriver');
    By = webdriver.By,
    until = webdriver.until;

    var driver = new webdriver.Builder().forBrowser('chrome').build();

    driver.get('http://google.com');
    driver.findElement(By.css('input')).then(function(el) {
        console.log('success' + el);
    })
    driver.findElement(By.css('svg')).then(function(el){
        console.log('You are found a search button' + el);
    })

