Feature: Search feature

@HomePageScenarios
Scenario: User searches a movie from Home Page
	Given user is on home page
	When user enters search text in the search box and presses enter
		| Gold |
	Then user is navigated to the search results page
	
@HomePageScenarios
Scenario: User searches a movie from Movies Page
	Given user is on movies page
	When user enters search text in the search box and presses enter
		| Kesari |
	Then user is navigated to the search results page
	
@HomePageScenarios
Scenario: User searches a tv show from TV Shows Page
	Given user is on tv shows page
	When user enters search text in the search box and presses enter
		| Mirzapur |
	Then user is navigated to the search results page
	
@HomePageScenarios
Scenario: User searches a kids show from Kids Page
	Given user is on kids page
	When user enters search text in the search box and presses enter
		| Harry Potter |
	Then user is navigated to the search results page