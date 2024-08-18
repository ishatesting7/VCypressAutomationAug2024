describe('Window and Tags in Cypress', ()=>{
    
    it('Windows', ()=>{

        cy.visit('https://the-internet.herokuapp.com/windows')

        cy.get('.example > a').invoke('removeAttr','target').click()

        cy.url().should('include','https://the-internet.herokuapp.com/windows/new')

        cy.get('h3').should('be.visible');

    })

    it.only('Second Approach', ()=>{

        cy.visit('https://the-internet.herokuapp.com/windows')


        cy.get('.example > a').then((ele) =>{

            let urlnew = ele.prop('href');
           

            cy.visit(urlnew);
        })

        cy.url().should('include','https://the-internet.herokuapp.com/windows/new')

        cy.get('h3').should('be.visible').should('have.text','New Window').should('contain','New Window');

    })

    
})