abstract class asignature{
    
    protected id: number;
    protected name: String;
    protected section: String;
    protected points: Array<number> = [];
    protected average: number;

    constructor(_name: String, _section: String){
        this.name = _name;
        this.section = _section;
        this.id = this.setID();
    }
    setPoints(_pts: number):void{
        if(_pts>=0){
            this.points.push(_pts);
            this.setAverage();
        }
    }
    editPoints(i:number,value:number):void{
        if(value>0){
            this.points[i] = value;
            this.setAverage();
        }
    }
    private setAverage():void{
        let aux: number = 0;
        this.points.forEach((value: number) => aux+=value);
        aux = aux/this.points.length;
        this.average = aux;
    }

    abstract setID():number;

    getPoints():Array<number>{
        return this.points;
    }
    getAverage():number{
        return this.average;
    }
    getID():number{   
        return this.id;
    }
    getName(): String{
        return this.name;
    }
    getSection(): String{
        return this.section;
    }
}
class AsignatureStudent extends asignature{
    
    constructor(_name: String, _section: String){
        super(_name,_section);
    }
    setID(): number{
        let _id: number;
        _asignatureData.forEach((value)=>{
            if(value.getName() == this.getName()  && value.getSection() == this.getSection()){
                _id = value.getID();
            }
        });
        return _id;
    }
}
class AsignatureData extends asignature{

    private teacherId: number;
    private studentId: Array<number>;
    private countStudents:number = 0;
    private state: boolean = false;

    constructor(_name: String, _section: String){
        super(_name,_section);
    }
    setTeacherID(_idTeacher:number):void{
        this.teacherId = (_idTeacher);
        this.setState(true);
    }
    setStudentId(_id:number):void{
        if(this.state){
            this.studentId.push(_id);
            this.setCountStudents();
        }
    }
    setCountStudents():void{
        if(this.getState()){
            this.countStudents += 1;
        }else{
            this.setState(false);
        }
    }
    getTeacherID():number{
        return this.teacherId;
    }
    setState(_state: boolean):void{
        this.state = _state;
    }
    getCountStudents(): number{
        return this.countStudents;
    }
    getState(): boolean{
        return this.state;
    }
    setID(): number{
        return findID.call(_asignatureData);
    }
}
