const express = require('express');
const db = require('../config/database');
const employees = express.Router();

employees.post("/", async (req, res, next) => {
    const { name, lastname, phone, email, address } = req.body;
    
    try {
        rows = await db.query(`SELECT * FROM employees WHERE email = '${email}'`);
        if (rows.length > 0) {
            return res.status(200).json({ code: 400, message: "There's already an employee with that email" });
        }

        if ( name && lastname && phone && email && address ) {
            let query = "INSERT INTO employees (name, lastname, phone, email, address)";
            query += ` VALUES ( '${name}', '${lastname}', '${phone}', '${email}', '${address}' )`;

            await db.query(query);
            return res.status(201).json({ code: 201, message: "Employee registered correctly" })
        }
    } catch (err) {
        console.log(err);
        return res.status(500).json({ code: 500, message: "An error occurred, please try again later" });
    }
    return res.status(400).json({ code: 400, message: "Please complete all required fields" });
})

employees.delete("/:id([0-9]*)", async (req, res, next) => {
    const id = req.params.id;
    const query = `DELETE FROM employees WHERE employee_id = ${id}`;

    try {
        rows = await db.query(query)

        if (rows.affectedRows > 0) {
            return res.status(200).json({ code: 200, message: "Employee succesfuly deleted" });
        } else {
            return res.status(404).json({ code: 404, message: "Employee not found" });
        }
    } catch(err) {
        return res.status(500).json({ code: 500, message: "An error occurred, please try again later" });
    }
})

employees.put("/:id([0-9]*)", async (req, res, next) => {
    const id = req.params.id;
    const { name, lastname, phone, email, address } = req.body;
    
    if (name && lastname && phone && email && address) {
        rows = await db.query(`SELECT * FROM employees WHERE email = '${email}' AND employee_id != ${id}`);
        if (rows.length > 0) {
            return res.status(400).json({ code: 400, message: "There's already an employee with that email" });
        }

        let query = `UPDATE employees SET name='${name}', lastname='${lastname}', phone='${phone}',`
        query += ` email='${email}', address='${address}' WHERE employee_id=${id}`;

        try {
            rows = await db.query(query);
            if (rows.affectedRows == 1) {
                return res.status(201).json({ code: 201, message: "Employee updated correctly" });
            } else {
                return res.status(404).json({ code: 404, message: "Employee not found" });
            }
        } catch (err) {
            console.log(err);
            return res.status(500).json({ code: 500, message: "An error occurred, please try again later" });
        }
    }

    return res.status(400).json({ code: 400, message: "Please complete all required fields" });
})

employees.get("/", async (req, res, next) => {
    try {
        const result = await db.query("SELECT * FROM employees");
        return res.status(200).json({ code: 200, message: result });
    } catch (err) {
        return res.status(500).json({ code: 500, message: "An error occurred, please try again later" });
    }
})

employees.get("/:id([0-9]*)", async (req, res, next) => {
    const id = req.params.id;
    const query = `SELECT * FROM employees WHERE employee_id = ${id}`;

    try {
        rows = await db.query(query);
        if (rows.length > 0) {
            return res.status(200).json({ code: 200, message: rows });
        } else {
            return res.status(404).json({ code: 404, message: "Employee not found" });
        }
    } catch (err) {
        return res.status(500).json({ code: 500, message: "An error occurred, please try again later" });
    }
})

employees.get("/:name([A-Za-z]*)", async (req, res, next) => {
    const name = req.params.name;
    const query = `SELECT * FROM employees WHERE name LIKE '${name}%'`;

    try {
        rows = await db.query(query);

        if (rows.length > 0) {
            return res.status(200).json({ code: 200, message: rows });
        } else {
            return res.status(404).json({ code: 404, message: "Employee not found" });
        }

    } catch (err) {
        return res.status(500).json({ code: 500, message: "An error occurred, please try again later" });
    }
})

module.exports = employees;