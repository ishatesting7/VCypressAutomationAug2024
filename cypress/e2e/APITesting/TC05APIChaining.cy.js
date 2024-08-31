describe('API Chaining', ()=>{

    const auth_token = 'Bearer 78d2d6924f0678446974df2ad1fda57dcec59932c4f575d1afe6ca9974a51402'
    var userid;
    it('API Chaining', ()=>{

        cy.request({
            method:'POST',
            url:'https://gorest.co.in/public/v2/users',
            body:{
                
                    name:"Lenny Belardo", 
                    gender:"male", 
                    email: Math.random().toString(6).substring(2)+"@hotmail.com", 
                    status:"active"
                
            },
            headers:
            {
                Authorization:auth_token
            }

        })
        .then((response) =>{

            expect(response.status).to.equal(201)
            
            var responsevalue = JSON.stringify(response.body)

            cy.log(responsevalue);

            userid = response.body.id;

            cy.request({

                method:'GET',
                url:`https://gorest.co.in/public/v2/users/${userid}`,
                headers:
                {
                    Authorization:auth_token
                }
            })
            .then((response)=>{

                expect(response.status).to.equal(200)
            })

            cy.request({
                method:'PUT',
                url:`https://gorest.co.in/public/v2/users/${userid}`,
                body:
                {
                    name:"Ram"
                },
                headers:{
                    Authorization:auth_token
                }
            })
            .then((response)=>{

                expect(response.body.name).to.equal("Ram");
            })

        })
    

    })
})