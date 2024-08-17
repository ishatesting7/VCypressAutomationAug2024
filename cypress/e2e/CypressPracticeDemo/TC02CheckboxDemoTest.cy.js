describe('Radio Button Demo', ()=>{


    it('Radio Button Demo', ()=>{

        cy.visit('https://testautomationpractice.blogspot.com/')


        cy.get('[for="sunday"]').click()

        cy.pause()
        
        cy.get("[type='checkbox']").check();

        cy.get('[for="sunday"]').should('have.text','Sunday')

        cy.get("[type='checkbox']").should('have.length',12)
        
        cy.get("[type='checkbox']").uncheck().should('not.be.checked');



    })
})