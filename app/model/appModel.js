var mysql = require('./db.js');

var Task = function (task) {
    this.task = task.task;
    this.status = task.status;
    this.created_at = new Date();
};

Task.getAllTask = function (result) {
    mysql.query('Select * from tasks', function (err, response) {
        if (err) {
            console.log('ERROR : ', err);
            result(err, null);
        } else {
            console.log('RESPONSE : ', response);
            result(null, response);
        }
    });
};

Task.getTaskById = function (taskId, result) {
    mysql.query('Select task from tasks where id = ?', taskId, function (err, response) {
        if (err) {
            console.log('ERROR : ', err);
            result(err, null);
        } else {
            console.log('RESPONSE : ', response);
            result(null, response);
        }
    });
};

Task.createTask = function createUser(newTask, result) {
    mysql.query("INSERT INTO tasks set ?", newTask, function (err, res) {
        if (err) {
            console.log("ERROR : ", err);
            result(err, null);
        } else {
            console.log("RESPONSE :", res);
            result(null, res.insertId);
        }
    });
};

Task.updateTaskById = function (id, task, result) {
    console.log("update Task = ", task)
    mysql.query("UPDATE tasks SET ? WHERE id = ?", [task, id], function (err, res) {
        if (err) {
            console.log("ERROR : ", err);
            result(err, null);
        } else {
            console.log("RESPONSE : ", res);
            result(null, res);
        }
    });
};

Task.deleteTask = function (id, result) {
    mysql.query("DELETE FROM tasks WHERE id = ?", [id], function (err, res) {
        if (err) {
            console.log("ERROR : ", err);
            result(err, null);
        } else {
            console.log("RESPONSE : ", res);
            result(null, res);
        }
    });
};

module.exports = Task;