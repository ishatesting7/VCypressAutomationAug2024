//https://aquaauth.b2clogin.com/b6ff0ca4-b13d-4240-b73b-2f379291089e/b2c_1a_orbit_signin_web/oauth2/v2.0/authorize?scope=787ce0e0-e8fe-4769-af2c-947643d52e2e%20offline_access&response_type=code&client_id=787ce0e0-e8fe-4769-af2c-947643d52e2e&redirect_uri=https%3A%2F%2Fportal.aquafinance.com%2Fsignin&acr_values=acrValues


describe('Xpath Demo', function(){  //Test Scenarios

    it('Xpath Demo - Test Case 1', ()=>{
        cy.visit('portal.aquafinance.com');
        cy.origin('https://aquaauth.b2clogin.com', function() {
            cy.get('#signInName').type('userRole')

        })
       //cy.xpath("")  
    }) 

    
    
})
