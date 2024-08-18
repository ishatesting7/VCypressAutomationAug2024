describe('Handle Data Driven',()=>{
    it('Handle Data Driven', ()=>{

        cy.fixture('orangehrm2.json').then((data)=>{

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

        data.forEach((userdata)=>{

        cy.get("input[name='username']").type(userdata.username)

        cy.get("input[name='password']").type(userdata.password) 
        
        cy.get('[type="submit"]').click();

        cy.wait(5000);
        if(userdata.username=='Admin' && userdata.password=='admin123')
        {
            cy.get('.oxd-userdropdown-name').click();
            cy.get(':nth-child(4) > .oxd-userdropdown-link').click();
        }
        cy.wait(5000);
            })
        })

    })
})