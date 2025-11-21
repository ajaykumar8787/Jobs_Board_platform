const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const {
  createJob,
  getJobs,
  getJob,
  updateJob,
  deleteJob
} = require("../controllers/jobController");

// Protected Routes
router.post("/", auth, createJob);
router.get("/", getJobs);
router.get("/:id", getJob);
router.put("/:id", auth, updateJob);
router.delete("/:id", auth, deleteJob);

module.exports = router;
