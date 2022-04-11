// creates an array of all the poppers
let switches = document.querySelectorAll('.popper');
   

// initializes the audio
let audio = document.getElementById('pop');

// adds event listeners to all the poppers
for (var i = 0; i < switches.length; i++){
    switches[i].addEventListener('click', function(e){
      // adds/removed active class & plays audio then sets time = zero so audio can play again.
       if (this.classList.contains('active')){
          this.classList.remove('active');
          audio.currentTime = 0;
          audio.play();
          audio.currentTime = 0;
       } else {
          this.classList.add('active');
          audio.currentTime = 0;
          audio.play();
          audio.currentTime = 0;        
       }
    })
};