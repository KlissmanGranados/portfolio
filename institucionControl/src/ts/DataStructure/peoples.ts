abstract class Person{

    protected id: number;
    protected ci: String;
    protected name: String;
    protected lastName: String;
    
    constructor(_ci: String, _name: String, _lastName: String){
        this.id =this.setID();
        this.ci = _ci;
        this.name = _name;
        this.lastName = _lastName;
    }
    abstract setID():number;
}
class Teacher extends Person{

    private asignatures: Array<AsignatureData> =[];

    constructor(_ci: String, _name: String, _lastName: String){
        super(_ci,_name,_lastName);
    }
    setAsignatures(_asg: AsignatureData):void{
        this.asignatures.push(_asg);
    }
    getAsignatures():Array<AsignatureData>{
        return this.asignatures;
    }
    setID():number{
        return findID.call(_TeachersLists);
    }
}
class Student extends Person{
    
    private asignatures: Array<AsignatureStudent> =[];
    private average: number;
    
    constructor(_ci: String, _name: String, _lastName: String){
        super(_ci,_name,_lastName);
    }
    setAsignature(_asg:AsignatureStudent):void{
        this.asignatures.push(_asg);
    }
    private Average():void{
        let aux: number = 0;
        let i: number = 0;
        this.asignatures.forEach((value)=>{
            aux += value.getAverage();
            i++;
        });
        if(i>0 && aux>0){
            aux=aux/i;
            this.average = aux;
        } 
    }
    getAsignature():Array<AsignatureStudent>{
        return this.asignatures;
    }
    getAverage(): number{
        this.Average();
        return this.average;
    }
    setID():number{
        return findID.call(_studentsLists);
    }
}


