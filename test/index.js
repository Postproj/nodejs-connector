const Postproj = require('../index')

const db = new Postproj.Connection({
    host: '127.0.0.1',
    user: 'admin',
    password: 'aidak1234'
})

db.open()

db.post('test', 'hola', 'adios')

let a = db.find('test', 'hola')
console.log(a)