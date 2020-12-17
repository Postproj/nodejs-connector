const fs = require('fs')

function postproj() {
}

postproj.prototype.open = function(){
    if(!fs.existsSync('postproj')){
        fs.mkdirSync('postproj')
    }
}

postproj.prototype.post = function(db, key, value){
    if (!fs.existsSync(`postproj/${db}.ppdat`)){
        fs.writeFileSync(`postproj/${db}.ppdat`, '{}')
    }
    let col = fs.readFileSync(`postproj/${db}.ppdat`, 'utf-8')
    let fcol = JSON.parse(col)

    fcol[key] = value
    fs.writeFileSync(`postproj/${db}.ppdat`, JSON.stringify(fcol, null, 2))
}

postproj.prototype.find = function(db, key){
    let col = fs.readFileSync(`postproj/${db}.ppdat`, 'utf-8')
    let fcol = JSON.parse(col)

    return fcol[key]
}


module.exports = {
    postproj
}