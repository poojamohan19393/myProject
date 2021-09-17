const express = require("express");
const router = express.Router();
console.log("hello this is root.js file");


const staffRoute = require("./staff.route");
const studentRoute = require("./student.route");
const markRoute = require("./mark.route");



router.use("/staff", staffRoute);
router.use("/student", studentRoute);
router.use("/mark", markRoute);





module.exports = router;
