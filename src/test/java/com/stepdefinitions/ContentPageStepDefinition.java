package com.stepdefinitions;

import com.pages.ContentPage;
import com.util.BaseClass;

import cucumber.api.java.en.Then;
import junit.framework.Assert;

public class ContentPageStepDefinition extends BaseClass {
	ContentPage cp;
	@Then("^user is on the play \"([^\"]*)\" page$")
	public void user_is_on_the_play_page(String arg1) {
	    cp = new ContentPage();
	    Assert.assertEquals(arg1, cp.getHeader());
	}
	
	@Then("^user clicks on the play button$")
	public void user_clicks_on_the_play_button() {
	   cp.clickOnPlayButton();
	}

	@Then("^video will start playing$")
	public void video_will_start_playing()  {
	   //cp.clickOnWatchTrailer();
	}


}
