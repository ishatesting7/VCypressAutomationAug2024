describe('Radio Button Demo', ()=>{


    it('Radio Button Demo', ()=>{

        cy.visit('https://demo.opencart.com/')
      
        cy.title().should('eq','Your Store');
        
        cy.get('[href="https://demo.opencart.com/en-gb/product/macbook"]').click({multiple:true});

        cy.wait(2000)

        cy.title().should('eq','MacBook');

        cy.go('back');

        cy.wait(2000)

        cy.title().should('eq','Your Store');

        cy.wait(2000)

        cy.go('forward')

        cy.go(-1)

        cy.title().should('eq','Your Store');

        cy.go(1)

        cy.title().should('eq','MacBook');

        cy.reload();

       // cy.get('[class="img-fluid"]').click({multiple:true});
        
    })
})