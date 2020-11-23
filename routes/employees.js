const express = require('express');
const db = require('../config/database');
const employees = express.Router();

employees.get("/", async (req, res, next) => {
    const result = await db.query("SELECT * FROM employees");
    return res.status(200).json({ code: 200, message: result });
})

employees.get("/:id([0-9])", async (req, res, next) => {
    const id = req.params.id;
    const result = await db.query(
        `SELECT * FROM employees WHERE employee_id = ${id}`,
        (err) => {
            if (err) {
                return res.status(200).json({ code: 500, message: "An error occurred, please try again later" });
            }
        }
    );

    return res.status(200).json({ code: 200, message: result });
})

employees.get("/:name([A-Za-z]*)", async (req, res, next) => {
    const name = req.params.name;
    const result = await db.query(
        `SELECT * FROM employees WHERE name LIKE '${name}%'`,
        (err) => {
            if (err) {
                return res.status(200).json({ code: 500, message: "An error occurred, please try again later" });
            }
        }
    );

    return res.status(200).json({ code: 200, message: result });
})

employees.post("/", async (req, res, next) => {
    const { name, lastname, phone, email, address } = req.body;

    if ( name && lastname && phone && email && address ) {
        let query = "INSERT INTO employees (name, lastname, phone, email, address)";
        query += ` VALUES ( '${name}', ${lastname}, ${phone}, ${email}, ${address} )`;
        const rows = await db.query(query, (err) => {
            if (err) {
                return res.status(200).json({ code: 500, message: "An error occurred, please try again later" });
            }
        });

        if (rows.affectedRows == 1) {
            return res.status(201).json({ code: 201, message: "Employee registered correctly" })
        }
    }

    return res.status(200).json({ code: 400, message: "Please complete all required fields" });
})

employees.delete("/:id([0-9])", async (req, res, next) => {
    const id = req.params.id;

    await db.query(
        `DELETE FROM employees WHERE employee_id = ${id}`,
        (err) => {
            if (err) {
                return res.status(200).json({ code: 500, message: "An error occurred, please try again later" });
            }
            return res.status(200).json({ code: 200, message: "Employee succesfuly deleted" });
        }
    );
})

employees.put("/:id([0-9])", async (req, res, next) => {
    const id = req.params.id;
    const { name, lastname, phone, email, address } = req.body;

    if (name && lastname && phone && email && address) {
        let query = `UPDATE employees SET name='${name}', lastname='${lastname}', phone='${phone}'`
        query += ` email='${email}', address='${address}' WHERE employee_id=${id})`;

        const rows = await db.query(query, (err) => {
            if (err) {
                return res.status(200).json({ code: 500, message: "An error occurred, please try again later" });
            }
        });

        if (rows.affectedRows == 1) {
            return res.status(201).json({ code: 201, message: "Employee updated correctly" })
        } else {
            return res.status(200).json({ code: 404, message: "Employee not found" })
        }
    }

    return res.status(200).json({ code: 400, message: "Please complete all required fields" });
})

module.exports = employees;