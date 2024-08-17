describe('Radio Button Demo', ()=>{


    it('Radio Button Demo', ()=>{

        cy.visit('https://testautomationpractice.blogspot.com/')

        cy.get('#male').check().should('be.checked');

        cy.get('.form-check-label').eq(0).should('have.text','Male');

        cy.get('.form-check-label').eq(1).should('have.text','Female');

        cy.get('#female').should('not.be.checked');

        cy.get('#female').check().should('be.checked');

        cy.get('#male').should('not.be.checked');

        
    })
})