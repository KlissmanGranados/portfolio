//
class AsgControll{
    constructor(){
        this.courses ={ 
            names : ['calculo','fisica','ed.fisica'],
            sections :['n813','n814','n815'],
        }
        this.enrolledStudents = new Array(this.courses.names.length);
        for(let i = 0 ; i< this.enrolledStudents.length; ++i){
            this.enrolledStudents[i] = new Array(this.courses.sections.length);
            this.enrolledStudents[i].fill(0);
        }
    }
    countStudents(_asignatures,opc){
        let i , j;
        _asignatures.forEach(function(value){
            i = this.courses.names.indexOf(value.name);
            j = this.courses.sections.indexOf(value.section);
            if(opc){
                this.enrolledStudents[i][j]++;
            }else{
                if(this.enrolledStudents[i][j]>0) this.enrolledStudents[i][j]--;
            }
        }) 
    }
    getCourse(){
        return this.courses;
    }
    getEnrolledStudents(){
        return this.enrolledStudents;
    }
}
function average(_points){
    let aux = 0;
    _points.array.forEach( values => aux+=values);
    aux = aux/_points.length;
    return aux;
}
class People{
    constructor(_ci,_name,_lastName){
        this.ci=_ci;
        this.name=_name;
        this.lastName=_lastName;
    }
}
class Student extends People{
    constructor(_ci,_name,_lastName,_career){
        super(_ci,_name,_lastName);
        this.career=_career;
        this.asignatures = [];
    }
    setAsignatures(_name,_section){
        let _asignatures = {
            name:_name,
            section:_section,
        }
        this.asignatures.push(_asignatures);
    }
    setPoints(_points){
        this.points = _points;
        this.averageAsignature();
    }
    averageAsignature() {
        let _averageAsignature = [];
        this.points.forEach(asignatures => _averageAsignature.push(average(asignatures)));
        this.averageAsignature = _averageAsignature;
        this.average = average(_averageAsignature);
    }
}
class regeditController extends AsgControll{
    constructor(){
        super();
        this.list = [];
    }
    setStudent(_ci,_name,_lastName,_career){
        this.list.push(new Student(_ci,_name,_lastName,_career));
        this.getID();
    }
    getStudent(){
        return this.list;
    }
    getID(){
        if(this.list.length>1) {
            this.list[this.list.length-1].id = this.list[this.list.length-2].id+1;
        }else{
            this.list[0].id = 0;
        }
    }
}