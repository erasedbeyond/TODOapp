const express = require('express');
const router = express.Router();

const addController = require('../controllers/addController');
const deleteController = require('../controllers/deleteController');
const mainController = require('../controllers/mainController');


router.get('/',mainController.main);
router.post('/add-task',addController.addTask);
router.get('/delete-task/',deleteController.deleteTask);
router.post('/destroy-task',deleteController.destroyTask);

console.log("Router is working");


module.exports = router;