describe('Automation Exercise', () => {

  beforeEach (function () {
    cy.visit('https://www.automationexercise.com/')
    cy.wait(1000)
  })

  it("Iniciar Sesión Exitosa", function () {

    //Ingresar al Login
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click()

    //Ingresar Datos existentes
    cy.get('[data-qa="login-email"]').click()
    cy.get('[data-qa="login-email"]').type('ricardo178@gmail.com')
    cy.get('[data-qa="login-password"]').click()
    cy.get('[data-qa="login-password"]').type('ricardo178')

    //Logearse presionando el Boton Login
    cy.get('[data-qa="login-button"]').should('have.text','Login');
    cy.get('[data-qa="login-button"]').click();
    cy.wait(1000)

    //Verificar que se inicio Sesión
    cy.get(':nth-child(10) > a').should('contain','Logged in as');
    cy.wait(1000)
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
  })

  it("Iniciar Sesión Fallida", function () {

    //Ingresar al Login
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click()

    //Ingresar Datos incorrectos
    cy.get('[data-qa="login-email"]').click()
    cy.get('[data-qa="login-email"]').type('xxxxxxxx@gmail.com')
    cy.get('[data-qa="login-password"]').click()
    cy.get('[data-qa="login-password"]').type('xxxxxxxx')

    //Logearse presionando el Boton Login
    cy.get('[data-qa="login-button"]').should('have.text','Login');
    cy.get('[data-qa="login-button"]').click();
    cy.wait(1000)

    //Mensaje de error
    cy.get('.login-form > form > p').should('have.text','Your email or password is incorrect!');
  })
})