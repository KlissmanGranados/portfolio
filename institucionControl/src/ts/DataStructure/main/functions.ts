function findID():number{
    let id = 0;
    if(this.length>0){
        let _id: number = this[this.length-1].id+1;
        id = _id;
    }
    return id;
}
function deleteElement(_id:number):void{
    this.forEach((value: { id: number; },i: number)=>{
        if(value.id == _id){
            this.splice(i,1);
        }
    });
}
function getIndex(_id:number):number{
    let index:number = -1;
    this.forEach((value:{id:number;}, i:number)=>{
        if(value.id == _id){
            index = i;
        }
    });
    if(index<0) 
        console.log("Revisar ID");
    return index;
}