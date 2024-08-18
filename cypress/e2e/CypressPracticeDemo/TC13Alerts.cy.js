describe('Handle alerts', ()=>{

    it('Handle Alerts-JS Alerts', ()=>{

        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get('[onclick="jsAlert()"]').click();

        cy.on('window:alert', (jsobject)=>{
            expect(jsobject).to.contains('I am a JS Alert');
        })

        cy.get('#result').should('have.text','You successfully clicked an alert')

    })

    it('JS Confirm Alert', ()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

        cy.get('[onclick="jsConfirm()"]').click();

        cy.on('window:confirm',(jsobject)=>{

            expect(jsobject).to.equal('I am a JS Confirm');

        })

    })

    it('JS Confirm Alert - Cancel', ()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

        cy.get('[onclick="jsConfirm()"]').click();

        cy.on('window:confirm',(jsobject)=>{

            expect(jsobject).to.equal('I am a JS Confirm');
            
            //cy.log(jsobject.text())
        })

        cy.on('window:confirm', ()=>false);
    })

    it('prompt msg', ()=>{
       

        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.window().then((wind)=>{

                //cy.log(wind.Text());
            cy.stub(wind,'prompt').returns("Entering Dummy Text");
            
        
        })

        cy.get(':nth-child(3) > button').click()

        
    })

    it.only('Authentication', ()=>{
       

        cy.visit('https://the-internet.herokuapp.com/basic_auth',{auth:
            {
                username:"admin",
                password:"admin"
            }
        })

        cy.visit('https://admin:admin@the-internet.herokuapp.com/basic_auth')


        
    })
})