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

var morphs =["http://bestanimations.com/Animals/Mammals/Cats/Lions/lioncubanimation-21.gif", 
			 "https://68.media.tumblr.com/3a7a9f0ce8dca8acac5619184bedc5bd/tumblr_inline_ns6m6eyhri1rbem7u_500.gif", 
			 "https://www.mylionking.com/resources/site_images/animated_gif_000_simba_hakuna_matata.gif", 
			 "http://bestanimations.com/Animals/Mammals/Cats/Lions/lion-king-animated-gif-6.gif"
			 ];

var speech_array = ["I'm hungry", "I'm tired", "I'm bored"];

var speech_counter = 0;
 var position = 3;
 var right = true;

  var img = document.getElementById('pet_pic');
   var img2 = document.getElementById('pet_pic2');
 var img3 = document.getElementById('pet_pic1');

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

var dialog_hello = function(){

	var el = document.getElementById("speech");
	el.style.visibility = "visible";

	speech_counter++;

	setTimeout(dialog_off, 4000);
	setInterval(dialog, 32000);
}

var dialog = function(){

	var random = Math.floor(Math.random() * (2 - 0 + 1)) + 0;
	
		//add dialog logic here, if numbers lower than five then do below, 
		//else present by which is the greatest with hunger having more president

		if(pet.hunger < 5 && pet.sleepiness < 5 && pet.boredom < 5){
		
			var talk = document.getElementById("talk");
			var p = talk.getElementsByTagName('p')[0];
			p.innerHTML = speech_array[random];

			var el = document.getElementById("speech");
			el.style.visibility = "visible";
			setTimeout(dialog_off, 4000);
		}else if(pet.hunger > 5 && pet.sleepiness > 5 && pet.boredom > 5){

			if(pet.hunger > pet.sleepiness && pet.hunger > pet.boredom){

				var talk = document.getElementById("talk");
				var p = talk.getElementsByTagName('p')[0];
				p.innerHTML = speech_array[0];

				var el = document.getElementById("speech");
				el.style.visibility = "visible";
				setTimeout(dialog_off, 4000);
			}else if(pet.hunger < pet.sleepiness && pet.hunger < pet.boredom){

				var random_two = Math.floor(Math.random() * (1 - 0 + 1)) + 0;
				var getindex =0;
				if(random_two === 1){

					getindex = 2;

				var talk = document.getElementById("talk");
				var p = talk.getElementsByTagName('p')[0];
				p.innerHTML = speech_array[getindex];

				var el = document.getElementById("speech");
				el.style.visibility = "visible";
				setTimeout(dialog_off, 4000);
				}else{


					var talk = document.getElementById("talk");
				var p = talk.getElementsByTagName('p')[0];
				p.innerHTML = speech_array[1];

				var el = document.getElementById("speech");
				el.style.visibility = "visible";
				setTimeout(dialog_off, 4000);
				}

			}else if(pet.sleepiness > pet.hunger && pet.sleepiness > pet.boredom){

				var talk = document.getElementById("talk");
				var p = talk.getElementsByTagName('p')[0];
				p.innerHTML = speech_array[1];

				var el = document.getElementById("speech");
				el.style.visibility = "visible";
				setTimeout(dialog_off, 4000);
			}else if(pet.sleepiness < pet.hunger && pet.sleepiness < pet.boredom){

				var random_two = Math.floor(Math.random() * (1 - 0 + 1)) + 0;
				var getindex =0;
				if(random_two === 1){

					getindex = 2;
					var talk = document.getElementById("talk");
					var p = talk.getElementsByTagName('p')[0];
					p.innerHTML = speech_array[getindex];

					var el = document.getElementById("speech");
					el.style.visibility = "visible";
					setTimeout(dialog_off, 4000);
				}else{

					var talk = document.getElementById("talk");
					var p = talk.getElementsByTagName('p')[0];
					p.innerHTML = speech_array[random_two];

					var el = document.getElementById("speech");
					el.style.visibility = "visible";
					setTimeout(dialog_off, 4000);
				}

			}else if(pet.boredom > pet.hunger && pet.boredom > pet.sleepiness){

				var talk = document.getElementById("talk");
				var p = talk.getElementsByTagName('p')[0];
				p.innerHTML = speech_array[2];

				var el = document.getElementById("speech");
				el.style.visibility = "visible";
				setTimeout(dialog_off, 4000);
			}else if(pet.boredom < pet.hunger && pet.boredom < pet.sleepiness){

				var random_two = Math.floor(Math.random() * (1 - 0 + 1)) + 0;
			

					var talk = document.getElementById("talk");
					var p = talk.getElementsByTagName('p')[0];
					p.innerHTML = speech_array[random_two];

					var el = document.getElementById("speech");
					el.style.visibility = "visible";
					setTimeout(dialog_off, 4000);
				

			}else{

				
				var talk = document.getElementById("talk");
				var p = talk.getElementsByTagName('p')[0];
				p.innerHTML = speech_array[random];

				var el = document.getElementById("speech");
				el.style.visibility = "visible";
				setTimeout(dialog_off, 4000);

			}
		}else{

				
				var talk = document.getElementById("talk");
				var p = talk.getElementsByTagName('p')[0];
				p.innerHTML = speech_array[random];

				var el = document.getElementById("speech");
				el.style.visibility = "visible";
				setTimeout(dialog_off, 4000);

			}
	

}

