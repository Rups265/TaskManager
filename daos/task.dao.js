const log = require("../configs/logger.config");
const taskModel = require("../models/task.model");
const getNextSequenceValue = require("../utils/helpers/counter.utils");

class TASKDao {
  //createTASK
  async createTask(data) {
    try {
      const taskId = "Task_" + (await getNextSequenceValue("task"));
      data.taskId = taskId;

      const TASK = new taskModel(data);
      const TASKInfo = await TASK.save();
      log.info("TASK saved");
      if (TASKInfo) {
        return {
          message: "TASK creation successful",
          status: "success",
          code: 200,
          data: TASKInfo,
        };
      } else {
        log.error("Error from [TASK DAO] : TASK creation error");
        throw error;
      }
    } catch (error) {
      log.error("Error from [TASK DAO] : ", error);
      throw error;
    }
  }

  async updatedTASK(taskId, data) {
    try {
      const TASKInfo = await taskModel.findOneAndUpdate({ taskId }, data, {
        new: true,
      });
      log.info("TASK updated");
      if (TASKInfo) {
        return {
          message: "TASK updated successful",
          status: "success",
          code: 200,
          data: TASKInfo,
        };
      } else {
        return {
          message: "TASK update fail",
          status: "fail",
          code: 201,
          data: null,
        };
      }
    } catch (error) {
      log.error("Error from [TASK DAO] : ", error);
      throw error;
    }
  }

  async getTaskById(taskId) {
    try {
      const result = await taskModel.findOne({ taskId });
      if (result) {
        return {
          message: "TASK found",
          status: "success",
          code: 200,
          data: result,
        };
      } else {
        return {
          message: "TASK not found",
          status: "fail",
          code: 201,
          data: null,
        };
      }
    } catch (error) {
      log.error("Error from [TASK DAO] : ", error);
      throw error;
    }
  }

  //getAllTask
  async getAllTask() {
    try {
      const result = await taskModel.find().sort({ _id: -1 });
      if (result) {
        return {
          message: "TASK found",
          status: "success",
          code: 200,
          data: result,
        };
      } else {
        return {
          message: "TASK not found",
          status: "fail",
          code: 201,
          data: null,
        };
      }
    } catch (error) {
      log.error("Error from [TASK DAO] : ", error);
      throw error;
    }
  }

  //deleteTaskById
  async deleteTaskById(taskId) {
    try {
      const result = await taskModel.findOneAndDelete({ taskId });
      if (result) {
        return {
          message: "TASK deleted",
          status: "success",
          code: 200,
          data: result,
        };
      } else {
        return {
          message: "TASK not deleted",
          status: "fail",
          code: 201,
          data: null,
        };
      }
    } catch (error) {
      log.error("Error from [TASK DAO] : ", error);
      throw error;
    }
  }

  //makeTaskCompleted
  async makeTaskCompleted(taskId, isCompleted) {
    try {
      const TASKInfo = await taskModel.findOneAndUpdate(
        { taskId },
        {
          isCompleted: isCompleted,
        },
        {
          new: true,
        }
      );
      log.info("TASK updated");
      if (TASKInfo) {
        return {
          message: "TASK updated successful",
          status: "success",
          code: 200,
          data: TASKInfo,
        };
      } else {
        return {
          message: "TASK update fail",
          status: "fail",
          code: 201,
          data: null,
        };
      }
    } catch (error) {
      log.error("Error from [TASK DAO] : ", error);
      throw error;
    }
  }

  //addDueDate
  async addDueDate(taskId, newDueDate) {
    try {
      const TASKInfo = await taskModel.findOneAndUpdate(
        { taskId },
        {
          dueDate: newDueDate,
        },
        {
          new: true,
        }
      );
      log.info("TASK updated");
      if (TASKInfo) {
        return {
          message: "TASK updated successful",
          status: "success",
          code: 200,
          data: TASKInfo,
        };
      } else {
        return {
          message: "TASK update fail",
          status: "fail",
          code: 201,
          data: null,
        };
      }
    } catch (error) {
      log.error("Error from [TASK DAO] : ", error);
      throw error;
    }
  }
}
module.exports = new TASKDao();
