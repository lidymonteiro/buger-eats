import signup from '../pages/SignupPage'
import signupFactory from '../factories/SignupFactory'

describe('Signup', function() {


    it('User should be deliver', function() {

        var deliver = signupFactory.deliver()

        signup.go()
        signup.fillform(deliver)
        signup.submit()
        const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
        signup.modalContentShouldBe(expectedMessage)
  
    })

    it('Invalid document', function() {

        var deliver = signupFactory.deliver()
        deliver.cpf = '077983238BB'

        signup.go()
        signup.fillform(deliver)
        signup.submit()
        const expectedMessage = 'Oops! CPF inválido'
        signup.alertMessageShouldBe(expectedMessage)
    })

    it('Invalid email', function() {

        var deliver = signupFactory.deliver()
        deliver.email = 'user.com.br'

        signup.go()
        signup.fillform(deliver)
        signup.submit()
        const expectedMessage = 'Oops! Email com formato inválido.'
        signup.alertMessageShouldBe(expectedMessage)
    })

})