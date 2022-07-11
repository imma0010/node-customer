var db = require("../models");

const Customers = db.customers;

var registerCustomer = async (req, res) => {
    try {
        // console.log(req.body);
        let data = await Customers.create({ name: req.body.name, email: req.body.email, username: req.body.username, password: req.body.password, address: req.body.address });
        let response = {
            success: true,
            message: "Customer Added Successfully"
        }

        res.status(201).json(response);
    } catch (err) {
        console.log(err);
    }
}

var getCustomers = async (req, res) => {
    try {
        let data = await Customers.findAll({
            attributes: [
                "id",
                "name",
                "email",
                "username",
                "address"
            ]
        });

        let response = {
            data: data
        }

        res.status(200).json(response);
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Something wrong"
        })
    }
}

const getCustomer = async (req, res) => {
    try {
        let data = await Customers.findOne({
            where: { id: req.params.id },
            attributes: [
                "id",
                "name",
                "email",
                "username",
                "address"
            ]
        });

        let response = {
            data: data
        }

        res.status(200).json(response);
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Something wrong"
        })
    }
}

const editCustomer = async (req, res) => {
    try {
        Customers.findOne({ where: { id: req.params.id } }).then(cust_data => {
            Customers.update({
                name: (req.body.name ? req.body.name : cust_data.name),
                email: (req.body.email ? req.body.email : cust_data.email),
                username: (req.body.username ? req.body.username : cust_data.username),
                password: (req.body.password ? req.body.password : cust_data.password),
                address: (req.body.address ? req.body.address : cust_data.address)
            }, { where: { id: req.params.id } }).then(result => {
                res.status(200).json({
                    success: true,
                    message: "Customer Information Edited Successfully"
                });
            })
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Something wrong"
        })
    }
}

const deleteCustomer = (req, res) => {
    try {
        Customers.destroy({ where: { id: req.params.id } }).then(result => {
            res.status(200).json({
                success: true,
                message: "User Deleted Successfully"
            })
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Something wrong"
        })
    }
}

module.exports = {
    registerCustomer,
    getCustomers,
    getCustomer,
    editCustomer,
    deleteCustomer
}