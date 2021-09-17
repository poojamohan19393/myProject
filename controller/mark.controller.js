
const Mark = require("../model/mark.model");

exports.insertMark=(req,res)=>{

    let marks = req.body.data;
    
    let values = marks.map((logs) => [
        logs.studentId,
        logs.classTeacher,
        logs.english,
        logs.hindi,
        logs.malayalam,
        logs.mathematics,
      ]);
    
    const details = new Mark({
       values : values,
    
    });

    Mark.insertMark(details,(error,data)=>{
        if (error) res.send({ status: "Success", data: [] });
        else {
          res.send({ status: "Success", data: [data] });
        }
      });
    };


  exports.updateMark=(req,res)=>{
    let studentId=req.body.studentId;
    let classTeacher=req.body.classTeacher;
    let english=req.body.english;
    let hindi=req.body.hindi;
    let malayalam = req.body.malayalam;
    let mathematics =req.body.mathematics;
    let id = req.body.id;
    
  
    const details = new Mark({
        studentId:studentId,
        classTeacher:classTeacher,
        english:english,
        hindi:hindi,
        malayalam:malayalam,
        mathematics : mathematics,
        id : id,
      
    });

    Mark.updateMark(details,(error,data)=>{
        if (error) res.send({ status: "Success", data: [] });
        else {
          res.send({ status: "Success", data: [data] });
        }
      });
    };


  exports.getAllMarklist=(req,res)=>{

    Mark.getAllMarklist((error,data)=>{
        if (error) res.send({ status: "Success", data: [] });
        else {
          res.send({ status: "Success", data: data });
        }
      });
    };

    exports.getMarksByStudentId=(req,res)=>{
        let studentId = req.params.studentId;
  
        const details = new Mark({
            studentId : studentId
        });
    
      Mark.getMarksByStudentId(details,(error,data)=>{
          if (error) res.send({ status: "Success", data: [] });
          else {
            res.send({ status: "Success", data: data });
          }
        });
      };