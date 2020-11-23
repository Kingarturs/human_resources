require('dotenv').config()
const express = require('express');
const jwt = require('jsonwebtoken');
const users = express.Router();
const db = require('../config/database');

users.post("/login", async (req, res, next) => {
    const { email, password } = req.body;
    const query = `SELECT * FROM users WHERE email = '${email}' AND password = '${password}';`
    
    const rows = await db.query(query);
    
    if (email, password) {
        if (rows.length == 1) {
            const token = jwt.sign({
                id: rows[0].id,
                email: rows[0].email,
            }, process.env.DEBUG_KEY);

            return res.status(200).json({ code:200, message: token })
        } else {
            return res.status(200).json({ code:401, message: "Incorrect email or password" })
        }
    }
    return res.status(200).json({ code:500, message: "Incomplete fields" })
})

module.exports = users;