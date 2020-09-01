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
}
class Teacher extends Person{

    private asignatureId: Array<number> =[];

    constructor(_ci: String, _name: String, _lastName: String){
        super(_ci,_name,_lastName);
    }
    setAsignatures(_asg: number):void{
        this.asignatureId.push(_asg);
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
    removeAsignature(_id:number):void{
        deleteElement.call(this.asignatures,_id);
    }
}


