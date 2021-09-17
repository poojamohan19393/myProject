const express = require("express");
const router = express.Router();



const staffController = require("../controller/staff.controller");


router.post("/staff",staffController.staff);
router.post("/updateStaff",staffController.updateStaff);
router.get("/getAllStaff",staffController.getAllStaff);
router.get("/getAllNonTeachingStaff",staffController.getAllNonTeachingStaff);



module.exports = router;