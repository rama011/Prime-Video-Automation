$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "line": 1,
  "name": "Free CRM login feature",
  "description": "",
  "id": "free-crm-login-feature",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 2,
  "name": "Free CRM Login scenario",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-scenario",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 3,
  "name": "User is on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "User enters username and password",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "clicks on login button",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "user is successfully navigated to home page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinitionClass.user_is_on_login_page()"
});
formatter.result({
  "duration": 16600216768,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinitionClass.user_enters_username_and_password()"
});
formatter.result({
  "duration": 375933607,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinitionClass.clicks_on_login_button()"
});
formatter.result({
  "duration": 15553836395,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinitionClass.user_is_successfully_navigated_to_home_page()"
});
formatter.result({
  "duration": 160596235,
  "status": "passed"
});
});