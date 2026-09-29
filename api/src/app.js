const express = require('express');

const app = express();

const methodOverride = require('method-override');

app.use(methodOverride('_method'))

const path = require('path');
app.use(express.static(path.join(__dirname, 'views')));

// Configurando middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

const taskRoutes = require('./routes/taskRoute');
const initialRoutes = require('./routes/initialRoute'); // InitialRoute antigo

app.use('/', initialRoutes);
app.use('/tasks', taskRoutes);

module.exports = app;
