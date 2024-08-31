describe('Authetication', ()=>{


    it('Basic Authentication', ()=>{

        cy.request({

            method:'GET',
            url:'https://postman-echo.com/basic-auth',
            auth:{
                user:'postman',
                pass:'password'
            }
        })
        .then((response)=>{

            expect(response.body.authenticated).to.eq(true);

            expect(response.status).to.eq(200);

        })

    })

    it('Digest Authentication', ()=>{

        cy.request({

            method:'GET',
            url:'https://postman-echo.com/basic-auth',
            auth:{
                user:'postman',
                pass:'password',
                method:'digest'
            }
        })
        .then((response)=>{

            expect(response.body.authenticated).to.eq(true);

            expect(response.status).to.eq(200);

        })
    })

    it('Bearer Auth', ()=>{

        const token = '30siajd8sdds9d';
        cy.request({

            method:'GET',
            url:'https://api.github.com/user/repos',
            headers:{
                Authorization:'Bearer '+token
            }
        })
    })

    it('API Key', ()=>{
        cy.request({
            method:'GET',
            url:'https://openweathermap.org/',
            qs:{
                appid:'assa',
                b:'asddsd'
            }
        })
        

    })
})