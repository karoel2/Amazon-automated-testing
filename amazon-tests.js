describe('Go to main site', function() {
    it('And find a way to account creation', function() {
    cy.visit('https://www.amazon.com/')
    cy.get('#nav-link-accountList').trigger('mouseover')
    cy.get('.nav-active').should('be.visible')
    cy.get('.nav_pop_new_cust').find('.nav-a').click()
    })
})

const data = {
  email: "Example@gmail.com",
  password: 'Password1!'
}
//data.email


describe('Test account creation', function(){
  beforeEach(function() {
    cy.get('#ap_customer_name').clear()
    cy.get('#ap_email').clear()
    cy.get('#ap_password').clear()
    cy.get('#ap_password_check').clear()

    cy.get('#ap_customer_name').should('be.empty')
    cy.get('#ap_email').should('be.empty')
    cy.get('#ap_password').should('be.empty')
    cy.get('#ap_password_check').should('be.empty')
  })
  it('Should return name, email and password error for empty account', function() {
    cy.get('#continue').click()
    cy.get('#auth-customerName-missing-alert').should('be.visible')
    cy.get('#auth-email-missing-alert').should('be.visible')
    cy.get('#auth-password-missing-alert').should('be.visible')
  })
  it('Should return email and password error for only name', function() {
    cy.get('#ap_customer_name').type("Name")
    cy.get('#continue').click()
    cy.get('#auth-email-missing-alert').should('be.visible')
    cy.get('#auth-password-missing-alert').should('be.visible')
  })
  it('Should return name and password error for only emali', function() {
    cy.get('#ap_email').type(data.email)
    cy.get('#continue').click()
    cy.get('#auth-customerName-missing-alert').should('be.visible')
    cy.get('#auth-password-missing-alert').should('be.visible')
  })
  it('Should return name, email and repeat password error for only password', function() {
    cy.get('#ap_password').type("Password1!")
    cy.get('#continue').click()
    cy.get('#auth-customerName-missing-alert').should('be.visible')
    cy.get('#auth-email-missing-alert').should('be.visible')
    cy.get('#auth-passwordCheck-missing-alert').should('be.visible')
  })
  it('Should return password error for name and email', function() {
    cy.get('#ap_customer_name').type("Name")
    cy.get('#ap_email').type(data.email)
    cy.get('#continue').click()
    cy.get('#auth-password-missing-alert').should('be.visible')
  })
  it('Should return email and repeat password error for name and password', function() {
    cy.get('#ap_customer_name').type("Name")
    cy.get('#ap_password').type("Password1!")
    cy.get('#continue').click()
    cy.get('#auth-email-missing-alert').should('be.visible')
    cy.get('#auth-passwordCheck-missing-alert').should('be.visible')
    })
  it('Should return name and repeat password error for email and password', function() {
    cy.get('#ap_email').type(data.email)
    cy.get('#ap_password').type("Password1!")
    cy.get('#continue').click()
    cy.get('#auth-customerName-missing-alert').should('be.visible')
    cy.get('#auth-passwordCheck-missing-alert').should('be.visible')
  })
  it('Should return repeat password error for name, email and password', function() {
    cy.get('#ap_customer_name').type("Name")
    cy.get('#ap_email').type(data.email)
    cy.get('#ap_password').type("Password1!")
    cy.get('#continue').click()
    cy.get('#auth-passwordCheck-missing-alert').should('be.visible')
  })
})

describe('Test account email validation', function(){
  beforeEach(function() {
  cy.get('#ap_customer_name').clear()
  cy.get('#ap_email').clear()
  cy.get('#ap_password').clear()
  cy.get('#ap_password_check').clear()

  cy.get('#ap_customer_name').should('be.empty')
  cy.get('#ap_email').should('be.empty')
  cy.get('#ap_password').should('be.empty')
  cy.get('#ap_password_check').should('be.empty')
  })
  it('Should return name, email and password error for just login', function() {
    cy.get('#ap_email').type("Example")
    cy.get('#continue').click()
    cy.get('#auth-customerName-missing-alert').should('be.visible')
    cy.get('#auth-email-invalid-email-alert').should('be.visible')
    cy.get('#auth-password-missing-alert').should('be.visible')
    })
  it('Should return name, email and password error for login@site', function() {
    cy.get('#ap_email').type("Example@site")
    cy.get('#continue').click()
    cy.get('#auth-customerName-missing-alert').should('be.visible')
    cy.get('#auth-email-invalid-email-alert').should('be.visible')
    cy.get('#auth-password-missing-alert').should('be.visible')
    })
  it('Should return name, email and password error for login.com', function() {
    cy.get('#ap_email').type("Example.com")
    cy.get('#continue').click()
    cy.get('#auth-customerName-missing-alert').should('be.visible')
    cy.get('#auth-email-invalid-email-alert').should('be.visible')
    cy.get('#auth-password-missing-alert').should('be.visible')
    })
  it('Should return name, email and password error for site.com', function() {
    cy.get('#ap_email').type("site.com")
    cy.get('#continue').click()
    cy.get('#auth-customerName-missing-alert').should('be.visible')
    cy.get('#auth-email-invalid-email-alert').should('be.visible')
    cy.get('#auth-password-missing-alert').should('be.visible')
    })
  it('Should return no error for valiable email', function() {
    cy.get('#ap_email').type("Example@gmail.com")
    cy.get('#continue').click()
    cy.get('#auth-customerName-missing-alert').should('be.visible')
    cy.get('#auth-password-missing-alert').should('be.visible')
    })
})



// describe('My First Test', function() {
//     it('Should return name, email and password error for Visits the Kitchen Sink', function() {
//     cy.visit('https://www.amazon.com/ap/register?_encoding=UTF8&openid.assoc_handle=usflex&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.mode=checkid_setup&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&openid.ns.pape=http%3A%2F%2Fspecs.openid.net%2Fextensions%2Fpape%2F1.0&openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Fwww.amazon.com%2Fgp%2Fyourstore%2Fhome%3Fie%3DUTF8%26ref_%3Dnav_newcust')
