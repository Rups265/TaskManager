const express = require("express");
const router = express.Router();
const JWT = require("../middleware/auth.middleware");
const todoControllers = require("../controllers/task.controller");
const log = require("../configs/logger.config");

router.route("/addTask").post(async (req, res) => {
  try {
    const result = await todoControllers.addTask(req, res);
    return result;
  } catch (error) {
    log.error("Internal Server Error : ", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

router.route("/updateTaskById").put(async (req, res) => {
  try {
    const result = await todoControllers.updateTaskById(req, res);
    return result;
  } catch (error) {
    log.error("Internal Server Error : ", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

router.route("/deleteTaskById").delete(async (req, res) => {
  try {
    const result = await todoControllers.deleteTaskById(req, res);
    return result;
  } catch (error) {
    log.error("Internal Server Error : ", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

router.route("/markTaskAsCompleteById").post(async (req, res) => {
  try {
    const result = await todoControllers.markTaskAsCompleteById(req, res);
    return result;
  } catch (error) {
    log.error("Internal Server Error : ", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

router.route("/setDueDateById").post(async (req, res) => {
  try {
    const result = await todoControllers.setDueDateById(req, res);
    return result;
  } catch (error) {
    log.error("Internal Server Error : ", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

router.route("/getAllTask").get(async (req, res) => {
  try {
    const result = await todoControllers.getAllTask(req, res);
    return result;
  } catch (error) {
    log.error("Internal Server Error : ", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

router.route("/getTaskById").post(async (req, res) => {
  try {
    const result = await todoControllers.getTaskById(req, res);
    return result;
  } catch (error) {
    log.error("Internal Server Error : ", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

router.route("/addDueDateById").post(async (req, res) => {
  try {
    const result = await todoControllers.addDueDateById(req, res);
    return result;
  } catch (error) {
    log.error("Internal Server Error : ", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

//addDueDate
module.exports = router;
