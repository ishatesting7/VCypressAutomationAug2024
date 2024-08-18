class loginpage
{

    setUsername(username)
    {
        cy.get("input[name='username']").type(username);
    }

    setPassword(password)
    {
        cy.get("input[name='password']").type(password);
    }

    clickLoginButton()
    {
        cy.get('[type="submit"]').click();
    }
}

export default loginpage;