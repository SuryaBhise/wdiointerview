Feature: Clario web portal basic test

  Scenario Outline: Successful user login
    Given User open the browser and load the url <homepageUrl>
    When User enter email <email>
    And User click on the next button
    And User enter password <password>
    And User click on the submit button
    Then User should be logged and see header <headerText>
    Then User able to see proc reqest title

    Examples: 
      | homepageUrl                           | email                      | password    | headerText |
      | https://integration.ai.bioclinica.com | suryakant.bhise@clario.com | Share-in-mail | AQUARIUS   |

  Scenario Outline: Searching by providing proc request id
    When User enter the proc request id <procRequestId>
    And User click the search button
    Then User should see only one row with proc request id

    Examples: 
      | procRequestId                        |
      | 11eecfe141511c50895921e9c09d9c32f4fb |

  Scenario: Navigate to Process Request Details Page
    When User clicks on the first request link
    Then User should be directed to the process request details page
    And the auto-refresh button should be enabled as default


