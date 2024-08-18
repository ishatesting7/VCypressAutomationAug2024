import loginpage from "../../PageObjects/loginpage";

describe('Login', ()=>{

    const login = new loginpage();

    it('login',()=>{

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        login.setUsername("Admin");
        login.setPassword('admin123');
        login.clickLoginButton();

    })

    it.only('Login using fixture and Pom', ()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

        cy.fixture('orangehrm').then((data)=>{

            login.setUsername(data.username);
            login.setPassword(data.password);
            login.clickLoginButton();

        })

    })
})