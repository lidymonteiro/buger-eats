import signup from '../pages/SignupPage'

describe('Cadastro', () => {

    it('Usuário deve se tornar um entregador', () => {

        var deliver = {
            name: 'Lidiane Monteiro',
            cpf: '07746298435',
            email: 'lidy@hotmail.com',
            whatsapp: '11999999999',
            address: {
                postalcode: '52280519',
                street: 'Rua Marialva',
                number: '30',
                details: 'Ap 142',
                district: 'Vasco da Gama',
                city_state: 'Recife/PE'
            },
            delivery_method: 'Moto',
            cnh: 'cnh-digital.jpg'
        }

        signup.go()
        signup.fillform(deliver)
        signup.submit()
        const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
        signup.modalContentShouldBe(expectedMessage)
  
    })

    it('CPF incorreto', () => {

        var deliver = {
            name: 'Lidiane Monteiro',
            cpf: '077462984BB',
            email: 'lidy@hotmail.com',
            whatsapp: '11999999999',
            address: {
                postalcode: '52280519',
                street: 'Rua Marialva',
                number: '30',
                details: 'Ap 142',
                district: 'Vasco da Gama',
                city_state: 'Recife/PE'
            },
            delivery_method: 'Moto',
            cnh: 'cnh-digital.jpg'
        }

        signup.go()
        signup.fillform(deliver)
        signup.submit()
        const expectedMessage = 'Oops! CPF inválido'
        signup.alertMessageShouldBe(expectedMessage)
    })

})