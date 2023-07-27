/// <reference types="Cypress" />
const { values } = require("lodash")
describe('My Third Test Suite.', function () {
    it('My First Test Case', function () {
        // Test step should be written here. 
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        //CHECKBOXES
        //Click on check box & verify if it checked & multiple validation
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1'); // you can still do click()
        //for behaviour we'll use ‘be’, for property we'll use ‘have’. 
        //Can go through all chai assertions below 
        //https://docs.cypress.io/guides/references/assertions#BDD-Assertions
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked');
        //if want to check multiple checkboxes
        cy.get('input[type="checkbox"]').check(['option2', 'option3']);
        // it will check the 'value' with option2 & 3 For behaviour we will use – be & for property we will use have. 
        //STATIC DROPDOWN
        cy.get('select').select('option2').should('have.value', 'option2');

        //DYNAMIC DROPDOWN
        cy.get('#autocomplete').type('ind');
        cy.get('.ui-menu-item div').each(($el, index, $list) => {
            if ($el.text() == 'India') {
                $el.click();
            }
        })
        //Visibility of elements 
        cy.get('#displayed-text').should('be.visible');
        cy.get('#hide-textbox').click();
        cy.get('#displayed-text').should('not.be.visible');

        //RADIO BUTTONS - exactly same as checkboxes 
        cy.get('[value="radio2"]').check().should('be.checked');
    })
})
