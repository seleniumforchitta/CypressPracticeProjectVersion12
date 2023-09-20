/// <reference types="Cypress" />  

describe('Test Suite - GreenKart Automation', function () {
    it('TC1 - Add elements into GreenKart', function () {
        cy.log("This is my first log statement")
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        expect(true).to.equal(true)
        console.log("This is my first log statement")
        cy.wait(2000)
        cy.get('.search-keyword').type('ca')
        cy.get('.product h4').should('have.length', 4)
        cy.get('.product h4:visible').then(($len) => {   // we can use :visible so that only visible elements will come. it will not show hidden elements 
            length = $len.length;
            cy.log(length)
        })
        cy.get('.product').find('h4').should('have.length', 4) // instaed of  cy.get('.product h4') we can use cy.get('.product').find('h4')

        cy.get('.product').find('div[class="product-action"]').eq(1).contains('ADD TO CART').click() // eq(1) will act as an xpath indexing
        cy.xpath('(//div[@class="products"])[1]').xpath('//div[@class="product"]').should('have.length', 4) // xpath can be used like find() 

        cy.get('.product').find('h4.product-name').each(($el, index, $list) => {
            /* This is a way to iterate over all the elements in cypress
                $el = current value
                index = current index
                $list = Total List 
            */
            const vegText = $el.text()
            if (vegText.includes('Cashews')) {
                // $el.parent('.product').find('div[class="product-action"]').click() 
                // you will get error in click() as promise is not resolved, so we will use wrap()
                cy.wrap($el).parent('.product').find('div[class="product-action"]').click()
            }
        })   
        
        //Click on the Cart btn
        cy.get('a.cart-icon').click()
        cy.contains('PROCEED TO CHECKOUT').click({force : true}) //Click with force true 
        cy.contains('Place Order').should('be.enabled')
        cy.contains('Place Order').click({force : true})


    })
})