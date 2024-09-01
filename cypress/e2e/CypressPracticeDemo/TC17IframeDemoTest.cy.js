describe('Cypress Iframe Demo', ()=>{

    it('Cypress Iframe Demo', ()=>{

       // https://jqueryui.com/datepicker/
        
       cy.visit('https://jqueryui.com/datepicker/');

       cy.frameLoaded('.demo-frame')

       cy.iframe().find('#datepicker').should('be.visible').type('09/02/2024 {enter}');
        
       cy.get('.asnd') //outside iframe

    })
})