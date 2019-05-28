package com.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.util.BaseClass;

public class LandingPage extends BaseClass {
	
	@FindBy(id="pv-nav-logo")
	private WebElement primeLogo;
	
	@FindBy(xpath="//a[contains(text(),'Sign In')]")
	private WebElement signInButton;
	
	public WebElement getLogo() {
		return primeLogo;
	}
	public LoginPage clickOnSignin() {
		signInButton.click();
		return new LoginPage();
	}
	
	public LandingPage() {
		PageFactory.initElements(driver, this);
	}
}
