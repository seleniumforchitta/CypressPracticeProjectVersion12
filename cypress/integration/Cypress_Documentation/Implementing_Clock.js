describe('Real-Time Clock Test', () => {
    // Custom command to set the system clock
    Cypress.Commands.add('setSystemClock', (timestamp) => {
      cy.clock(timestamp);
    });
  
    beforeEach(() => {
      cy.visit('https://www.javatpoint.com/');
    });
  
    it('Should display and update the real-time clock', () => {
      // Get the clock element
      cy.get('#gsc-i-id1').as('clockElement');
  
      // Custom command to get the current system time
      cy.window().then((window) => {
        const currentTimestamp = window.Date.now();
  
        // Set the system clock to the current time
        cy.setSystemClock(currentTimestamp);
  
        // Validate if the real-time clock displays the correct initial time
        cy.get('@clockElement').should('contain', new Date(currentTimestamp).toLocaleTimeString());
  
        // Set the system clock to 10 seconds later
        const updatedTimestamp = currentTimestamp + 10000;
        cy.setSystemClock(updatedTimestamp);
  
        // Validate if the real-time clock updates to the correct time
        cy.get('@clockElement').should('contain', new Date(updatedTimestamp).toLocaleTimeString());


      });
      cy.get('ul > :nth-child(3) > a').click()
      cy.url().should('contain','java')
    });
  });
  