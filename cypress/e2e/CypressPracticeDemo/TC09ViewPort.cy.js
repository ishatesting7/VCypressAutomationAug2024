describe('ViewPort in Cypress', ()=>{
    
    it('ViewPort - Iphone', ()=>{
        cy.viewport('iphone-xr')
        cy.visit('https://www.flipkart.com/')

    })


    it('ViewPort - Macbook', ()=>{
        cy.viewport('macbook-16')
        cy.visit('https://www.flipkart.com/')
        cy.wait(5000)

    })

    it('ViewPort - Macbook', ()=>{
        cy.viewport('macbook-16')
        cy.visit('https://www.flipkart.com/')
        cy.wait(5000)
    })


    it.only('ViewPort - Samsung', ()=>{
        cy.viewport('samsung-s10')
        cy.visit('https://www.flipkart.com/')
        cy.wait(5000)
        
        cy.get('.uiU-ZX').should('be.visible');
        cy.get('.YLCOuy > picture > img').should('be.visible');
    })

})
