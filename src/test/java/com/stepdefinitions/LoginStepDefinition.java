package com.stepdefinitions;

import java.util.List;

import org.junit.Assert;
import org.openqa.selenium.WebElement;

import com.pages.LandingPage;
import com.pages.LoginPage;
import com.util.BaseClass;

import cucumber.api.DataTable;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
public class LoginStepDefinition extends BaseClass {
	
	LandingPage lp;
	LoginPage logp;
	
	@Before
	public void setUp() {
		initialisation();
		lp = new LandingPage();
	}
	
	@Given("^user is on landing page$")
	public void user_is_on_landing_page() {
	  WebElement primeLogo = lp.getLogo();
	  Assert.assertTrue( primeLogo.isDisplayed());
	}

	@Then("^user clicks on login button$")
	public void user_clicks_on_login_button()  {
	  logp =  lp.clickOnSignin();
	}

	@Then("^user is navigated to login page$")
	public void user_is_navigated_to_login_page() {
		Assert.assertEquals(driver.getTitle(), "Amazon Sign In");
	}

	@Then("^user enters valid username and password and signsin$")
	public void user_enters_valid_username_and_password_and_signsin(DataTable arg1)  {
	   List<List<String>> logInDetails = arg1.raw();
	   logp.signIn(logInDetails.get(0).get(0), logInDetails.get(0).get(1));
	}

	@Then("^user is navigated to home page$")
	public void user_is_navigated_to_home_page() {
		Assert.assertEquals(driver.getTitle(), "Prime Video");
	}
}
