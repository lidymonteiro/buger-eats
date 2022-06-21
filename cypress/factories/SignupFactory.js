export default {
    deliver: function() {

        var data = {
            name: 'Lidiane Monteiro',
            cpf: '07798323876',
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

        return data
    }
}