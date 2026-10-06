const express = require('express');
const router = express.Router();

const taskController = require('../controllers/taskController');

// Definindo as rotas para as operações CRUD

router.get('/', taskController.taskHome);
router.post('/create', taskController.createTask );
router.put('/update', taskController.updateTaskId);
router.get('/search', taskController.getTasksTitle);
router.delete('/delete', taskController.deleteTaskId);
router.delete('/deleteAll', taskController.deleteAllTasks);
router.get('/status', taskController.getTasksByStatus);
router.get('/task', taskController.getTaskId);

module.exports = router;