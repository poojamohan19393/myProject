const Staff = require("../model/staff.model");

exports.staff=(req,res)=>{
    let name=req.body.name;
    let address=req.body.address;
    let mobile=req.body.mobile;
    let gender=req.body.gender;
    let dob = req.body.dob;
    let doj =req.body.doj;
    let designation = req.body.designation;
  
    const details = new Staff({
        name:name,
        address:address,
        mobile:mobile,
        gender:gender,

        dob:dob,
        doj:doj,
        designation:designation,
      
    });

    Staff.staff(details,(error,data)=>{
        if (error) res.send({ status: "Success", data: [] });
        else {
          res.send({ status: "Success", data: [data] });
        }
      });
    };


  exports.updateStaff=(req,res)=>{
    let name=req.body.name;
    let address=req.body.address;
    let mobile=req.body.mobile;
    let gender=req.body.gender;
    let dob = req.body.dob;
    let doj =req.body.doj;
    let designation = req.body.designation;
    let id = req.body.id;
  
    const details = new Staff({
        name:name,
        address:address,
        mobile:mobile,
        gender:gender,

        dob:dob,
        doj:doj,
        designation:designation,
        id : id,
      
    });

    Staff.updateStaff(details,(error,data)=>{
        if (error) res.send({ status: "Success", data: [] });
        else {
          res.send({ status: "Success", data: [data] });
        }
      });
    };


  exports.getAllStaff=(req,res)=>{
  
    Staff.getAllStaff((error,data)=>{
        if (error) res.send({ status: "Success", data: [] });
        else {
          res.send({ status: "Success", data: data });
        }
      });
    };

    exports.getAllNonTeachingStaff=(req,res)=>{
  
      Staff.getAllNonTeachingStaff((error,data)=>{
          if (error) res.send({ status: "Success", data: [] });
          else {
            res.send({ status: "Success", data: data });
          }
        });
      };
