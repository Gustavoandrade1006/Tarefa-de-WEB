const taskModel = require('../models/taskModel');

const taskHome = (req, res) => {
   const tasks = taskModel.getAllTasks();
   res.render("tasks/tasks", { tasks });
};

// GET /tasks - Listar todas as tarefas
const getAllTasks = (req, res) => {
   const tasks = taskModel.getAllTasks();
   res.status(200).render("tasks/partials/allTasks", { tasks }); //mudei de json para render
};

// GET /tasks/:id - Obter uma tarefa específica
const getTaskId = (req, res) => {
   const id = parseInt(req.query.id);
   const task = taskModel.getTaskId(id);

   if (!task) {
      // status é fundamental na API RESTful - código padronizado, confiável e profissional
      // define o código status HTTP que será enviado junto com a resposta
      /* Códigos HTTP
         200 OK -> requisição bem-sucedida (GET, PUT, DELETE bem feitos)
         201 Created -> Recurso criado com sucesso (POST)
         204 No Content -> Exclusão bem-sucedida, sem corpo de resposta
         400 Bad request -> Cliente enviou dados inválidos
         404 Not found -> Recurso não encontrado
         500 Internet Server Error -> Erro inesperado no servidor
      */
      res.status(404).json({ erro: 'Tarefa não encontrada' });
   }
   res.render("tasks/searchTask", { task });
}

const getTasksTitle = (req, res) => {
   const title = req.query.title || "";
   const tasks = taskModel.getTaskName(title);
   res.render("tasks/tasks", { tasks });
};


// POST tasks/create - Criar uma nova tarefa
const createTask = (req, res) => {
   const newTask = taskModel.createTask(req.body);
   res.redirect("/tasks");
};


// DELETE tasks/delete - Deletar uma tarefa
const deleteTaskId = (req, res) => {
   const { id } = req.body;
   taskModel.deleteTaskId(parseInt(id));
   res.redirect("/tasks");
}

// PUT tasks/update - Atualizar uma tarefa
const updateTaskId = (req, res) => {
   const updatedTask = taskModel.updateTaskId(req.body);
   res.redirect("/tasks");
};

const deleteAllTasks = (req, res) => {
   taskModel.deleteAllTasks();
   res.redirect("/tasks");
};

const getTasksByStatus = (req, res) => {
   const status = req.query.status;

   if (status == null) {
      return res.redirect("/tasks");
   }

   const tasks = taskModel.getByStatus(status);
   res.render("tasks/tasks", { tasks });
}

module.exports = {
   taskHome,
   createTask,
   updateTaskId,
   deleteTaskId,
   deleteAllTasks,
   getTaskId,
   getTasksTitle,
   getAllTasks,
   getTasksByStatus
};
