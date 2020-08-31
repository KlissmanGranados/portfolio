//
let _studentsLists: Array<Student> = [];
let _TeachersLists: Array<Teacher> = [];
let _asignatureData: Array<AsignatureData> = [];


_studentsLists.push(new Student('2705608','Klissman','Granados'));
_studentsLists.push(new Student('2705608','Klissman','Granados'));
_studentsLists.push(new Student('2705608','Klissman','Granados'));

_asignatureData.push(new AsignatureData('calculo','n813'));
_asignatureData.push(new AsignatureData('calculo','n814'));
console.log(_asignatureData);
console.log(new AsignatureStudent('calculo','n814'));