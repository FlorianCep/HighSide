const express = require('express')
const app = express()
const dotenv = require('dotenv')
const cookieParser = require('cookie-parser')

dotenv.config({ path: './.env' })


// Middlewares
app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false }))
app.use(express.static('public'))
app.use(cookieParser())


// Call All Front Routes
app.use('/', require('./routes/frontRoutes'))
// Call All Admin Routes
app.use('/admin', require('./routes/adminRoutes'))
// Call All Auth Routes
app.use('/', require('./routes/authRoutes'))


// -------------- Port Serveur -------------- //
const port = 8080;
app.listen(port, () => {
    console.log(`Server is running on localhost:${port}`);
})