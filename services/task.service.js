const log = require("../configs/logger.config");
const taskDao = require("../daos/task.dao");
const userDao = require("../daos/task.dao");
const {
  removeNullUndefined,
  titleCase,
} = require("../utils/helpers/common.utils");
class TodoService {
  async addTaskService(req, res) {
    try {
      const { title, description, category } = req.body;

      if (!title) {
        return res.status(400).json({
          message: "please enter title",
          status: "fail",
          code: 201,
          data: null,
        });
      }
      if (!description) {
        return res.status(400).json({
          message: "please enter description",
          status: "fail",
          code: 201,
          data: null,
        });
      }
      if (!category) {
        return res.status(400).json({
          message: "please enter category",
          status: "fail",
          code: 201,
          data: null,
        });
      }

      const data = {
        title: titleCase(title),
        description: titleCase(description),
        category: titleCase(category),
        dueDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
      };

      const updatedData = removeNullUndefined(data);
      const result = await taskDao.createTask(updatedData);

      if (result.data) {
        return res.status(200).json({
          message: "task added successfully",
          status: "success",
          code: 200,
          data: result.data,
        });
      }
    } catch (error) {
      log.error("error from [AUTH SERVICE]: ", error);
      throw error;
    }
  }

  async updateTaskByIdService(req, res) {
    try {
      const { taskId, title, description, category } = req.body;

      if (!taskId) {
        return res.status(400).json({
          message: "please enter taskId",
          status: "fail",
          code: 201,
          data: null,
        });
      }

      const isTaskIdExist = await taskDao.getTaskById(taskId);
      if (!isTaskIdExist.data) {
        return res.status(400).json({
          message: "task not exist",
          status: "fail",
          code: 201,
          data: null,
        });
      }

      const data = {
        title: titleCase(title),
        description: titleCase(description),
        category: titleCase(category),
        dueDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
      };

      const updatedData = removeNullUndefined(data);
      const result = await taskDao.updatedTASK(taskId, updatedData);

      if (result.data) {
        return res.status(200).json({
          message: "task updated successfully",
          status: "success",
          code: 200,
          data: result.data,
        });
      }
    } catch (error) {
      log.error("error from [AUTH SERVICE]: ", error);
      throw error;
    }
  }

  //getAllTaskService
  async getAllTaskService(req, res) {
    try {
      const result = await taskDao.getAllTask();

      if (result.data) {
        return res.status(200).json({
          message: "tasks get successfully",
          status: "success",
          code: 200,
          data: result.data,
        });
      } else {
        return res.status(201).json({
          message: "tasks not found",
          status: "fail",
          code: 201,
          data: null,
        });
      }
    } catch (error) {
      log.error("error from [AUTH SERVICE]: ", error);
      throw error;
    }
  }

  //getTaskByIdService
  async getTaskByIdService(req, res) {
    try {
      const { taskId } = req.body;
      if (!taskId) {
        return res.status(400).json({
          message: "please enter taskId",
          status: "fail",
          code: 201,
          data: null,
        });
      }

      const isTaskIdExist = await taskDao.getTaskById(taskId);
      if (!isTaskIdExist.data) {
        return res.status(400).json({
          message: "task not exist",
          status: "fail",
          code: 201,
          data: null,
        });
      }

      const result = await taskDao.deleteTaskById(taskId);

      if (result.data) {
        return res.status(200).json({
          message: "tasks get successfully",
          status: "success",
          code: 200,
          data: result.data,
        });
      } else {
        return res.status(201).json({
          message: "tasks not found",
          status: "fail",
          code: 201,
          data: null,
        });
      }
    } catch (error) {
      log.error("error from [AUTH SERVICE]: ", error);
      throw error;
    }
  }

  //deleteTaskByIdService
  async deleteTaskByIdService(req, res) {
    try {
      const { taskId } = req.body;
      if (!taskId) {
        return res.status(400).json({
          message: "please enter taskId",
          status: "fail",
          code: 201,
          data: null,
        });
      }

      const isTaskIdExist = await taskDao.getTaskById(taskId);
      if (!isTaskIdExist.data) {
        return res.status(400).json({
          message: "task not exist",
          status: "fail",
          code: 201,
          data: null,
        });
      }

      const result = await taskDao.deleteTaskById(taskId);

      if (result.data) {
        return res.status(200).json({
          message: "tasks deleted successfully",
          status: "success",
          code: 200,
          data: result.data,
        });
      } else {
        return res.status(201).json({
          message: "tasks not delete",
          status: "fail",
          code: 201,
          data: null,
        });
      }
    } catch (error) {
      log.error("error from [AUTH SERVICE]: ", error);
      throw error;
    }
  }

  //markTaskAsCompleteByIdService
  async markTaskAsCompleteByIdService(req, res) {
    try {
      const { taskId, isCompleted } = req.body;
      if (!taskId) {
        return res.status(400).json({
          message: "please enter taskId",
          status: "fail",
          code: 201,
          data: null,
        });
      }

      const isTaskIdExist = await taskDao.getTaskById(taskId);
      if (!isTaskIdExist.data) {
        return res.status(400).json({
          message: "task not exist",
          status: "fail",
          code: 201,
          data: null,
        });
      }

      const isCompletedTask = isTaskIdExist.data.isCompleted;
      if (isCompletedTask === true) {
        return res.status(400).json({
          message: "your task already have been completed successfully",
          status: "fail",
          code: 201,
          data: null,
        });
      }

      const result = await taskDao.makeTaskCompleted(taskId, isCompleted);

      if (result.data) {
        return res.status(200).json({
          message: "task has been completed successfully",
          status: "success",
          code: 200,
          data: result.data,
        });
      } else {
        return res.status(201).json({
          message: "tasks not completed",
          status: "fail",
          code: 201,
          data: null,
        });
      }
    } catch (error) {
      log.error("error from [AUTH SERVICE]: ", error);
      throw error;
    }
  }
}
module.exports = new TodoService();
