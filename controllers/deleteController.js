const express =require("express");
const task = require('../models/task');

app.use(express.urlencoded())


//----delete single task-----
module.exports.deleteTask = function(req,res){

    
    task.findByIdAndDelete(req.query.id,function(err){
        if(err){
            console.log("Error whle deleting");
            return ;
        }
        console.log("Successfully delted");
        return res.redirect('back');
    });
};

//----delete multiple task------

module.exports.destroyTask = function(req,res){
   
   
    console.log(req.body.taskID);

    let id=req.body.taskID;
  

    task.deleteMany({ _id: id
      },function(err){
        if(err){
            console.log('error in deleting the object');
            return;
        }
        console.log("Successfully delted");

        return res.redirect('back');
    })

    
}