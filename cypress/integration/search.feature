@sanity
  Feature: Search
    This feature tests the search functionality.
    It checks if a product is searchable and its details can be viewed

  Background:
    Given I navigate to the homepage of coolblue
    When I accept the usage of cookies
    Then I am on the homepage

    Scenario: add an item to shopping basket
      When I search for a product with the name "garmin vivoactive 4"
      Then I can verify if the product tile "Garmin Vivoactive 4S Zwart 40 mm" contains
      | price | 246 |
      When I select the add to shopping basket button
      Then I can verify if the amount of products in shopping basket is "1"