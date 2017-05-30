console.log("linked!");

var pet = {

	hunger: 5,
	sleepiness: 5,
	boredom: 5,
	age: 1,
	name:""

}
var age_num = document.getElementById('age#');
var hunger_num = document.getElementById('hunger#');
var sleep_num = document.getElementById('sleep#');
var bored_num = document.getElementById('bored#');

age_num.innerHTML = pet.age;
hunger_num.innerHTML= pet.hunger;
sleep_num.innerHTML = pet.sleepiness;
bored_num.innerHTML = pet.boredom;

var nameButton = document.getElementById('pet_name');
nameButton.addEventListener("click", function(){

pet.name = document.getElementById('name').value;

 });

 var ageIncrease = function(){

 	pet.age++;
 	age_num.innerHTML = pet.age;

 }

 setInterval(ageIncrease, 3000);

 var hungerIncrease = function(){

 	pet.hunger++;

 }

 var hungerDecrease = function(){

 	pet.hunger--;

 }


 

