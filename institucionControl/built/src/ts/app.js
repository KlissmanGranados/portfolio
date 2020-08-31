var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
function findID() {
    var id = 0;
    if (this.length > 0) {
        var _id = this[this.length - 1].id + 1;
        id = _id;
    }
    return id;
}
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
    AsignatureData.prototype.setCountStudents = function () {
        this.countStudents += 1;
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
    return Person;
})();
var Teacher = (function (_super) {
    __extends(Teacher, _super);
    function Teacher(_ci, _name, _lastName) {
        _super.call(this, _ci, _name, _lastName);
        this.asignatures = [];
    }
    Teacher.prototype.setAsignatures = function (_asg) {
        this.asignatures.push(_asg);
    };
    Teacher.prototype.getAsignatures = function () {
        return this.asignatures;
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
    return Student;
})(Person);
var _studentsLists = [];
var _TeachersLists = [];
var _asignatureData = [];
_studentsLists.push(new Student('2705608', 'Klissman', 'Granados'));
_studentsLists.push(new Student('2705608', 'Klissman', 'Granados'));
_studentsLists.push(new Student('2705608', 'Klissman', 'Granados'));
_asignatureData.push(new AsignatureData('calculo', 'n813'));
_asignatureData.push(new AsignatureData('calculo', 'n814'));
console.log(_asignatureData);
console.log(new AsignatureStudent('calculo', 'n814'));
