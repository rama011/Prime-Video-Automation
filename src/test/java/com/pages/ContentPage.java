package com.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.util.BaseClass;

public class ContentPage extends BaseClass{
	
	public ContentPage() {
		PageFactory.initElements(driver, this);
	}
	
	@FindBy(xpath="//h1[@data-automation-id='title']")
	private WebElement contentHeader;
	
	@FindBy(xpath="//a[@data-automation-id='playback-atf']")
	private WebElement playbackButton;
	
	@FindBy(xpath="//a[@data-automation-id='trailer-button']")
	private WebElement playTrailerButton;
	
	public String getHeader() {
		return contentHeader.getText();
	}
	
	public void clickOnPlayButton() {
		playbackButton.click();
	}
	
	public void clickOnWatchTrailer() {
		playTrailerButton.click();
	}
}
