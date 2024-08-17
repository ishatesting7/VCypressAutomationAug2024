describe('Mouse Operation in Cypress', ()=>{

    //Hovering
    //right click
    //double click
    //drag and drop
    //scrolling
    
    it('Mouse Operation in Cypress', ()=>{

        cy.visit('https://demo.opencart.com/')

        cy.get(':nth-child(1) > .dropdown-menu > .dropdown-inner > .list-unstyled > :nth-child(2) > .nav-link').should('not.be.visible');
        
        cy.get('.nav > :nth-child(1) > .dropdown-toggle').trigger('mouseover').click();

        cy.get(':nth-child(1) > .dropdown-menu > .dropdown-inner > .list-unstyled > :nth-child(2) > .nav-link').should('be.visible');

        cy.get(':nth-child(1) > .dropdown-menu > .dropdown-inner > .list-unstyled > :nth-child(2) > .nav-link').click();

    })

    it('Right Click', ()=>{

        cy.visit('https://swisnl.github.io/jQuery-contextMenu/demo.html')
        
        cy.get('.context-menu-one.btn.btn-neutral').trigger('contextmenu')
    
        cy.get('.context-menu-list').should('be.visible');

        cy.reload()

        cy.get('.context-menu-one.btn.btn-neutral').rightclick();

        cy.get('.context-menu-list').should('be.visible');

    })

    it('Double Click', ()=>{

        cy.visit('https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_ev_ondblclick3')

        //cy.frameLoaded('#iframeResult')

        cy.wait(10000)
        
        cy.iframe('#iframeResult').find('[ondblclick="myFunction()"]').trigger('dblclick');
        

    })

    it('Scroll Demo', ()=>{

        cy.visit('https://scroll.in/tag/Swiggy')
        
        cy.get('.search-next').scrollIntoView({duration:2000}).click()

    })

    it.only('Drag and Drop',()=>{

        cy.visit('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html')
        cy.get('#box4').drag('#box106', {force:true})
    })

    
})