describe('Assertion', function(){  //Test Scenarios

    it('Assertion - Implicit Assertion', ()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
       
        cy.url().should('include','orangehrmlive')
        cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.url().should('contains', 'opensource')

        cy.title().should('include', 'Orang')
        .and('eq', 'OrangeHRM')
        .and('contain','HRM')

        cy.xpath('//a').should('have.length','5');

        //cy.xpath('//a').eq(3).click();
        // cy.get('asjdkjsa').contains('sajdkjs').should('sd','dskjd').click();
        //cy.contains('Login').click();
        //expect

        //assert

       //cy.xpath("")  
    }) 
    
})
