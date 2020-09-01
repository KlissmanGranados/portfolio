function findID() {
    var id = 0;
    if (this.length > 0) {
        var _id = this[this.length - 1].id + 1;
        id = _id;
    }
    return id;
}
function deleteElement(_id) {
    var _this = this;
    this.forEach(function (value, i) {
        if (value.id == _id) {
            _this.splice(i, 1);
        }
    });
}
function getIndex(_id) {
    var index = -1;
    this.forEach(function (value, i) {
        if (value.id == _id) {
            index = i;
        }
    });
    if (index < 0)
        console.log("Revisar ID");
    return index;
}
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var asignature = (function () {
    function asignature(_name, _section) {
        this.points = [];
        this.name = _name;
        this.section = _section;
        this.id = this.setID();
    }
    asignature.prototype.setPoints = function (_pts) {
        if (_pts >= 0) {
            this.points.push(_pts);
            this.setAverage();
        }
    };
    asignature.prototype.editPoints = function (i, value) {
        if (value > 0) {
            this.points[i] = value;
            this.setAverage();
        }
    };
    asignature.prototype.setAverage = function () {
        var aux = 0;
        this.points.forEach(function (value) { return aux += value; });
        aux = aux / this.points.length;
        this.average = aux;
    };
    asignature.prototype.getPoints = function () {
        return this.points;
    };
    asignature.prototype.getAverage = function () {
        return this.average;
    };
    asignature.prototype.getID = function () {
        return this.id;
    };
    asignature.prototype.getName = function () {
        return this.name;
    };
    asignature.prototype.getSection = function () {
        return this.section;
    };
    return asignature;
})();
var AsignatureStudent = (function (_super) {
    __extends(AsignatureStudent, _super);
    function AsignatureStudent(_name, _section) {
        _super.call(this, _name, _section);
    }
    AsignatureStudent.prototype.setID = function () {
        var _this = this;
        var _id;
        _asignatureData.forEach(function (value) {
            if (value.getName() == _this.getName() && value.getSection() == _this.getSection()) {
                _id = value.getID();
            }
        });
        return _id;
    };
    return AsignatureStudent;
})(asignature);
var AsignatureData = (function (_super) {
    __extends(AsignatureData, _super);
    function AsignatureData(_name, _section) {
        _super.call(this, _name, _section);
        this.countStudents = 0;
        this.state = false;
    }
    AsignatureData.prototype.setTeacherID = function (_idTeacher) {
        this.teacherId = (_idTeacher);
        this.setState(true);
    };
    AsignatureData.prototype.setStudentId = function (_id) {
        if (this.state) {
            this.studentId.push(_id);
            this.setCountStudents();
        }
    };
    AsignatureData.prototype.setCountStudents = function () {
        if (this.getState()) {
            this.countStudents += 1;
        }
        else {
            this.setState(false);
        }
    };
    AsignatureData.prototype.getTeacherID = function () {
        return this.teacherId;
    };
    AsignatureData.prototype.setState = function (_state) {
        this.state = _state;
    };
    AsignatureData.prototype.getCountStudents = function () {
        return this.countStudents;
    };
    AsignatureData.prototype.getState = function () {
        return this.state;
    };
    AsignatureData.prototype.setID = function () {
        return findID.call(_asignatureData);
    };
    return AsignatureData;
})(asignature);
var Person = (function () {
    function Person(_ci, _name, _lastName) {
        this.id = this.setID();
        this.ci = _ci;
        this.name = _name;
        this.lastName = _lastName;
    }
    Person.prototype.updatePersonalData = function (_data) {
        var _personaData = new Array(this.ci, this.name, this.lastName);
        try {
            if (_data.length <= _personaData.length) {
                _data.forEach(function (value, i) {
                    switch (i) {
                        case 0: {
                            if (value && value != _personaData[i]) {
                                var n = parseInt(value.toString());
                                if (!isNaN(n)) {
                                    _personaData[i] = value;
                                }
                                else {
                                    console.log("Hay un problema con la cedula");
                                }
                            }
                            break;
                        }
                        default: {
                            if (value && value != _personaData[i]) {
                                _personaData[i] = value;
                            }
                            break;
                        }
                    }
                });
                this.ci = _personaData[0];
                this.name = _personaData[1];
                this.lastName = _personaData[2];
            }
            else {
                console.log("La longitud del vector no concuerda, verificar vector introducido");
            }
        }
        catch (error) {
            console.log(error);
        }
    };
    return Person;
})();
var Teacher = (function (_super) {
    __extends(Teacher, _super);
    function Teacher(_ci, _name, _lastName) {
        _super.call(this, _ci, _name, _lastName);
        this.asignatureId = [];
    }
    Teacher.prototype.setAsignatures = function (_asg) {
        this.asignatureId.push(_asg);
    };
    Teacher.prototype.getAsignatures = function () {
        return this.asignatureId;
    };
    Teacher.prototype.setID = function () {
        return findID.call(_TeachersLists);
    };
    return Teacher;
})(Person);
var Student = (function (_super) {
    __extends(Student, _super);
    function Student(_ci, _name, _lastName) {
        _super.call(this, _ci, _name, _lastName);
        this.asignatures = [];
    }
    Student.prototype.setAsignature = function (_asg) {
        this.asignatures.push(_asg);
    };
    Student.prototype.Average = function () {
        var aux = 0;
        var i = 0;
        this.asignatures.forEach(function (value) {
            aux += value.getAverage();
            i++;
        });
        if (i > 0 && aux > 0) {
            aux = aux / i;
            this.average = aux;
        }
    };
    Student.prototype.getAsignature = function () {
        return this.asignatures;
    };
    Student.prototype.getAverage = function () {
        this.Average();
        return this.average;
    };
    Student.prototype.setID = function () {
        return findID.call(_studentsLists);
    };
    Student.prototype.removeAsignature = function (_id) {
        deleteElement.call(this.asignatures, _id);
    };
    return Student;
})(Person);
var _TeachersLists = [];
var _asignatureData = [];
var _studentsLists = [];
var Regedit = (function () {
    function Regedit() {
    }
    Regedit.prototype.setTeacher = function (_Teach) {
        _TeachersLists.push(_Teach);
    };
    Regedit.prototype.getTeachers = function () {
        return _TeachersLists;
    };
    Regedit.prototype.searchTeacher = function (_id) {
        return _TeachersLists[getIndex.call(_TeachersLists, _id)];
    };
    Regedit.prototype.updateTeacher = function (_id, _data) {
        var index = getIndex.call(_TeachersLists, _id);
        if (index >= 0)
            _TeachersLists[index].updatePersonalData(_data);
    };
    Regedit.prototype.setStudent = function (_Student) {
        _studentsLists.push(_Student);
    };
    Regedit.prototype.getStudents = function () {
        return _studentsLists;
    };
    Regedit.prototype.searchStudent = function (_id) {
        return _studentsLists[getIndex.call(_studentsLists, _id)];
    };
    Regedit.prototype.updateStudent = function (_id, _data) {
        var index = getIndex.call(_studentsLists, _id);
        if (index >= 0)
            _studentsLists[index].updatePersonalData(_data);
    };
    Regedit.prototype.setAsignature = function (_asg) {
        _asignatureData.push(_asg);
    };
    Regedit.prototype.getAsignatures = function () {
        return _asignatureData;
    };
    return Regedit;
})();
