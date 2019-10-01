const fs = require('fs')

const dataBuffer = fs.readFileSync('sample.json')
const dataJSON = dataBuffer.toString()
const user = JSON.parse(dataJSON)

user.name = "Nemo"
user.age = 33

const userJSON = JSON.stringify(user)
fs.writeFileSync('sample.json', userJSON)
