Feature: Login Feature
    
    Scenario: Sucess Login
    Given A user opens the login page
    When A user enter the username "standard_user"
    And A user enter the password secret_sauce
    And A user clicks on the login button
    Then A user will be success logged in
    And User logout
    Then User logout sucessfully

    Scenario: locked_out_user Login
    Given A user opens the login page
    When A user enter the username "locked_out_user"
    And A user enter the password secret_sauce
    And A user clicks on the login button
    Then A user will be get failed message