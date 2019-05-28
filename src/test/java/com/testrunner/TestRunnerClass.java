package com.testrunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "C:\\Users\\Rama\\eclipse-workspace\\com.primevideo.bdd.framework\\src\\test\\java\\com\\feature"
		,glue= {"com.stepdefinitions"}
		,monochrome=true
		,plugin= {"pretty","html:html-output.html"}
		,dryRun = false
		,strict=true
		)
public class TestRunnerClass {

}
