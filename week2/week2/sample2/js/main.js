(function(window){
    "use strict";
    var Person;

    Person = function(){
        this.firstName = "";
        this.lastName = "";
        this.sex = "";

        var country = "Nowhere";
        this.getCountry = function(){ return country;};
        this.setCountry = function(c){ country = c;};
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

        if (details.firstName) {
            this.firstName = details.firstName;
        }

        if(details.lastName){
            this.lastName = details.lastName;
        }

        if (details.sex) {
            this.sex = details.sex;
        }

        if(details.country){
            this.setCountry(details.country);
        }
    };


    Person.prototype.printPerson = function(){
        var str = "";
        str += "First Name: "+this.firstName;
        str += " Last Name: "+this.lastName;
        str += " Sex: "+ this.sex;
        str += " Country: "+this.getCountry();

        return str;
    };

    var p = new Person();
    var fullName = "Nicholas Chamansingh";
    p.setName(fullName)
    window.console.log(p.firstName+" "+p.lastName);
    window.console.log(p.getCountry());


    var person1 = new Person(),
    person2 = new Person(),
    person3 = new Person();

    var details1 = {
        "firstName" : "Nicholas",
        "lastName": "Chamansingh",
        "sex" : "male",
        "country" : "Trinidad"
    },
    details2 = {
        "firstName" : "John",
        "lastName": "Francis",
        "sex" : "male",
        "country" : "Trinidad"
    },
    details3 = {
        "firstName" : "Shelly",
        "lastName": "Chamansingh",
        "sex" : "female",
        "country" : "Trinidad"
    };

    person1.setDetails(details1);
    console.log(person1.printPerson());

    person2.setDetails(details2);
    console.log(person2.printPerson());

    person3.setDetails(details3);
    console.log(person3.printPerson());






    var PersonManager;

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
            delete this.persons[indx];
            return true
        }
        return false;
    };


    var personManager = new PersonManager();
    window.console.log(personManager.persons.length);
    personManager.addPerson(person1);
    window.console.log(personManager.persons.length);
    personManager.deletePersonById(0);
    window.console.log(personManager.persons);



}(this));