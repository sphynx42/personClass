//Dylan Gainey
////1/26/2015
////exercise 3 chapter 3 
////Person Class

function Person() {
	this.gender = "";
	this.sex = "";
	this.samegender = samegender;
}


var cody = new Person();  //create the person object
cody.gender = 'male';  //fill the persons object with properties for the gender (using dot notation)
cody.name = "cody"; // fills the person object with properties for the name 
console.log(cody);  //logs Object {gender}


var patrick = new Person();
patrick.gender = 'male';
patrick.name = "patrick";
console.log(patrick);


var james = new Person();
james.gender = 'male';
james.name = "james";
console.log(james);
//
//
var dylan = new Person();
dylan.gender = 'male';
dylan.name = "dylan";
console.log(dylan);
//
//
var nate = new Person();
nate.gender = 'male';
nate.name = 'nate';
console.log(nate);
//
var sue = new Person();
sue.gender = 'female';
sue.name = 'sue';
console.log(sue);
//
var ally = new Person();
ally.gender = 'female';
ally.name = 'ally';
console.log(ally);

var casey = new Person();
casey.gender = 'female';
casey.name = 'casey';
console.log(casey);

var sam = new Person();
sam.gender = 'female';
sam.name = 'sam';
console.log(sam);

var aj = new Person();
aj.gender = 'female';
aj.name = 'aj';
console.log(aj);





function samegender(sex) {
  if (this.gender == sex) {
     console.log(this);
  }

}

var people = [cody,patrick,james, dylan,nate,sue,ally,casey,sam,aj]; 

 people[0].samegender("male");

