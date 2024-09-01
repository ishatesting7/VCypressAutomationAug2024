// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import 'cypress-iframe';

require('@4tw/cypress-drag-drop')

import 'cypress-file-upload';
import DatePickerPage from '../PageObjects/datePicker';


Cypress.Commands.add("loginApp",(emailid, password)=>{

    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get('[name="username"]').type(emailid);
    cy.get('[name="password"]').type(password);
    cy.get('[type="submit"]').click();
})

Cypress.Commands.add("VerifyTextByCSS",(text,locator)=>{

    cy.get(locator).should('have.text',text);
})

Cypress.Commands.add("VerifyTextByXpath",(text,locator)=>{

    cy.xpath(locator).should('have.text',text);
})

//import DatePickerPage  from '../PageObjects/datePicker';
import DateUtils from './DateUtils';

var datePickerPage = new DatePickerPage();
var dateUtils = new DateUtils();

Cypress.Commands.add('selectYear', (yearName) =>{

    const currentYear = new Date().getFullYear()

    datePickerPage.getYearName().then(($year)=>{

        if($year.text()==yearName){
            cy.log(yearName + 'is  Selected');
            return
        }
        else{

            if(yearName < currentYear)
            {
                datePickerPage.getNavigateBack().click();
            }
            else if(yearName > currentYear)
            {
                datePickerPage.getNavigateForward().click();
            }
        }
        cy.selectYear(yearName)
    })
})

Cypress.Commands.add('selectMonth', (monthName) =>{

    let currentMonth = new Date().getMonth() +1
    let givenMonth = dateUtils.getMonthIndexFromName(monthName)

    datePickerPage.getMonthName().then(($month)=>{

        if($month.text().includes(monthName))
        {
            cy.log(monthName + 'month is selected')
            return
        }
        else{
            if(givenMonth > currentMonth)
            {
                datePickerPage.getNavigateForward().click()
            }
            else if(givenMonth < currentMonth)
            {
                datePickerPage.getNavigateForward().click()
            }
        }
        cy.selectMonth(monthName)
    })
})
Cypress.Commands.add('selectDay', (dayName)=>{

    datePickerPage.getCalenderDays().eq(dayName-1).click();
    cy.log(dayName + 'Day is selected');
    
})
//1 - Jan
//2 - Feb