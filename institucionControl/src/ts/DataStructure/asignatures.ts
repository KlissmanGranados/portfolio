function findID():number{
    let id = 0;
    if(this.length>0){
        let _id: number = this[this.length-1].id+1;
        id = _id;
    }
    return id;
}
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

    private countStudents:number = 0;
    private state: boolean = false;

    constructor(_name: String, _section: String){
        super(_name,_section);
    }
    setCountStudents():void{
        this.countStudents += 1;
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
