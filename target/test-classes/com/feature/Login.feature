Feature: Login feature 

Scenario: User wants to login with valid credentials
	Given user is on landing page
	Then user clicks on login button
	And user is navigated to login page
	Then user enters valid username and password and signsin
		| iyerramakrishnan5@gmail.com | 11@Gooner |
	Then user is navigated to home page