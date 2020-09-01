class Regedit{
    //teacher----------------------------------------------------
    setTeacher(_Teach:Teacher):void{
        _TeachersLists.push(_Teach);
    }    
    getTeachers():Array<Teacher>{
        return _TeachersLists;
    }
    selectTeacher(_id:number):number{
        return getIndex.call(_TeachersLists,_id);
    }
    searchTeacher(_id:number):Teacher{
        return _TeachersLists[this.selectTeacher(_id)]
    }
    //students-------------------------------------------------
    setStudent(_Student:Student):void{
        _studentsLists.push(_Student);
    }
    getStudents():Array<Student>{
        return _studentsLists;
    }
    selectStudent(_id:number):number{
        return getIndex.call(_studentsLists,_id);
    }
    searchStudent(_id:number):Student{
        return _studentsLists[this.selectStudent(_id)];
    }
    //general data---------------------------------------------
    setAsignature(_asg:AsignatureData):void{
        _asignatureData.push(_asg);
    }
    getAsignatures():Array<AsignatureData>{
        return _asignatureData;
    }
    selectAsignature(_id:number):number{
        return getIndex.call(_asignatureData,_id);
    }
    searchAsignature(_id:number):AsignatureData{
        return _asignatureData[this.selectAsignature(_id)]
    }
}
let rgdCtrl = new Regedit();