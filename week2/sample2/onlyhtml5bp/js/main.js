(function (window) {
	'use strict';
	var fullName = "";
	var	details, p2, p3, Person, PersonManager, persons, pManager, Users;
	//window.console.log("Hello World");
	//window.alert("HI");

	Person = function () {
		this.firstName = "";
		this.lastName = "";
		this.sex = "";

		var country = "Nowhere";
		this.getCountry = function () { return country; };
		this.setCountry = function (c) { country = c; };

	};

	Person.prototype.setName = function (fullName){
		var str_name = fullName.split(" ");//Delimiter

		if(str_name.length === 2){
			this.firstName = str_name[0];
			this.lastName = str_name[1];
		}
		else window.concole.log("Error in setting name");
	};

	Person.prototype.setDetails = function(details){

		if(details.firstName) {
			this.firstName = details.firstName;
		}
		if(details.lastName) {
			this.lastName = details.lastName;
		}
		if(details.sex) {
			this.sex = details.sex;
		}
		if(details.country) {
			this.setCountry(details.counrty);
		}
	};

	Person.prototype.printPerson = function () {
		var str = "";
		str += "First Name: " +this.firstName;
		str += " Last Name: " +this.lastName;
		str += " Sex: " +this.sex;
		str += "Country: " +this.getCountry();
		return str;
	};

	var p = new Person();
	fullName = "Nichoals Chamansingh";
	p.setName(fullName);
	window.console.log(p.firstName + p.lastName);

	details = {
		"firstName": "Authur",
		"lastName": "Robinson",
		"sex":"Male",
		"country": "Trinidad"
	};

	p2 = new Person();
	p2.setDetails(details);
	window.console.log(p2.printPerson());

	details = {
		"firstName": "RED",
		"lastName": "LOL",
		"sex":"Male",
		"country": "Trinidad"
	};

	p3 = new Person();
	p3.setDetails(details);
	window.console.log(p3.printPerson());


	//window.console.log(p.getCountry());
	//p.setCountry("Trinidad");
	//window.console.log(p.getCountry());

	PersonManager = function () {

		this.persons = [];
	}

	PersonManager.prototype.addPerson = function(person){

		if(person instanceof Person){

			window.console.log("Entering person: " + person.printPerson());
			var id;
			id = this.persons.lenght;
			this.persons.push(person);//Push add item to the end of the array
			return id;
		}
		else {
		window.console.log("No Person Entered");
		}
	};

	PersonManager.prototype.removePersonById = function (indx){
		if(indx >= 0 && indx < this.persons.length){//Check is valid index
			delete this.persons[index];
			return true;
		}
		return false;
	}


	pManager = new PersonManager();
	pManager.addPerson(p);
	pManager.addPerson(p2);
	pManager.addPerson(p3);

	window.console.log(pManager.persons.length);

	//pManager.removePersonById(0);
	//pManager.removePersonById(0);

	//Line below should produce error
	window.console.log(pManager.persons[0].printPerson());




	Users = function(){
		this.name = "";
		this.privileges = [];
		var i = 0;

		this.addPrivilege = function(privilege){
							this.privileges[i] = privilege;
							i = i + 1;
							console.log("added");
						};
		this.printPrivileges = function(){
								console.log(JSON.stringify(this.privileges));
							};
		this.isPrivilege = function(privilege){
								var j;
								for(j=0; j< this.privileges.length; j = j +1){
									if(this.privileges[j] === privilege) return true;
									return false;
								}
							};
	}
}(this));