package com.util;

import java.io.File;
import java.io.FileInputStream;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;
import org.openqa.selenium.support.ui.WebDriverWait;

public class BaseClass {
	public static WebDriver driver;
	public static Properties props;
	public static WebDriverWait wait;
	
	public BaseClass(){
		try {
			props = new Properties();
			FileInputStream fis = new FileInputStream(new File("C:\\Users\\Rama\\eclipse-workspace\\com.primevideo.bdd.framework\\src\\test\\java\\com\\util\\config.properties"));
			props.load(fis);
		}
		catch(Exception e) {
			e.printStackTrace();
		}
	}
	
	public static void initialisation() {
		String browserType = props.getProperty("browser");
		String openUrl = props.getProperty("url");
		switch(browserType) {
		case("chrome"): {
			System.setProperty("webdriver.chrome.driver", "D:\\Automation\\Selenium\\chromedriver.exe");
			driver = new ChromeDriver(); 
			break;
			}
		case("ie"): {
			System.setProperty("webdriver.ie.driver", "D:\\Automation\\Selenium\\IEDriverServer.exe");
			driver = new InternetExplorerDriver(); 
			break;
			}
		default:{
			System.out.println("Please provide a valid browser option");
			break;
			}
		
		}
		
		driver.manage().window().maximize();
		driver.manage().timeouts().pageLoadTimeout(20, TimeUnit.SECONDS);
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		wait = new WebDriverWait(driver, 20);
		
		driver.get(openUrl);
	}
	
}
