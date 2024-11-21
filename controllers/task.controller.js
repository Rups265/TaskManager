const todoService = require("../services/task.service");
class TodoController {
  async addTask(req, res) {
    try {
      const result = await todoService.addTaskService(req, res);
      return result;
    } catch (error) {
      throw error;
    }
  }

  async updateTaskById(req, res) {
    try {
      const result = await todoService.updateTaskByIdService(req, res);
      return result;
    } catch (error) {
      throw error;
    }
  }

  async deleteTaskById(req, res) {
    try {
      const result = await todoService.deleteTaskByIdService(req, res);
      return result;
    } catch (error) {
      throw error;
    }
  }

  async markTaskAsCompleteById(req, res) {
    try {
      const result = await todoService.markTaskAsCompleteByIdService(req, res);
      return result;
    } catch (error) {
      throw error;
    }
  }

  async getAllTask(req, res) {
    try {
      const result = await todoService.getAllTaskService(req, res);
      return result;
    } catch (error) {
      throw error;
    }
  }

  async getTaskById(req, res) {
    try {
      const result = await todoService.getTaskByIdService(req, res);
      return result;
    } catch (error) {
      throw error;
    }
  }

  //setDueDateById
  async addDueDateById(req, res) {
    try {
      const result = await todoService.setDueDateByIdService(req, res);
      return result;
    } catch (error) {
      throw error;
    }
  }
}
module.exports = new TodoController();
