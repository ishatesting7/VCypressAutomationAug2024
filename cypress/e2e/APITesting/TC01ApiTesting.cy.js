describe('API Methods', ()=>{

    it('API Methods - GET Call', ()=>{


        cy.request('GET', 'https://jsonplaceholder.typicode.com/posts/1')
        .its('status')
        .should('equal',200)

    })

    it('API Methods - POST Call', ()=>{

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
        .its('status')
        .should('equal', 201);
    })

    it('API Methods - PUT Call', ()=>{

        cy.request({
            method: 'PUT',
            url:'https://jsonplaceholder.typicode.com/posts/1',
            body:{
                title: 'New Title - Updated',
                body: 'New Body - This is a POST call',
                userId: 1,
                id:1
            }
            

        })
        .its('status')
        .should('equal', 200);
    })


    it('API Methods - DELETE Call', ()=>{

        cy.request({
            method: 'DELETE',
            url:'https://jsonplaceholder.typicode.com/posts/1'

        })
        .its('status')
        .should('equal', 200);
    })


    

    // QUERY PARAM - %valu=32?val=23
    // PATH PARAM - /id/1/23/34

})