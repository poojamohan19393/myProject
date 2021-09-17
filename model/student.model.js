
const sql = require("../db/db.js");

const Student = function (student){
    this.id=student.id;
    this.name = student.name;
    this.address = student.address;
    this.standard = student.standard;
    this.gender = student.gender;
    this.bloodGroup = student.bloodGroup;
    this.classTeacher = student.classTeacher;
    this.dob = student.dob;
  
};

Student.student=(details,result)=>{
    console.log("Started");
    sqlQuery=`INSERT INTO student (name,address,standard,gender,bloodGroup,classTeacher,dob) VALUES (?,?,?,?,?,?,?)`;
    sql.query(sqlQuery,[details.name,details.address,details.standard,details.gender,details.bloodGroup,details.classTeacher,details.dob],(error,response)=>{
        if(error)
        {
            console.log("error",error);
            result(null,response);
        }
        else
        {
            console.log("Success",response);
            result(null,response);
        }
    });
};


Student.updateStudent=(details,result)=>{
    console.log("Started");
    sqlQuery=`UPDATE student SET name=?,address =?,standard=?,gender =?,bloodGroup=?,
        classTeacher=?,dob=?WHERE id =?`;
    sql.query(sqlQuery,[details.name,details.address,details.standard,details.gender,details.bloodGroup,
        details.classTeacher,details.dob,details.id],(error,response)=>{
        if(error)
        {
            console.log("error",error);
            result(null,response);
        }
        else
        {
            console.log("Success",response);
            result(null,response);
        }
    });
};


Student.getAllStudent=(result)=>{
    console.log("Started");
    sqlQuery=`SELECT student.*,DATE_FORMAT(dob,"%Y-%m-%d") AS dob FROM student`;
    sql.query(sqlQuery,(error,response)=>{
        if(error)
        {
            console.log("error",error);
            result(null,response);
        }
        else
        {
            console.log("Success",response);
            result(null,response);
        }
    });
};

Student.getStudentById=(details,result)=>{
    console.log("Started");
    sqlQuery=`SELECT student.*,DATE_FORMAT(dob,"%Y-%m-%d") AS dob FROM student WHERE id=?`;
    sql.query(sqlQuery,[details.id],(error,response)=>{
        if(error)
        {
            console.log("error",error);
            result(null,response);
        }
        else
        {
            console.log("Success",response);
            result(null,response);
        }
    });
};

module.exports = Student;