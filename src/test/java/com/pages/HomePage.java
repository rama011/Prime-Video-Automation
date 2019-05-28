package com.pages;

import java.util.Iterator;
import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;

import com.util.BaseClass;

public class HomePage extends BaseClass {
	
	public HomePage() {
		PageFactory.initElements(driver, this);
	}
	
	@FindBy(xpath="//a[contains(text(),'Home')]")
	private WebElement navbarHomeButton;
	
	@FindBy(xpath="//a[contains(text(),'TV Shows')]")
	private WebElement navbarTVShowsButton;
	
	@FindBy(xpath="//a[contains(text(),'Movies')]")
	private WebElement navbarMoviesButton;
	
	@FindBy(xpath="//a[contains(text(),'Kids')]")
	private WebElement navbarKidsButton;
	
	@FindBy(id="pv-search-nav")
	private WebElement searchTab;
	
	public SearchPage performSearch(String searchText) {
		searchTab.click();
		searchTab.sendKeys(searchText+Keys.RETURN);
		return new SearchPage();
	}
	
	public void goToHomePage() {
		if(navbarHomeButton.isDisplayed()) {
			navbarHomeButton.click();
		}else {
			System.out.println("Home button is not visible...");
		}
		
	}
	
	public void goToMoviesPage() {
		navbarMoviesButton.click();
	}
	
	public void goToTVShowsPage() {
		navbarTVShowsButton.click();
	}
	
	public void goToKidsPage() {
		navbarKidsButton.click();
	}
	
	public void goToASectionOnHomePage(String section) {
		JavascriptExecutor js = (JavascriptExecutor)driver;
		while(true) {
			try {
				if(!driver.findElement(By.xpath("//h2[contains(@class,'Header') and contains(text(),'"+section+"')]")).isDisplayed()) {
					throw new Exception();
				}else {
					break;
				}
				
			}catch(Exception e) {
				js.executeScript("window.scrollBy(0,700)");
			}
		}
		
	}
	
	public void selectFromWhatToWatchSection(String content) {
		while(!driver.findElement(By.xpath("//a[contains(@aria-label,'"+content+"')]")).isDisplayed()) {
			driver.findElement(By.xpath("//button[@contains(@aria-label,'Right')]")).click();
		}
		driver.findElement(By.xpath("//a[contains(@aria-label,'"+content+"')]")).click();
	}
	
	
}
