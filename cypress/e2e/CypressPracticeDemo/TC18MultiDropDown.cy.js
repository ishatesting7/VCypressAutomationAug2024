describe('Multi DropDowns', ()=>{

    it('Multi DropDown', ()=>{

        cy.visit('https://testautomationpractice.blogspot.com/')
    
        cy.get('#colors').select([0,1,2]).find(':selected').contains('Blue');

    })
})