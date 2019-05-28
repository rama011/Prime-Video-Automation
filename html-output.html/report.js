$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Choose_from_sections.feature");
formatter.feature({
  "line": 1,
  "name": "Choose what to watch from different sections of home page",
  "description": "",
  "id": "choose-what-to-watch-from-different-sections-of-home-page",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Choose what to watch from different categories",
  "description": "",
  "id": "choose-what-to-watch-from-different-sections-of-home-page;choose-what-to-watch-from-different-categories",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@HomePageScenarios"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "user is on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user selects \"\u003ccategory\u003e\" and \"\u003ccontent\u003e\" to watch",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user is on the play \"\u003ccontent\u003e\" page",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user clicks on the play button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "video will start playing",
  "keyword": "Then "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "choose-what-to-watch-from-different-sections-of-home-page;choose-what-to-watch-from-different-categories;",
  "rows": [
    {
      "cells": [
        "category",
        "content"
      ],
      "line": 11,
      "id": "choose-what-to-watch-from-different-sections-of-home-page;choose-what-to-watch-from-different-categories;;1"
    },
    {
      "cells": [
        "Latest movies",
        "Photograph"
      ],
      "line": 12,
      "id": "choose-what-to-watch-from-different-sections-of-home-page;choose-what-to-watch-from-different-categories;;2"
    },
    {
      "cells": [
        "Amazon Original series",
        "Breathe"
      ],
      "line": 13,
      "id": "choose-what-to-watch-from-different-sections-of-home-page;choose-what-to-watch-from-different-categories;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 8466473196,
  "status": "passed"
});
formatter.before({
  "duration": 10710286254,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Choose what to watch from different categories",
  "description": "",
  "id": "choose-what-to-watch-from-different-sections-of-home-page;choose-what-to-watch-from-different-categories;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@HomePageScenarios"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "user is on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user selects \"Latest movies\" and \"Photograph\" to watch",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user is on the play \"Photograph\" page",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user clicks on the play button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "video will start playing",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageStepDefinition.user_is_on_home_page()"
});
formatter.result({
  "duration": 397502335,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Latest movies",
      "offset": 14
    },
    {
      "val": "Photograph",
      "offset": 34
    }
  ],
  "location": "HomePageStepDefinition.user_selects_and_to_watch(String,String)"
});
formatter.result({
  "duration": 2045186337,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Photograph",
      "offset": 21
    }
  ],
  "location": "ContentPageStepDefinition.user_is_on_the_play_page(String)"
});
formatter.result({
  "duration": 46480586,
  "status": "passed"
});
formatter.match({
  "location": "ContentPageStepDefinition.user_clicks_on_the_play_button()"
});
formatter.result({
  "duration": 173412980,
  "status": "passed"
});
formatter.match({
  "location": "ContentPageStepDefinition.video_will_start_playing()"
});
formatter.result({
  "duration": 18988,
  "status": "passed"
});
formatter.after({
  "duration": 11290,
  "status": "passed"
});
formatter.after({
  "duration": 877333190,
  "status": "passed"
});
formatter.before({
  "duration": 5605207275,
  "status": "passed"
});
formatter.before({
  "duration": 9565658260,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Choose what to watch from different categories",
  "description": "",
  "id": "choose-what-to-watch-from-different-sections-of-home-page;choose-what-to-watch-from-different-categories;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@HomePageScenarios"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "user is on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user selects \"Amazon Original series\" and \"Breathe\" to watch",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user is on the play \"Breathe\" page",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user clicks on the play button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "video will start playing",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageStepDefinition.user_is_on_home_page()"
});
formatter.result({
  "duration": 78548922,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Amazon Original series",
      "offset": 14
    },
    {
      "val": "Breathe",
      "offset": 43
    }
  ],
  "location": "HomePageStepDefinition.user_selects_and_to_watch(String,String)"
});
formatter.result({
  "duration": 2549342612,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Breathe",
      "offset": 21
    }
  ],
  "location": "ContentPageStepDefinition.user_is_on_the_play_page(String)"
});
formatter.result({
  "duration": 80518008,
  "status": "passed"
});
formatter.match({
  "location": "ContentPageStepDefinition.user_clicks_on_the_play_button()"
});
formatter.result({
  "duration": 143570834,
  "status": "passed"
});
formatter.match({
  "location": "ContentPageStepDefinition.video_will_start_playing()"
});
formatter.result({
  "duration": 21553,
  "status": "passed"
});
formatter.after({
  "duration": 13856,
  "status": "passed"
});
formatter.after({
  "duration": 909438474,
  "status": "passed"
});
formatter.uri("Login.feature");
formatter.feature({
  "line": 1,
  "name": "Login feature",
  "description": "",
  "id": "login-feature",
  "keyword": "Feature"
});
formatter.before({
  "duration": 5636840944,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "User wants to login with valid credentials",
  "description": "",
  "id": "login-feature;user-wants-to-login-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "user is on landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "user is navigated to login page",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user enters valid username and password and signsin",
  "rows": [
    {
      "cells": [
        "iyerramakrishnan5@gmail.com",
        "11@Gooner"
      ],
      "line": 8
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user is navigated to home page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_landing_page()"
});
formatter.result({
  "duration": 141419569,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 2919566668,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_is_navigated_to_login_page()"
});
formatter.result({
  "duration": 13044103,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_enters_valid_username_and_password_and_signsin(DataTable)"
});
formatter.result({
  "duration": 7647125145,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_is_navigated_to_home_page()"
});
formatter.result({
  "duration": 41488335,
  "status": "passed"
});
formatter.after({
  "duration": 915960012,
  "status": "passed"
});
formatter.uri("Search.feature");
formatter.feature({
  "line": 1,
  "name": "Search feature",
  "description": "",
  "id": "search-feature",
  "keyword": "Feature"
});
formatter.before({
  "duration": 6216599440,
  "status": "passed"
});
formatter.before({
  "duration": 7070596114,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "User searches a movie from Home Page",
  "description": "",
  "id": "search-feature;user-searches-a-movie-from-home-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@HomePageScenarios"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "user is on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user enters search text in the search box and presses enter",
  "rows": [
    {
      "cells": [
        "Gold"
      ],
      "line": 7
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user is navigated to the search results page",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageStepDefinition.user_is_on_home_page()"
});
formatter.result({
  "duration": 4147269862,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStepDefinition.user_enters_search_text_in_the_search_box_and_presses_enter(DataTable)"
});
formatter.result({
  "duration": 2219526640,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStepDefinition.user_is_navigated_to_the_search_results_page()"
});
formatter.result({
  "duration": 21513173,
  "status": "passed"
});
formatter.after({
  "duration": 17961,
  "status": "passed"
});
formatter.after({
  "duration": 932888916,
  "status": "passed"
});
formatter.before({
  "duration": 5690665188,
  "status": "passed"
});
formatter.before({
  "duration": 8924280773,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "User searches a movie from Movies Page",
  "description": "",
  "id": "search-feature;user-searches-a-movie-from-movies-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 10,
      "name": "@HomePageScenarios"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "user is on movies page",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "user enters search text in the search box and presses enter",
  "rows": [
    {
      "cells": [
        "Kesari"
      ],
      "line": 14
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "user is navigated to the search results page",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageStepDefinition.user_is_on_movies_page()"
});
formatter.result({
  "duration": 4314813047,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStepDefinition.user_enters_search_text_in_the_search_box_and_presses_enter(DataTable)"
});
formatter.result({
  "duration": 1999671563,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStepDefinition.user_is_navigated_to_the_search_results_page()"
});
formatter.result({
  "duration": 10774292,
  "status": "passed"
});
formatter.after({
  "duration": 16422,
  "status": "passed"
});
formatter.after({
  "duration": 900641993,
  "status": "passed"
});
formatter.before({
  "duration": 5593295255,
  "status": "passed"
});
formatter.before({
  "duration": 8751966520,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "User searches a tv show from TV Shows Page",
  "description": "",
  "id": "search-feature;user-searches-a-tv-show-from-tv-shows-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 17,
      "name": "@HomePageScenarios"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "user is on tv shows page",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "user enters search text in the search box and presses enter",
  "rows": [
    {
      "cells": [
        "Mirzapur"
      ],
      "line": 21
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "user is navigated to the search results page",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageStepDefinition.user_is_on_tv_shows_page()"
});
formatter.result({
  "duration": 4297010192,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStepDefinition.user_enters_search_text_in_the_search_box_and_presses_enter(DataTable)"
});
formatter.result({
  "duration": 1780451294,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStepDefinition.user_is_navigated_to_the_search_results_page()"
});
formatter.result({
  "duration": 19230019,
  "status": "passed"
});
formatter.after({
  "duration": 20527,
  "status": "passed"
});
formatter.after({
  "duration": 924884790,
  "status": "passed"
});
formatter.before({
  "duration": 5704138314,
  "status": "passed"
});
formatter.before({
  "duration": 9611508657,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "User searches a kids show from Kids Page",
  "description": "",
  "id": "search-feature;user-searches-a-kids-show-from-kids-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 24,
      "name": "@HomePageScenarios"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": "user is on kids page",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "user enters search text in the search box and presses enter",
  "rows": [
    {
      "cells": [
        "Harry Potter"
      ],
      "line": 28
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "user is navigated to the search results page",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageStepDefinition.user_is_on_kids_page()"
});
formatter.result({
  "duration": 3205189313,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStepDefinition.user_enters_search_text_in_the_search_box_and_presses_enter(DataTable)"
});
formatter.result({
  "duration": 1878461168,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStepDefinition.user_is_navigated_to_the_search_results_page()"
});
formatter.result({
  "duration": 21143681,
  "status": "passed"
});
formatter.after({
  "duration": 34383,
  "status": "passed"
});
formatter.after({
  "duration": 880005337,
  "status": "passed"
});
});