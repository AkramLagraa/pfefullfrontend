const express = require('express');
const router = express.Router();
const Joi = require('joi');
const cors = require('cors'); 
const asyncHandler = require('express-async-handler');
const { User,validateregisteruser,validateLoginuser }= require("../models/Users")
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const logadmin =require("./admin")
const loguser =require("./user")
const dotenv= require('dotenv') 
dotenv.config();




 




/**
 * @desc login user
 * @method Post
 * @route /api/login
 * @access public
 */

router.post("/login", asyncHandler(async(req, res) => {
    const { error } = validateLoginuser(req.body);
    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }

    let oldUser = await User.findOne({ email: req.body.email });
    if (!oldUser) {
        return res.status(400).json({ message: "Invalid email or password" });
    }
    const isPasswordmatch = await bcrypt.compare(req.body.password, oldUser.password);
    if (!isPasswordmatch) {
        return res.status(400).json({ message: "Invalid email or password" });
    }
    if (isPasswordmatch){
        console.log("login successful")
    }
    const token = jwt.sign({id: oldUser._id , username: oldUser.username},process.env.JWT_SECRET_KEY);
    const { password,usertype, ...other } = oldUser._doc;
    responseData = {  token,usertype };
    res.status(200).json(responseData);
}));




module.exports =router;