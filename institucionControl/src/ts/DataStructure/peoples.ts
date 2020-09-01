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
    updatePersonalData(_data:Array<String>):void{
        
        let _personaData:Array<String> = new Array(this.ci,this.name,this.lastName);
        try {
            
            if(_data.length<=_personaData.length){
                
                _data.forEach((value,i)=>{

                    switch(i){
                        case 0:{
                            if(value && value!=_personaData[i]){
                                let n: number = parseInt(value.toString()); 
                                if(!isNaN(n)){
                                    _personaData[i] = value;
                                }else{
                                    console.log("Hay un problema con la cedula");
                                }
                            }
                            break;
                        }
                        default:{
                            if(value && value!=_personaData[i]){
                                _personaData[i] = value;
                            }
                            break;
                        }
                    }
                });
    
                this.ci       = _personaData[0];
                this.name     = _personaData[1];
                this.lastName = _personaData[2];   
            }else{
                console.log("La longitud del vector no concuerda, verificar vector introducido");
            }

        } catch (error) {
            console.log(error);
        }
    }
    selectAsgGeneral(_id:number):number{
        return getIndex.call(_asignatureData,_id);
    }
}
class Teacher extends Person{

    private asignatureId: Array<number> =[];

    constructor(_ci: String, _name: String, _lastName: String){
        super(_ci,_name,_lastName);
    }
    setAsignatures(_asg: number):void{
        
        let i = this.selectAsgGeneral(_asg);
        
        if(!_asignatureData[i].getState()){

            this.asignatureId.push(_asg);
            _asignatureData[i].setTeacherID(this.id);    
        }
    }
    removeAsignature(_asg:number):boolean{
        let opc = _asignatureData[this.selectAsgGeneral(_asg)].removeTeacherID(this.id);
        return opc;
    }
    getAsignatures():Array<number>{
        return this.asignatureId;
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
        let i = this.selectAsgGeneral(_asg.getID());
        if(_asignatureData[i].getState()){
            _asignatureData[i].setStudentId(this.id);
            this.asignatures.push(_asg);
        }
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
    removeAsignature(_id:number):void{
        let i = this.selectAsgGeneral(_id);
        deleteElement.call(this.asignatures,_id);
        _asignatureData[i].removeStudentId(_id);
    }
    selectAsg(_id:number):number{
        return getIndex.call(this.asignatures,_id);
    }
    setPoints(_id:number,_pts:number):void{
        this.asignatures[this.selectAsg(_id)].setPoints(_pts);
        this.Average();
    }
    updatePoints(_id:number,_points:Array<number>):Array<number>{
        this.asignatures[this.selectAsg(_id)].updatePoints(_points);
        return this.asignatures[this.selectAsg(_id)].getPoints();
    }
    setNameAsg(_id:number,_name:String):void{
        this.asignatures[this.selectAsg(_id)].setName(_name);
    }
    setSection(_id:number,_section:String):void{
        this.asignatures[this.selectAsg(_id)].setSection(_section);
    }
    updateAsignature(_id:number,_name:String,_section:String):void{
        this.setNameAsg(_id,_name);
        this.setSection(_id,_section);
    }
}


