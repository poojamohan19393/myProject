const express = require("express");
const router = express.Router();



const studentController = require("../controller/student.controller");


router.post("/student",studentController.student);
router.post("/updateStudent",studentController.updateStudent);
router.get("/getAllStudent",studentController.getAllStudent);
router.get("/getStudentById/:id",studentController.getStudentById);



module.exports = router;