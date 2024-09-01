import DatePickerPage from "../../PageObjects/datePicker"

describe('DatePicker Demo', ()=>{

    var datePickerPage = new DatePickerPage();

    before(()=>{

        cy.visit('https://demo.automationtesting.in/Datepicker.html')
    })

    it('Open URL and Click DatePicker', function(){

        datePickerPage.getDatePicker().click();
        datePickerPage.getCalender().should('be.visible');
        cy.selectYear(2024)
        cy.wait(2000)
        cy.selectMonth('September')
        cy.wait(2000);
        cy.selectDay(19)

    })
})