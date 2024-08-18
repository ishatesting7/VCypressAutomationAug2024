describe('File Upload',()=>{

    it('File Upload', ()=>{

        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get('#file-upload').attachFile('file-example_PDF_1MB.pdf');
        cy.wait(5000);
        cy.get('#file-submit').click();
        cy.get('h3').should('have.text','File Uploaded!')

    })

    it('File Upload - Multiple', ()=>{

        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get('#file-upload').attachFile(['file-example_PDF_1MB.pdf','example.json']);
        cy.wait(5000);
        cy.get('#file-submit').click();
        cy.get('h3').should('have.text','File Uploaded!')

    })

    it.only('File Upload - Rename', ()=>{

        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get('#file-upload').attachFile({fileName:'fileByQa',filePath:'file-example_PDF_1MB.pdf'});
        cy.wait(5000);
        cy.get('#file-submit').click();
        cy.get('h3').should('have.text','File Uploaded!')

    })
})