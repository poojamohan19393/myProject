const express = require("express");
const router = express.Router();



const markController = require("../controller/mark.controller");


router.post("/insertMark",markController.insertMark);
router.post("/updateMark",markController.updateMark);
router.get("/getAllMarklist",markController.getAllMarklist);
router.get("/getMarksByStudentId/:studentId",markController.getMarksByStudentId);



module.exports = router;