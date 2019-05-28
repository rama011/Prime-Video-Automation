package com.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.util.BaseClass;

public class LoginPage extends BaseClass {
	
	@FindBy(id="ap_email")
	private WebElement userEmail;
	
	@FindBy(id="ap_password")
	private WebElement userPassword;
	
	@FindBy(id="signInSubmit")
	private WebElement submitButton;
	
	public HomePage signIn(String username, String password) {
		userEmail.sendKeys(username);
		userPassword.sendKeys(password);
		submitButton.click();
		return new HomePage();
	}
	
	public LoginPage() {
		PageFactory.initElements(driver, this);
	}
	
	
}
