describe('Hooks Demos',()=>{

    const expTitle = 'OrangeHRM';
    var expUrl = 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index'
    
    
    beforeEach(()=>{

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
       
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin');

        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123');

        cy.get('.oxd-button').click();
    })
    
    
    it('Verify Title', ()=>{

        cy.title().should('eq',expTitle);

    })

    it('Verify URL', ()=>{

        cy.url().should('equal', expUrl);
    })

    
})









//Cucumber
//@before
//@after
