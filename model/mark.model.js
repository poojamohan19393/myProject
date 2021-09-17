
const sql = require("../db/db.js");

const Mark = function (marks){
    this.id=marks.id;
    this.studentId = marks.studentId;
    this.classTeacher = marks.classTeacher;
    this.english = marks.english;
    this.hindi = marks.hindi;
    this.malayalam = marks.malayalam;
    this.mathematics = marks.mathematics;

    this.values = marks.values;
  
};

Mark.insertMark=(details,result)=>{
    console.log("Started");
    sqlQuery=`INSERT INTO mark (studentId,classTeacher,english,hindi,malayalam,mathematics) VALUES ?`;
    sql.query(sqlQuery,[details.values],(error,response)=>{
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


Mark.updateMark=(details,result)=>{
    console.log("Started");
    sqlQuery=`UPDATE mark SET studentId=?,classTeacher =?,english=?,hindi =?,malayalam=?,
        mathematics=? WHERE id=?`;
    sql.query(sqlQuery,[details.studentId,details.classTeacher,details.english,details.hindi,details.malayalam,
        details.mathematics,details.id],(error,response)=>{
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


Mark.getAllMarklist=(result)=>{
    console.log("Started");
    sqlQuery=`SELECT mark.*,staff.name AS classTeacherName,student.name AS studentName FROM mark
    LEFT JOIN staff ON mark.classTeacher =staff.id LEFT JOIN student ON mark.studentId = student.id`;
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

Mark.getMarksByStudentId=(details,result)=>{
    console.log("Started");

    sqlQuery=`SELECT mark.*,staff.name AS classTeacherName,student.name AS studentName FROM mark
    LEFT JOIN staff ON mark.classTeacher =staff.id LEFT JOIN student ON mark.studentId = student.id WHERE studentId = ?`;
    
    sql.query(sqlQuery,[details.studentId],(error,response)=>{
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


module.exports = Mark;