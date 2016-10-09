(function(window){
    "use strict";

    window.models = {
        Person : {},
        PersonManager: {}
    };
    var Person,
    PersonManager;

    Person = function(){
        this.firstName = "";
        this.lastName = "";
        this.gender = "";
        this.picture = "";
        this.id = -1;

        var company = "Nowhere";
        this.getCompany = function(){ return company;};
        this.setCompany = function(c){ company = c;};
    };


    Person.prototype.setName = function(fullName){
        var str_name = fullName.split(" ");// Delimiter

        if (str_name.length === 2) {
            this.firstName = str_name[0];
            this.lastName = str_name[1];
        }
        else window.console.log("Error in setting name");

    };


    Person.prototype.setDetails = function(details){

        if (details.id) {
            this.id = details.id;
        }

        if (details.firstName) {
            this.firstName = details.firstName;
        }

        if(details.lastName){
            this.lastName = details.lastName;
        }

        if (details.gender) {
            this.gender = details.gender;
        }

        if(details.company){
            this.setCompany(details.company);
        }
        if(details.picture){
            this.picture = details.picture;
        }
    };


    Person.prototype.printPerson = function(){
        var str = "";
        str += "First Name: "+this.firstName;
        str += " Last Name: "+this.lastName;
        str += " Sex: "+ this.gender;
        str += " Picture: "+ this.picture;
        str += " Country: "+this.getCompany();

        return str;
    };


    PersonManager = function(){
        this.persons = [];
    };


    PersonManager.prototype.addPerson = function(person){
        if (person instanceof Person)  {
            window.console.log("Entering Person: "+person.printPerson());
            var id;
            id = this.persons.length;
            //Pushes item to add it to the end of the array
            this.persons.push(person);
            return id;
        }else{
            window.console.log("No Person added");
        }
    };


    PersonManager.prototype.deletePersonById = function(indx){
        if(indx >= 0 && indx < this.persons.length){ //check if valid index
            this.persons.splice(indx, 1);
            return true
        }
        return false;
    };

    models.Person = Person;
    models.PersonManager = PersonManager;

}(this));