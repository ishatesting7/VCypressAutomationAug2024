describe('Table', ()=>{

    var expCustomer = 'DennisAHunt@teleworm.com';
    beforeEach(()=>{
        cy.visit('https://demo3x.opencartreports.com/admin/');
        cy.get('#input-username').type('demo');
        cy.get('#input-password').type('demo');
        cy.get('[type="submit"]').click();

        //https://demo3x.opencartreports.com/admin/
    })

    it('Check Number of Rows and Column ', function(){

        cy.get('#menu-customer > a').click()
        cy.get('#menu-customer > ul>li:first-child').click()
        cy.get('table[class="table table-bordered table-hover"]>tbody>tr').should('have.length',7);
        cy.get('table[class="table table-bordered table-hover"]>thead>tr>td').should('have.length',10);

        cy.get('table[class="table table-bordered table-hover"]>tbody>tr').its('length').then((rowCount)=>{

            cy.log("Count Row",rowCount);
        })  

        cy.get('table[class="table table-bordered table-hover"]>thead>tr>td').its('length').then((rowCount)=>{

            cy.log("Count Column",rowCount);
        })

    })

    it('Check Specific Data Into Table', function(){

        cy.get('#menu-customer > a').click()
        cy.get('#menu-customer > ul>li:first-child').click()
        cy.get('table[class="table table-bordered table-hover"]>tbody>tr:nth-child(3)>td:nth-child(3)').then((expCu)=>{
            var expcustomer = expCu.text()
            cy.log(expcustomer)

            expect(expcustomer).to.equal(expCustomer);

        })

    })

    it.only('Pagination', ()=>{

        cy.get('#menu-customer > a').click()
        cy.get('#menu-customer > ul>li:first-child').click()
        cy.get('.row > .text-right').then((pagCount)=>{

            let pageCount = pagCount.text()
            cy.log(pageCount);
            pageCount = pageCount.substring(pageCount.indexOf("(")+1,pageCount.indexOf("Pages")-1);
            cy.log(pageCount);

            // Showing 1 to 7 of 7 (1 Pages)

        })


        let totalPage = 2;

        for(let p=1; p<=totalPage;p++)
        {
                if(totalPage>1)
                {
                    cy.log("Current Active Page --"+p)
                    cy.wait(2000);
                    cy.get('ul[class="pagination"]>li:nth-child('+p+')').click();
                    cy.wait(2000);
                }

        }

        

    })


})