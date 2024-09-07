1. Handling Tabs and Window in cypress
2. ViewPort command in Cypress - https://docs.cypress.io/api/commands/viewport
3. Customized Commands in Cypress - you need add in command.js under support folder
4. FileUpload - npm install --save-dev cypress-file-upload
5. Tables 



1. Pagination
2. Handle Alerts  cy.on()
3. Data Driven Testing - Fixture Commands
4. Page Object Model 


1. Dropdown - Static, Dynamic, Autofill
2. Shadow DOM element
3. Iframes
4. Date Pickers in Cypress

API Testing
1. CRUD Operation
2. Authentication and Authorization
3. Diff Auth such as - Bearer, Basic, Digest etc
4. JSON Library 
5. XML Schema Validation

GET, POST, PUT, PATCH and DELETE - Common Method

API - Application Programming Interface - BACKEND Testing

Create (POST), Read (GET), Update(PUT) and Delete(DELETE)

POST - It is method which is responsible for creating a new entry or new record.

GET - It is method which is responsible for retrieving the data for the user/record

PUT - It is responsible for updating the data

DELETE - It is resposible for Deleting the data

- https://phptravels.net/
- https://automationexercise.com/api_list
- https://testautomationpractice.blogspot.com/
- https://jqueryui.com/datepicker/ (DatePicker)
- https://demo.automationtesting.in/Datepicker.html
----------------------------

Cucumber BDD Framework
----------------------

Feature file (.feature)-
    - Gherkin Language 
    - Keywords
        - feature
        - scenario
        - scenario outline 
        - Example - Used to define your test data 
            | username     | password | expoutput |
            | abc@xyz.com  | 12321312 | loggedIn  | 
            | abc@res.com  | 12321312 | loggedIn  | 
            | abc@pez.com  | 12321312 | loggedIn  | 
        - Tags  -  @Smoke, @Sanity, @Regression, @TC123
        - Background - If there are any pre-requisite we have those into Background
        - Gherkin Syntax - Given, When, Then, And

        feature login into application
            Given user navigate to url
            When user enter the creds
            And user enter the login button
            Then user logged in

        - e2e -> feature -> .feature files

        - e2e -> step_definitions -> .js file

StepDefinition (.js)
        Given('user navigate to url', ()=>{
            // Code 
        })
        When('user enter the creds', ()=>{
            // Code 
        })
Runner


Plugin Installation Link - https://www.npmjs.com/package/cypress-cucumber-preprocessor?ref=cypress-io.ghost.io

Command - npm install --save-dev cypress-cucumber-preprocessor

Cypress + PageObject + BDD Cucumber

GITHUB/GITLAB/GIT/CIRCLE CI/AZURE REPO
-------------------------------------

Source Code Management
----------------------

https://confluence.atlassian.com/bitbucketserver/basic-git-commands-776639767.html