const path = require('path') //core node module
const express = require('express')
const hbs = require('hbs')
const forecast = require('./utils/forecast')
const geocode = require('./utils/geocode')

const app = express()

//Paths
const publicdirpath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

//Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

//Setup static directory to serve
app.use(express.static(publicdirpath))

app.get('', (req, res) => {
    res.render('index')
})

app.get('/about', (req, res) => {
    res.render('about', {
        title:'About Me',
        name: 'Andrew Mead'
    })
})


app.get('/products', (req, res) => {
    if(!req.query.search){
        return res.send({
            error: 'You must provide a search term'
        })
    }
    console.log(req.query)
    res.send({
        products: []
    })
})

app.get('/weather', (req, res) => {
    if(!req.query.address){
        return res.send({
            error: 'You must provide an address'
        })
    }
    
    geocode(req.query.address, (error, {latitude, longitude, location} = {} ) => {
            if(error){
                return res.error({ error })
            }

            forecast(latitude, longitude , (error, forecastData) => {
                if(error){
                    return res.error({ error})
                }

                res.send({

                    location: "latitude: " + latitude + " longitude: " + longitude,
                    address: req.query.address,
                    forecast: forecastData
                })
    
            })
        
    })

})

app.get('/help/*', (req, res) => {
    res.send('404', {
        title: '404',
        name: 'Neo',
        errorMessage: 'Page Not Found'
    })
})

app.get('*', (req, res) => {
    res.send('404', {
        title: '404',
        name: 'Neo',
        errorMessage: 'Page Not Found'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        paragraph: 'Once i was a wooden boy. A wooden wooden boy',
        title: 'Help',
        author: 'Neo'
    })
})

// app.get('/help', (req, res) => {
//     res.send('Help Page!') //Send something back to the requester

// })

// app.get('/about', (req, res) => {
//     res.send({
//         name: 'Neo',
//         age: 33
//     }) //Send something back to the requester

// })


// app.get('/weather', (req, res) => {
//     res.send({
        
//     })
// })

app.listen(3000, () => {
    console.log('Server is up. Port 3000.')
})