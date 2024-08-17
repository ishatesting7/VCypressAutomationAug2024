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

    })
    
    it.only('Assertion - Explicit Assertion', ()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');

        cy.get("input[name='username']").type('Admin')

        cy.get("input[name='password']").type('admin123{enter}',{log:false})


        // let var and const

        let expValue = 'manda user'

        cy.get('.oxd-userdropdown-tab').then( (m) =>{

            let actValue = m.text();

            expect(actValue).to.equal(expValue);

            assert.equal(actValue,expValue);

        })
        cy.get('.oxd-input').type('Admin');

        cy.get('.oxd-main-menu-item > .oxd-text').click();

        cy.get(':nth-child(2) > .oxd-input').type('AdminNEW');

        cy.get('.oxd-form-actions > .oxd-button--secondary').click();


        cy.get('.oxd-table-card > .oxd-table-row > :nth-child(2) > div').should('be.visible');

        cy.get('.oxd-table-card > .oxd-table-row > :nth-child(3) > div').should('be.visible');

        cy.get('.oxd-table-cell-actions > :nth-child(1)').should('have.length', 1);

        cy.get('.oxd-table-card > .oxd-table-row > :nth-child(2) > div').should('have.text','AdminNEW');
         
        cy.contains('Reset').click();

        cy.contains('Directory').click();

    })


    
})
