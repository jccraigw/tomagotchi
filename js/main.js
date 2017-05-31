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
	var display_name = document.getElementById('display_name');
	display_name.innerHTML = pet.name;

 });

var feedButton = document.getElementById('feed');
feedButton.addEventListener("click", function(){

	pet.hunger-=2;
	hunger_num.innerHTML= pet.hunger;


})
var lightsButton = document.getElementById('lights');
lightsButton.addEventListener("click", function(){

	pet.sleepiness-=2;
	sleep_num.innerHTML=pet.sleepiness;

})
var playButton = document.getElementById('play');
playButton.addEventListener("click", function(){

	pet.boredom-=2;
	bored_num.innerHTML=pet.boredom;

})

 var reset = function() {

 		pet.hunger = 1;
		pet.sleepiness = 1;
		pet.boredom = 1;
		pet.age = 1;
		hunger_num.innerHTML= pet.hunger;
	    sleep_num.innerHTML = pet.sleepiness;
	    bored_num.innerHTML = pet.boredom;
	    age_num.innerHTML = pet.age;

		game_status.innerHTML = "LEVEL 1";
		img.setAttribute('src', "https://s-media-cache-ak0.pinimg.com/originals/1d/24/c2/1d24c2658cc73ae08509c1f55706cce4.gif");

		
		




 }

 var img = document.getElementById('pet_pic');

 var ageIncrease = function(){

 	pet.age++;
 	age_num.innerHTML = pet.age;

 	if(pet.age < 3){

 		img.setAttribute('src', "https://s-media-cache-ak0.pinimg.com/originals/1d/24/c2/1d24c2658cc73ae08509c1f55706cce4.gif");
 	}
 	else if(pet.age === 3){

 		img.setAttribute('src', "http://recrutement.lorweb.com/bundles/recruitment/images/ajax-loader.gif");
 	}
 	else if(pet.age === 6){

 		img.setAttribute('src', "http://bradar.ru/sites/default/files/466b422c6a1ce24a6c4e20e62832d72a.jpg");
 	}
 	else if(pet.age === 9){

 		img.setAttribute('src', "http://www.the-rivalry.com/uploads/2/12413659393995-mario_raccoonMario.gif");
 	}
 	else if(pet.age >= 12){

 		img.setAttribute('src', "http://vignette2.wikia.nocookie.net/mario/images/d/dd/Tanooki_Mario_3.gif/revision/latest?cb=20101110170608");
 	}
 

 }

 

 var setIncrease = function(){

 	pet.hunger++;
 	pet.sleepiness++;
 	pet.boredom++;

 	hunger_num.innerHTML= pet.hunger;
	sleep_num.innerHTML = pet.sleepiness;
	bored_num.innerHTML = pet.boredom;

	if(pet.hunger === 10 || pet.sleepiness === 10 || pet.boredom === 10){

		game_status.innerHTML = "GAME OVER";

		setTimeout(reset, 2000);
		
		
	}





 }

 setInterval(ageIncrease, 6000);
 setInterval(setIncrease, 6000);





 

