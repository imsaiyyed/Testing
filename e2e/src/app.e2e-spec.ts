import { AppPage } from './app.po';
import { browser, by, element } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;
  var logIn;
  var username;
  var password;
  beforeEach(() => {
    page = new AppPage();
    

  });

  it('should display log in page', () => {
    page.navigateTo();
    logIn=element(by.id('loginbtn'));
    username=element(by.name('username'));
    password=element(by.name('password'));
    expect(page.getPageTitle()).toEqual('Log In');
  });

  it('should display log in button', () => { 
    page.navigateTo(); 
    expect(element(by.id('loginbtn')).isPresent());
  });
  it('should display employee details', () => { 
    page.navigateTo(); 
    username.sendKeys('ismail');
    password.sendKeys('12345');
    browser.sleep(2000);
    logIn.click();
    expect(element(by.id('employeehead')).getText()).toEqual("Welcome");
  });

  it('should display add user button', () => { 
    expect(element(by.id('addButton')).isPresent());
  });
  
  it('should display delete button', () => { 
    expect(element(by.id('deleteButton')).isPresent());
  });


  it('should display register page', () => { 
    element(by.id('addButton')).click();
    expect(element(by.id('registerhead')).getText()).toEqual("Register new user");
  });

 it('should display add user button', () => { 
    expect(element(by.id('adduserbtn')).isPresent());
  });


  it('should display add new user', () => { 
    element(by.name('username')).sendKeys("Abc");
    element(by.name('city')).sendKeys("Xyz");
    element(by.name('password')).sendKeys("111111");
    element(by.id('adduserbtn')).click();
    expect(element(by.id('employeehead')).getText()).toEqual("Welcome");
  });

});
