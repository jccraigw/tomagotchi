console.log("linked!");

var pet = {

	hunger: 1,
	sleepiness: 1,
	boredom: 1,
	age: 1,
	name:""

}
var age_num = document.getElementById('age_num');
var hunger_num = document.getElementById('hunger_num');
var sleep_num = document.getElementById('sleep_num');
var bored_num = document.getElementById('bored_num');
var game_status = document.getElementById('game_status');

var rank = ["LEVEL 1", "LEVEL 2", "LEVEL 3", "LEVEL 4", "LEVEL 5"];

var morphs =["https://s-media-cache-ak0.pinimg.com/originals/1d/24/c2/1d24c2658cc73ae08509c1f55706cce4.gif", 
			 "http://recrutement.lorweb.com/bundles/recruitment/images/ajax-loader.gif", 
			 "http://bradar.ru/sites/default/files/466b422c6a1ce24a6c4e20e62832d72a.jpg", 
			 "http://www.the-rivalry.com/uploads/2/12413659393995-mario_raccoonMario.gif",
			 "http://vignette2.wikia.nocookie.net/mario/images/d/dd/Tanooki_Mario_3.gif/revision/latest?cb=20101110170608"];

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

	if(pet.hunger === 0){


	}else{

		pet.hunger-=1;
		hunger_num.innerHTML= pet.hunger;
    }

})
 var checkAge = function(age){

 	if(age < 3){

 		img.setAttribute('src', morphs[0]);
 		game_status.innerHTML =rank[0];
 	}
 	else if(age >= 3 && age < 6){

 		img.setAttribute('src', morphs[1]);
 		game_status.innerHTML = rank[1];
 	}
 	else if(age >= 6 && age < 9){

 		img.setAttribute('src', morphs[2]);
 		game_status.innerHTML= rank[2];
 	}
 	else if(age >= 9 && age < 12){

 		img.setAttribute('src', morphs[3]);
 		game_status.innerHTML =rank[3];
 	}
 	else if(age >= 12){

 		img.setAttribute('src', morphs[4]);
 		game_status.innerHTML = rank[4];
 	}

 }
var sleep = function(){

	img.setAttribute('src', "https://media.giphy.com/media/6urLYSWgGgj4s/giphy.gif");
	var timer = 0;

	
	


}

var lightsButton = document.getElementById('lights');
lightsButton.addEventListener("click", function(){

	if(pet.sleepiness === 0){

	}
	else{
		pet.sleepiness-=1;
		sleep_num.innerHTML=pet.sleepiness;

		sleep();

		setTimeout(checker, 4000)
	
	}

})
var playButton = document.getElementById('play');
playButton.addEventListener("click", function(){

	if(pet.boredom === 0){

	}else{
		pet.boredom-=1;
		bored_num.innerHTML=pet.boredom;
	}
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

 	
 	checkAge(pet.age);
 

 }

 var checker = function(){


 	checkAge(pet.age);
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

 setInterval(ageIncrease, 60000);
 setInterval(setIncrease, 30000);





 

