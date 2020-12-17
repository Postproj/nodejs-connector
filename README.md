<img src="https://file.coffee/u/7lYBUdJ-sx.png" width="200">

Postproj is a database engine technology that provides you the ability of write and read JSON files to make a based database.

## Learning to use Postproj
Here's a codebox example:
```js
const postproj = require('postproj')

const db = postproj()

db.open()

db.post('test', 'Amelia', 45) // database name, key, value

let o = db.find('test', 'Amelia') // -> 45
```

## Contributing
There are several ways to contribute to this library. Postproj is open source and always will be, so you can see the code [here](https://github.com/Postproj/nodejs-connector)