var dialog_off = function(){

	var el = document.getElementById("speech");
	el.style.visibility = "hidden";

}

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
 		img2.setAttribute('src', morphs[0]);
 		img3.setAttribute('src', morphs[0]);
 		game_status.innerHTML =rank[0];
 	}
 	else if(age >= 3 && age < 6){

 		img.setAttribute('src', morphs[1]);
 		img2.setAttribute('src', morphs[1]);
 		img3.setAttribute('src', morphs[1]);
 		game_status.innerHTML = rank[1];
 	}
 	else if(age >= 6 && age < 9){

 		img.setAttribute('src', morphs[2]);
 		img2.setAttribute('src', morphs[2]);
 		img3.setAttribute('src', morphs[2]);
 		game_status.innerHTML= rank[2];
 	}
 	else if(age >= 9 && age < 12){

 		img.setAttribute('src', morphs[3]);
 		img2.setAttribute('src', morphs[3]);
 		img3.setAttribute('src', morphs[3]);
 		game_status.innerHTML =rank[3];
 	}
 	// else if(age >= 12){

 	// 	img.setAttribute('src', morphs[4]);
 	// 	game_status.innerHTML = rank[4];
 	// }

 }
var sleep = function(){

	img.setAttribute('src', "http://rs1035.pbsrc.com/albums/a436/kamaria_syrtis/366-75.gif~c200");
	img2.setAttribute('src', "http://rs1035.pbsrc.com/albums/a436/kamaria_syrtis/366-75.gif~c200");
	img3.setAttribute('src', "http://rs1035.pbsrc.com/albums/a436/kamaria_syrtis/366-75.gif~c200");
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
	    speech_counter = 0;
	    position =3;
	    right = true;

	    	img.style.opacity = "1";
 			// debugger;
 			img2.style.opacity = "0";
 			img3.style.opacity = "0";

		game_status.innerHTML = "LEVEL 1";
		img.setAttribute('src', "http://bestanimations.com/Animals/Mammals/Cats/Lions/lioncubanimation-21.gif");

		
		




 }



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





 setInterval(function(){

 	if(right){


 		position--;

 		if(position === 1){

 			right = false;
 		}


 	}
 	else{

 		
 		position ++;

 		if(position === 3){

 			right = true;
 		}
 	}

 	console.log(position);

 		if(position === 3){
 			img.style.opacity = "1";
 			document.getElementById('pet_pic2').style.opacity = "0";

 		}else if(position ===2){



 			img.style.opacity = "0";
 			// debugger;
 			img2.style.opacity = "1";
 			img3.style.opacity = "0";



 	}else{

 		img.style.opacity = "0";
 			// debugger;
 			img3.style.opacity = "1";
 			img2.style.opacity = "0";
 	}


 	

 }, 8000)






 setInterval(ageIncrease, 20000);
 setInterval(setIncrease, 10000);
 setTimeout(dialog_hello, 4000);


  



 







 


 

