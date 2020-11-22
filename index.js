// Dependencies
const morgan = require('morgan');
const express = require('express');

const app = express();

// Routes

// Middlewares
const notFound = require('./middleware/notFound');
const cors = require('./middleware/cors');

app.use(cors);
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res, next) => {
    return res.status(200).send("Hola mundo!")
})

app.use(notFound)

app.listen(process.env.PORT || 3000, () => {
    console.log('Server is running');
})
