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
        this.id = -1;
        this.age = 0;
        this.email = "";
        this.phone = "";
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
        var person_context = this;
        $.each(details, function(key, value){
            if (details[key]) {
                if (key === 'id') {
                    person_context[key] = parseInt(value);
                }else{
                    person_context[key] = value;
                }
            }
        });
    };

    Person.prototype.save = function(detial, _callback){
        detial.picture = "http://web1.crafthub.me/assets/placeholder-50x50.png";
        services.user.post(detial, function(res){
            if (typeof _callback === 'function') {
                _callback(res);
            }
        });
    };


    Person.prototype.printPerson = function(){
        var str = "";
        str += "First Name: "+this.firstName;
        str += " Last Name: "+this.lastName;
        str += " Sex: "+ this.gender;
        str += " Picture: "+ this.picture;
        str += " Company: "+this.company;

        return str;
    };


    PersonManager = function(){
        this.persons = [];
    };


    PersonManager.prototype.addPerson = function(person){
        if (person instanceof Person)  {
            // window.console.log("Entering Person: "+person.printPerson());
            var id;
            id = this.persons.length;
            //Pushes item to add it to the end of the array
            this.persons.push(person);
            return id;
        }else{
            window.console.log("No Person added");
        }
    };


    PersonManager.prototype.deletePersonById = function(indx, _callback){
        if(indx >= 0 && indx < this.persons.length){ //check if valid index
            var person_manager_context = this;
            services.user.delete(this.persons[indx].id, function(res){
                person_manager_context.persons.splice(indx, 1);

                if (typeof _callback === 'function') {
                    _callback(res);
                }
            });
            return false
        }
        return false;
    };

    models.Person = Person;
    models.PersonManager = PersonManager;

}(this));