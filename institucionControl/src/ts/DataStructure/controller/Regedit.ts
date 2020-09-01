class Regedit{
    //teacher
    setTeacher(_Teach:Teacher):void{
        _TeachersLists.push(_Teach);
    }    
    getTeachers():Array<Teacher>{
        return _TeachersLists;
    }
    searchTeacher(_id:number):Teacher{
        return _TeachersLists[getIndex.call(_TeachersLists,_id)]
    }
    updateTeacher(_id:number,_data: Array<String>):void{
        let index: number = getIndex.call(_TeachersLists,_id);
        if(index>=0)_TeachersLists[index].updatePersonalData(_data);
    }
    //students
    setStudent(_Student:Student):void{
        _studentsLists.push(_Student);
    }
    getStudents():Array<Student>{
        return _studentsLists;
    }
    searchStudent(_id:number):Student{
        return _studentsLists[getIndex.call(_studentsLists,_id)];
    }
    updateStudent(_id:number,_data: Array<String>):void{
        let index: number = getIndex.call(_studentsLists,_id);
        if(index>=0)_studentsLists[index].updatePersonalData(_data);
    }
    //general data
    setAsignature(_asg:AsignatureData):void{
        _asignatureData.push(_asg);
    }
    getAsignatures():Array<AsignatureData>{
        return _asignatureData;
    }
}