var routes = function (app) {

    var controller = require('../controller/appController');

    app.route('/tasks')
        .get(controller.listTasks)
        .post(controller.createTask);

    app.route('/tasks/:taskId')
        .get(controller.readTask)
        .put(controller.updateTaskById)
        .delete(controller.deleteTask);
};

module.exports = routes;