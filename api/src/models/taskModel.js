// Base de Dados
let tasks = [
   { id: 1, title: 'Estudar WEB', completed: 0 },
   { id: 2, title: 'Revisar PBC', completed: 1 },
   { id: 3, title: 'Estudar BD', completed: 0 },
];

// Funções para manipular as tarefas
const getAllTasks = () => tasks;

const getTaskId = (id) => tasks.find(task => task.id == id);

const getByStatus = (status) => {
   const response = tasks.filter(item => item.completed == status);
   return response;
};

const getTaskName = (title) => tasks.filter(task => task.title.trim().toLowerCase().includes(title.trim().toLowerCase()));

const createTask = (taskData) => {
   const newTask = {
      id: tasks.length > 0 ? Math.max(...tasks.map(t => t.id)) + 1 : 1,
      title: taskData.title,
      completed: taskData.completed || false
   };
   tasks.push(newTask);
   return newTask;
};

const deleteTaskId = (id) => {
   tasks = tasks.filter(task => task != getTaskId(id));
};

const updateTaskId = (taskData) => {
   currentTask = getTaskId(taskData.id);

   if (!currentTask) {
      return 'ID não identificado.'
   }

   const updatedTask = {
      id: taskData.id,
      title: taskData.title || currentTask.title,
      completed: taskData.completed
   }

   tasks = tasks.map(task => task.id == taskData.id ? updatedTask : task);

   return updatedTask;
};

const deleteAllTasks = () => {
   tasks = [];
   return tasks;
};


module.exports = {
   createTask,
   updateTaskId,
   deleteTaskId,
   deleteAllTasks,
   getTaskId,
   getTaskName,
   getAllTasks,
   getByStatus
};