// dotenv 
require('dotenv').config()

// Dependencies
const morgan = require('morgan');
const express = require('express');

const app = express();

// Routes
const users = require('./routes/users');

// Middlewares
const auth = require('./auth/auth');
const notFound = require('./middleware/notFound');
const cors = require('./middleware/cors');

app.use(cors);
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", users);

app.use(auth);

app.get('/', (req, res, next) => {
    return res.status(200).send("Hola mundo!")
})

app.use(notFound)

app.listen(process.env.PORT || 3000, () => {
    console.log('Server is running');
})
