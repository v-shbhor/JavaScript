function employee(name) {
    this.name = name;
}
//No matter how many objects we create functions are loaded only once in memory
//Allows to override functions if required
//we can overide built in function
employee.prototype.getname = function () {
    return this.name;
}