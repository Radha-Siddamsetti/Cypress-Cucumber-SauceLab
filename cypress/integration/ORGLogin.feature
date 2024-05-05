Feature: Login Feature
    
    Scenario: Sucess Login
    Given A user opens the login page
    When A user enter the username "Admin"
    And A user enter the password admin123
    And A user clicks on the login button
    Then A user will be success logged in
    And User logout
    Then User logout sucessfully
  
   Scenario: Failed Login
    Given A user opens the login page
    When A user enter the username "Admin"
    And A user enter the wrong password 123
    And A user clicks on the login button
    Then A user will be get failed message
   
   