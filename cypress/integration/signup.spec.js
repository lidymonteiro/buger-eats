import signup from '../pages/SignupPage'

describe('Signup', function() {

    beforeEach(function() {
        cy.fixture('deliver').then((d)=>{
            this.deliver = d

        })
    })

    it('User should be deliver', function() {

        signup.go()
        signup.fillform(this.deliver.signup)
        signup.submit()
        const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
        signup.modalContentShouldBe(expectedMessage)
  
    })

    it('Invalid document', function() {

        signup.go()
        signup.fillform(this.deliver.cpf_inv)
        signup.submit()
        const expectedMessage = 'Oops! CPF inválido'
        signup.alertMessageShouldBe(expectedMessage)
    })

})