describe('Handle Fixture Folder',()=>{
    it('Handle Fixture', ()=>{

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        cy.fixture('orangehrm.json').then((data)=>{

        cy.get("input[name='username']").type(data.username)

        cy.get("input[name='password']").type(data.password) 
        
        cy.get('[type="submit"]').click();
        
        })

    })
})