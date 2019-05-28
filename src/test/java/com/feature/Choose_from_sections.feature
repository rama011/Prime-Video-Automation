Feature: Choose what to watch from different sections of home page

@HomePageScenarios
Scenario Outline: Choose what to watch from different categories
	Given user is on home page
	When user selects "<category>" and "<content>" to watch 
	Then user is on the play "<content>" page
	And user clicks on the play button
	Then video will start playing
	Examples:
		  | category      | content   |
			| Latest movies | Photograph |
			| Amazon Original series | Breathe |