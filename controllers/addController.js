const express = require("express");

app.use(express.urlencoded());

//----require database
const db = require('../config/mongoose');
const Task = require('../models/task');


//---add task function

module.exports.addTask = function(req,res){
    console.log("Adding Task....");


    //---if date is not filled then setting no deadline----
    if(!(req.body.date)){
        req.body.date ="No Deadline";
    }

    //---category not selected then setting up general category--
    if(!req.body.category){
        req.body.category="General"
    }

    console.log(req.body);

    Task.create({
        description: req.body.description,
        category: req.body.category,
        date: req.body.date
        
    },function(err,newTask){
        if(err){
            console.log("Error while creating the Task");
            return ;
        }
        console.log("New Task Created: ", newTask);
        return res.redirect('back');
    });
};