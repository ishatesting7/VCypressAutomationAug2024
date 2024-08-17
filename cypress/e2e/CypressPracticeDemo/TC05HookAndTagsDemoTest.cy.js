//before
//after
//beforeEach
//afterEach
describe('Hooks and Tags in Cypress', ()=>{

    before(()=>{

        cy.log('---- I am in Before Hook ---')
    })
    
    after(()=>{

        cy.log('---- I am in After Hook ---')
    })

    beforeEach(()=>{

        cy.log('---- I am in Before Each Hook ---')

    })

    afterEach(()=>{

        cy.log('---- I am in After Each Hook ---')

    })

    it('Login Test Cases', ()=>{

        cy.log('Login Test Cases');

    })

    it('Search Test Cases', ()=>{

        cy.log('Search Test Cases');
        
    })

    
})