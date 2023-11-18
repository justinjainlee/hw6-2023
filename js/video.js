window.addEventListener("load", function() {
	console.log("Good job opening the window")
	var video = document.querySelector("#player1") 
	var slider = document.querySelector("#slider")
	video.autoplay = false ;
	video.loop = false ;
	console.log("auto play is set to " + video.autoplay)
	console.log("loop is set to " + video.autoplay)

	document.querySelector("#play").addEventListener("click", function(){
		console.log("Play Video")
		video.play();
		volume = video.volume
		document.querySelector("#volume").textContent = volume*100 + "%"; // Update volume display
		console.log("Volume is " + volume*100 + "%")
	});

	document.querySelector("#pause").addEventListener("click", function(){
		console.log("Pause Video")
		video.pause();
	});
	
	document.querySelector("#slower").addEventListener("click", function(){
		video.playbackRate -= 0.1;
		console.log("Video speed is " + video.playbackRate)
	})

	document.querySelector("#faster").addEventListener("click", function(){
		video.playbackRate += 0.1;
		console.log("Video speed is " + video.playbackRate)
	})

	document.querySelector("#skip").addEventListener("click", function(){
		var newTime = video.currentTime + 10
		if (newTime > video.duration){
			newTime = 0
		}
		else{ video.currentTime = newTime }
		video.currentTime = newTime;
		video.play();
		console.log("Current Location is " + newTime);
	})

	document.querySelector("#mute").addEventListener("click", function(){
		if (video.muted === false){
		video.muted = true
		document.querySelector("#mute").textContent = "Unmute"
		console.log("Video mute is " + video.muted)
		slider.value = 0
		document.querySelector("#volume").textContent = "0%" ;

		}
		else{
			video.muted = false
			document.querySelector("#mute").textContent = "Mute"
			console.log("Video mute is " + video.muted)
			slider.value = video.volume * 100 ;
			document.querySelector("#volume").textContent = slider.value + "%" ;


		}})

	document.querySelector("#slider").addEventListener("input", function (){
		var volume = slider.value;
		video.volume = volume / 100; // Convert the range value to a percentage
		document.querySelector("#volume").textContent = volume + "%"; // Update volume display
		console.log("Volume is " + volume + "%")
		})
	
	document.querySelector("#vintage").addEventListener("click", function(){
		video.classList.add("oldSchool")
		console.log("Oldschool")


	})
	
	document.querySelector("#orig").addEventListener("click", function(){
		video.classList.remove("oldSchool")
		console.log("Original")



	})

		
	



});



