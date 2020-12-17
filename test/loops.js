
const Postproj = require('../index')

const db = new Postproj.Connection({
    host: '127.0.0.1',
    user: 'admin',
    password: 'aidak1234'
})

db.open()

var i;
for (i = 0; i < 559; i++){
    db.post('test2', i, 'soy')
} // this is for the cool people that says that json corrupts ;)