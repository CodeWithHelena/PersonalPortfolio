//Responsive Toggle Menu
const toggler = document.getElementById("toggler");
const navbar = document.getElementById("nav-list");

function showNav(){
		navbar.classList.toggle("drop");
}


//Scroll Animation Function
window.addEventListener('scroll', reveal);

function reveal() {
	const reveals = document.querySelectorAll("section");

	for(let i = 0; i < reveals.length; i++){

		let windowheight = window.innerHeight;
		let revealtop = reveals[i].getBoundingClientRect().top;
		let revealpoint = 150;

		if(revealtop < windowheight - revealpoint){
			reveals[i].classList.add('active');
		}
		else{
			reveals[i].classList.remove('active');
		}
	}

}

//Typing Aniamation


//Progress Bar
// const progressBar = document.querySelector(".progress-circle");
// 		const valueContainer = document.querySelector(".progress-number");

// 		let progressValue = 0;
// 		let ProgressEndValue = 65;
// 		let speed = 10;

// 		let progress = setInterval(() => {
// 			progressValue++;

// 			valueContainer.textContent = `${progressValue}%`;
// 			 progressBar.style.background = `conic-gradient(
// 					 #4d5bf9 ${progressValue * 3.6}deg, 
// 					 #cadcff ${progressValue * 3.6}deg)`;
		
// 			if(progressValue == ProgressEndValue){
// 				clearInterval(progress);
// 			}
// 		}, speed);






		// const progressBar = document.querySelector(".progress-circle");
		// const valueContainer = document.querySelectorAll(".progress-number");

		// window.onload = function progres(progresIndex){
		// 	let progressValue = 0;
		// 	let ProgressEndValue = 65;
		// 	let speed = 10;

		// 	let progress = setInterval(() => {
		// 		progressValue++;

		// 		valueContainer[progresIndex].textContent = `${progressValue}%`;
		// 		 progressBar.style.background = `conic-gradient(
		// 				 #4d5bf9 ${progressValue * 3.6}deg, 
		// 				 #cadcff ${progressValue * 3.6}deg)`;
			
		// 		if(progressValue == ProgressEndValue){
		// 			clearInterval(progress);
		// 		}
		// 	}, speed);
		// }
		// //window.addEventListener('scroll', progres);
		

		


