var mindtree = mindtree || {};
mindtree.teama = mindtree.teama || {};
mindtree.teama.customer = function (firstname, lastname)
{
    this.firstname = firstname;    
    this.lastname = lastname;
    this.getfullname = function()
    {
        return this.firstname + "" + this.lastname;
    }
    return this;
}