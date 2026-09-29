const express = require('express');
const router = express.Router();

const taskController = require('../controllers/taskController');

// Definindo as rotas para as operações CRUD

router.get('/', taskController.taskHome);
router.get('/task', taskController.getTaskId);
router.get('/completed', taskController.getTaskCompleted );
router.post('/create', taskController.createTask );
router.delete('/delete', taskController.deleteTaskId);
router.put('/update', taskController.updateTaskId);


module.exports = router;
