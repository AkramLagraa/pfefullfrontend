const Joi = require('joi');
const { string } = require('joi');
const mongoose = require('mongoose'); 
const { ENUM } = require('sequelize');
const { INTEGER } = require('sequelize');
const { STRING } = require('sequelize');
const Projetschema= new mongoose.Schema({
    id:{
        type :INTEGER,
        required : true,
        unique:true,
        
    },
    intitule:{
        type : String,
        require : true,
        trim :true,
        minlength :6,
        maxlength:200,
    },
    extA :{
        type : String,
        require : true,
        trim :true,
        minlength :6,
        maxlength:100,
    },
    extB :{
        type : String,
        require : true,
        trim :true,
        minlength :6,
        maxlength:100,
    }
})