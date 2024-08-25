describe('API Methods', ()=>{


    it('API Methods - POST Call - Approach 1', ()=>{

        //cy.request('POST', 'https://jsonplaceholder.typicode.com/posts')
        cy.request({
            method: 'POST',
            url:'https://jsonplaceholder.typicode.com/posts',
            body:{
                title: 'New Title',
                body: 'New Body - This is a POST call',
                userId: 1
            }
            

        })
        .then((res)=>{
            let resp = JSON.stringify(res.body);
            cy.log(resp);
            expect(res.status).to.eq(201)
            expect(res.body.title).to.equal("New Title");
            expect(res.body.userId).to.equal(1)

        })
    })


    it('API Methods - POST Call - Approach 2', ()=>{

        const reqbody = {
            title: 'New Title - Approach 2',
            body: 'New Body - This is a POST call - Approach 2',
            userId: 12
        }
        //cy.request('POST', 'https://jsonplaceholder.typicode.com/posts')
        cy.request({
            method: 'POST',
            url:'https://jsonplaceholder.typicode.com/posts',
            body:reqbody
            

        })
        .then((res)=>{
            let resp = JSON.stringify(res.body);
            cy.log(resp);
            expect(res.status).to.eq(201)
            expect(res.body.title).to.equal(reqbody.title);
            expect(res.body.userId).to.equal(12)

        })
    })


        it.only('API Methods - POST Call - Approach 3', ()=>{
       
            // cy.fixture('postcall').then((data)=>{
            
            //     abc = JSON.stringify(data);
            //     cy.log(abc);
            // })

            var abc = cy.fixture('postcall').then((data)=>{
            
                abc = JSON.stringify(data);
                cy.log(abc);
            })


            //cy.request('POST', 'https://jsonplaceholder.typicode.com/posts')
            cy.request({
                method: 'POST',
                url:'https://jsonplaceholder.typicode.com/posts',
                body:abc
                
    
            })
            .then((res)=>{
                let resp = JSON.stringify(res.body);
                cy.log(resp);
                expect(res.status).to.eq(201)
                expect(res.body.title).to.equal("New Title - Approach 3");
                expect(res.body.userId).to.equal(12)
    
            })
        })
    })


    // QUERY PARAM - %valu=32?val=23
    // PATH PARAM - /id/1/23/34
