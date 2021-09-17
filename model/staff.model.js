
const sql = require("../db/db.js");

const Staff = function (staffs){
    this.id=staffs.id;
    this.name = staffs.name;
    this.address = staffs.address;
    this.mobile = staffs.mobile;
    this.gender = staffs.gender;
    this.dob = staffs.dob;
    this.doj = staffs.doj;
    this.designation = staffs.designation;
  
};

Staff.staff=(details,result)=>{
    console.log("Started");
    sqlQuery=`INSERT INTO staff (name,address,mobile,gender,dob,doj,designation) VALUES (?,?,?,?,?,?,?)`;
    sql.query(sqlQuery,[details.name,details.address,details.mobile,details.gender,details.dob,details.doj,details.designation],(error,response)=>{
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


Staff.updateStaff=(details,result)=>{
    console.log("Started");
    sqlQuery=`UPDATE staff SET name=?,address =?,mobile=?,gender =?,dob=?,
        doj=?,designation=?WHERE id =?`;
    sql.query(sqlQuery,[details.name,details.address,details.mobile,details.gender,details.dob,
        details.doj,details.designation,details.id],(error,response)=>{
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


Staff.getAllStaff=(result)=>{
    console.log("Started");
    sqlQuery=`SELECT staff.*, DATE_FORMAT(dob,"%Y-%m_%d") AS dob, DATE_FORMAT(doj,"%Y-%m_%d") AS doj FROM staff`;
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


Staff.getAllNonTeachingStaff=(result)=>{
    console.log("Started");
    sqlQuery=`SELECT staff.*, DATE_FORMAT(dob,"%Y-%m_%d") AS dob, DATE_FORMAT(doj,"%Y-%m_%d") AS doj FROM staff WHERE designation !='teacher'`;
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


module.exports = Staff;