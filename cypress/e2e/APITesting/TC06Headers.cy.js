describe('Headers Demo', ()=>{

    let auth_token;
    let order_id;
    it('Create Access Token', ()=>{

        cy.request({
             method:'POST',
             url:'https://simple-books-api.glitch.me/api-clients/',
             body:{
                clientName: "Hakan",
                clientEmail: Math.random().toString(6).substring(2)+"@msn.com"
             },
             headers:
             {
                'Content-Type':'application/json'
             }

        }).then((response)=>{

            var responseValue = JSON.stringify(response.body);
            cy.log(responseValue);

            auth_token = response.body.accessToken 
            cy.log(auth_token)
        })
    })
    it('Create a New Order', ()=>{

        cy.request({
            method:'POST',
            url:'https://simple-books-api.glitch.me/orders/',
            headers:{
                'Content-Type':'application/json',
                'Authorization': 'Bearer '+auth_token
            },
            body:
            {
                "bookId":1,
                "customerName":"asdcasd"
            }
        })
        .then((response)=>{
            expect(response.status).to.eq(201)
            cy.log(response.body)
            var resValue = JSON.stringify(response.body);
            cy.log(resValue)
            order_id = response.body.orderId
            cy.log(order_id)
        })
    })

    it('Get Orders', ()=>{

        cy.request({
            method:'GET',
            url:`https://simple-books-api.glitch.me/orders/${order_id}`,
            headers:{
                'Authorization': 'Bearer '+auth_token
            }
           
        })
        .then((response)=>{
            expect(response.status).to.eq(200)
            cy.log(response.body)
        })
    })
})