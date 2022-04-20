let burgerButton = document.getElementById("burgerButton");

burgerButton.addEventListener("click", function( event ) {
  {

	var burger = document.createElement('h2');
  burger.innerText = "🍔";
  burger.setAttribute("class", "crazy");
  
	document.getElementById("cont").appendChild(burger);
}
  }
  );

let friesButton = document.getElementById("friesButton");

friesButton.addEventListener("click", function( event ) {
  {

	var fries = document.createElement('h2');
  fries.innerText = "🍟";
  fries.setAttribute("class", "crazy");
  
	document.getElementById("cont").appendChild(fries);
}
  }
  );

let shakeButton = document.getElementById("shakeButton");

shakeButton.addEventListener("click", function( event ) {
  {

	var shake = document.createElement('h2');
  shake.innerText = "🥤";
  shake.setAttribute("class", "crazy");
  
	document.getElementById("cont").appendChild(shake);
}
  }
  );

  let iceCreamButton = document.getElementById("iceCreamButton");

  iceCreamButton.addEventListener("click", function( event ) {
    {
  
    var iceCream = document.createElement('h2');
    iceCream.innerText = "🍦";
    iceCream.setAttribute("class", "crazy");
    
    document.getElementById("cont").appendChild(iceCream);
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