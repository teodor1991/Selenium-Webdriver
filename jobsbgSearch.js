var webdriver = require ('selenium-webdriver');
    By = webdriver.By,
    until = webdriver.until;

    var driver = new webdriver.Builder().forBrowser('chrome').build();
    driver.get('https://www.jobs.bg/login.php');
    driver.findElement(By.name('username')).sendKeys('teodor.ivanovs@gmail.com');
    driver.findElement(By.name('pass')).sendKeys('Tt270327Ss@');
    driver.sleep(5000);
    driver.findElement(By.css('.green_button')).click();
    driver.sleep(10000);
   