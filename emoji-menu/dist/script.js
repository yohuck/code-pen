let clicker = document.getElementById("button-taco");

clicker.addEventListener("click", function( event ) {
  {

	var taco = document.createElement('h2');
  taco.innerText = "🌮";
  taco.setAttribute("class", "crazy");
  
	document.getElementById("cont").appendChild(taco);
}
  }
  );

let clickerBurrito = document.getElementById("button-burrito");

clickerBurrito.addEventListener("click", function( event ) {
  {

	var burrito = document.createElement('h2');
  burrito.innerText = "🌯";
  burrito.setAttribute("class", "crazy");
  
	document.getElementById("cont").appendChild(burrito);
}
  }
  );











let clicker2 = document.getElementById("button2");

clicker2.addEventListener("click", function( event) {
  // console.log('hello');
  let tacoMountain  = document.getElementsByClassName("crazy");
  console.log(tacoMountain.length)
  
  for(let p = 0; p < tacoMountain.length; p++){
    console.log(p);
  tacoMountain[p].setAttribute("style", "transform: scale(3);")
  }
  
  // let tacoMountain = document.getElementsByClassName('test');
  // tacoMountain.forEach()
});


let clicker3 = document.getElementById("button3");

clicker3.addEventListener("click", function( event) {
  let tacoMountain  = document.getElementsByClassName("crazy");
  console.log(tacoMountain);
  let howMany = tacoMountain.length
  for(let p = 0; p < howMany; p++){
 
    tacoMountain[0].remove();
  // tacoMountain[p].setAttribute("style", "transform: scale(0);");

    
  }
});


/// Countertop
/// Metal Hood above countertop
/// Style menu off In-N-Out
/// Add pricing
/// Add combo
/// Fill up drink with transitiion?
/// Print Receipt & Create Ticket
/// Hang tickets above counter