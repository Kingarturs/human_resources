require('dotenv').config()
const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        const decoded = jwt.verify(token, process.env.DEBUG_KEY);
        req.user = decoded;
        next();
    } 
    catch (error) {
        return res.status(401).json({ code: 401, message: "You don't have access to this site" })    
    }
}