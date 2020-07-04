const task = require('../models/task');

//---main function
module.exports.main = function(req,res){

    task.find({},function(err,task){
        if(err){
            console.log(err);
            return ;
        }
        return res.render('todo',{
            title: "TodoList",
            task: task
        });
    });
};