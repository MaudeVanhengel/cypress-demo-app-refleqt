import {When, Then} from 'cypress-cucumber-preprocessor/steps';
import home_page from "../pages/home_page";
import data_helper from "../data_helper";

beforeEach(() => {
    cy.viewport(1920,1080)
})

afterEach(() => {
    cy.screenshot({capture: 'viewport'})
})

When('I search for a product with the name {string}', (productname) => {
    home_page.searchForItem(productname)
})


Then('I can verify if the product tile {string} contains', (string, datatable) => {
    let product = data_helper.toMap(datatable);

    home_page.findProductAndValidate(string, product)
})

When('I select the add to shopping basket button', () => {
    //home_page.addToShoppingCart()
})