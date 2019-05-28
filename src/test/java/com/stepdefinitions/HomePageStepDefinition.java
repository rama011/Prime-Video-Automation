package com.stepdefinitions;

import java.util.List;
import java.util.Map;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

import com.pages.HomePage;
import com.pages.LandingPage;
import com.pages.LoginPage;
import com.util.BaseClass;

import cucumber.api.DataTable;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class HomePageStepDefinition extends BaseClass {
	HomePage hp;

	@Before("@HomePageScenarios")
	public void setUpForHomePage() {
		LandingPage lp = new LandingPage();
		LoginPage logp = lp.clickOnSignin();

		hp = logp.signIn(props.getProperty("loginid"), props.getProperty("password"));
	}

	@After(order = 5)
	public void tearDown() {
		driver.quit();
	}

	@After(value = "@HomePageScenarios", order = 10)
	public void tearDownForHomePage() {
		//hp.goToHomePage();
	}

	@Given("^user is on home page$")
	public void user_is_on_home_page() throws InterruptedException {
		if (driver.getTitle().equals("Prime Video")) {
			Assert.assertTrue(true);
		} else {
			driver.findElement(By.xpath("//a[contains(text(),'Home')]")).click();
		}

	}

	@When("^user enters search text in the search box and presses enter$")
	public void user_enters_search_text_in_the_search_box_and_presses_enter(DataTable arg0) {
		List<List<String>> movienames = arg0.raw();
		System.out.println(movienames.get(0).get(0));
		hp.performSearch(movienames.get(0).get(0));
	}

	@Then("^user is navigated to the search results page$")
	public void user_is_navigated_to_the_search_results_page() {
		Assert.assertEquals("Prime Video: Search", driver.getTitle());
	}

	@Given("^user is on movies page$")
	public void user_is_on_movies_page() {
		hp.goToMoviesPage();
		Assert.assertEquals("Prime Video: Movies", driver.getTitle());
	}

	@Given("^user is on tv shows page$")
	public void user_is_on_tv_shows_page() {
		hp.goToTVShowsPage();
		Assert.assertEquals("Prime Video: TV Shows", driver.getTitle());
	}

	@Given("^user is on kids page$")
	public void user_is_on_kids_page() {
		hp.goToKidsPage();
		Assert.assertEquals("Prime Video", driver.getTitle());
	}

	@When("^user selects \"([^\"]*)\" and \"([^\"]*)\" to watch$")
	public void user_selects_and_to_watch(String arg1, String arg2) {
		hp.goToASectionOnHomePage(arg1);
		hp.selectFromWhatToWatchSection(arg2);
		// hp.goToHomePage();
	}

}
