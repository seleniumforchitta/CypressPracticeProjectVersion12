/// <reference types="Cypress" />  

describe('Practicing basic cypress commands.', () => {
    it('check how contains() work.', () => {
      cy.visit('https://docs.cypress.io/') // 1.
  
      cy.contains("Core Concepts").click();
  
      cy.contains("Introduction to Cypress").click();

      cy.get('h1', { timeout: 10000 }).should("contain", "Introduction to Cypress") 
      // Give this element 10 seconds to appear
      
    });
  });