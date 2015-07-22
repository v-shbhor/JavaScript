var mindtree = mindtree || {};
mindtree.teamb = mindtree.teamb || {};
mindtree.teamb.customer = function (firstname, middlename, lastname) {
    this.firstname = firstname;
    this.secondname = middlename;
    this.lastname = lastname;
    this.getfullname = function () {
        return this.firstname + "" + this.middlename + "" + this.lastname;
    }
    return this;
}