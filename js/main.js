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
var game_status = document.getElementById('game_status');

age_num.innerHTML = pet.age;
hunger_num.innerHTML= pet.hunger;
sleep_num.innerHTML = pet.sleepiness;
bored_num.innerHTML = pet.boredom;

var nameButton = document.getElementById('pet_name');
nameButton.addEventListener("click", function(){

pet.name = document.getElementById('name').value;

 });

var feedButton = document.getElementById('feed');
var lightsButton = document.getElementById('lights');
var playButton = document.getElementById('play');

 var reset = function() {

 		pet.hunger = 1;
		pet.sleepiness = 1;
		pet.boredom = 1;
		hunger_num.innerHTML= pet.hunger;
	sleep_num.innerHTML = pet.sleepiness;
	bored_num.innerHTML = pet.boredom;
		game_status.innerHTML = "LEVEL 1";
		setInterval(setIncrease, 2000);



 }

 var ageIncrease = function(){

 	pet.age++;
 	age_num.innerHTML = pet.age;

 }

 setInterval(ageIncrease, 3000);

 var setIncrease = function(){

 	pet.hunger++;
 	pet.sleepiness++;
 	pet.boredom++;

 	hunger_num.innerHTML= pet.hunger;
	sleep_num.innerHTML = pet.sleepiness;
	bored_num.innerHTML = pet.boredom;

	if(pet.hunger === 10 || pet.sleepiness === 10 || boredom === 10){

		game_status.innerHTML = "GAME OVER";

		setInterval(reset, 2000);
		
		
	}





 }





 setInterval(setIncrease, 4000);





 

