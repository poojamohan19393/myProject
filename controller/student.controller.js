const { student } = require("../model/student.model");
const Student = require("../model/student.model");

exports.student=(req,res)=>{
    let name=req.body.name;
    let address=req.body.address;
    let standard=req.body.standard;
    let gender=req.body.gender;
    let bloodGroup = req.body.bloodGroup;
    let classTeacher =req.body.classTeacher;
    let dob = req.body.dob;
  
  
    const details = new Student({
        name:name,
        address:address,
        standard:standard,
        gender:gender,
        bloodGroup:bloodGroup,
        classTeacher : classTeacher,
        dob : dob,
      
    });

    Student.student(details,(error,data)=>{
        if (error) res.send({ status: "Success", data: [] });
        else {
          res.send({ status: "Success", data: [data] });
        }
      });
    };


  exports.updateStudent=(req,res)=>{
    let name = req.body.name;
    let address = req.body.address;
    let standard = req.body.standard;
    let gender = req.body.gender;
    let bloodGroup = req.body.bloodGroup;
    let classTeacher =req.body.classTeacher;
    let dob = req.body.dob;
    let id = req.body.id;
    
  
    const details = new Student({
        name:name,
        address:address,
        standard:standard,
        gender:gender,
        bloodGroup:bloodGroup,
        classTeacher : classTeacher,
        dob : dob,
        id : id,
      
    });

    Student.updateStudent(details,(error,data)=>{
        if (error) res.send({ status: "Success", data: [] });
        else {
          res.send({ status: "Success", data: [data] });
        }
      });
    };


  exports.getAllStudent=(req,res)=>{

    Student.getAllStudent((error,data)=>{
        if (error) res.send({ status: "Success", data: [] });
        else {
          res.send({ status: "Success", data: data });
        }
      });
    };

    exports.getStudentById=(req,res)=>{
        let id = req.params.id;
  
        const details = new Student({
            id : id
        });
    
      Student.getStudentById(details,(error,data)=>{
          if (error) res.send({ status: "Success", data: [] });
          else {
            res.send({ status: "Success", data: data });
          }
        });
      };