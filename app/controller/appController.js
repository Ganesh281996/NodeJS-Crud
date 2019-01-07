var Task = require('../model/appModel');

exports.listTasks = function (request, response) {
    Task.getAllTask(function (err, task) {
        if (err) {
            console.log('ERROR : ', err);
            response.send(err);
        } else {
            console.log('RESPONSE : ', task);
            response.json(task);
        }
    });
};

exports.readTask = function (request, response) {
    Task.getTaskById(request.params.taskId, function (err, task) {
        if (err) {
            console.log('ERROR : ', err);
            response.send(err);
        } else {
            console.log('RESPONSE : ', task);
            response.json(task);
        }
    });
};

exports.createTask = function (request, response) { 
    console.log('create',request.body)
    var newTask = new Task(request.body);
    Task.createTask(newTask, function (err, task) {
        if (err) {
            console.log('ERROR : ', err);
            response.send(err);
        } else {
            console.log('RESPONSE : ', task);
            response.json(task);
        }
    });
};

exports.updateTaskById = function (request, response) {
    console.log('update',request.body)
    var updateTask = new Task(request.body);
    Task.updateTaskById(request.params.taskId, updateTask, function (err, task) {
        if (err) {
            console.log('ERROR : ', err);
            response.send(err);
        } else {
            console.log('RESPONSE : ', task);
            response.json(task);
        }
    });
};

exports.deleteTask = function (request, response) {
    Task.deleteTask(request.params.taskId, function (err, task) {
        if (err) {
            console.log('ERROR : ', err);
            response.send(err);
        } else {
            console.log('RESPONSE : ', task);
            response.json(task);
        }
    });
};

// module.exports = [listTasks, readTask, createTask, updateTask, deleteTask];