describe('Custom Command',()=>{

    it.only('Verify Title of Home Page', ()=>{

    cy.loginApp('Admin','admin123');
    cy.title().should('eq','OrangeHRM')
    cy.VerifyTextByCSS('Dashboard','.oxd-topbar-header-breadcrumb > .oxd-text');
    })

    it('Verify URL of Home Page', ()=>{

        cy.loginApp('Admin','admin123');
        cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
        })
})
