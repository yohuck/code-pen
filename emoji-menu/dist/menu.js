// an array containing each menu item as an object
const menuItems = [
    { _name: 'burger',
    _price: 2.25,
    get price() {
        return this._price
    } 
}, { _name: 'fries',
    _price: 1.45,
    get price() {
        return this._price
    } 
}, { _name: 'soda',
    _price: 0.99,
    get price() {
        return this._price
    } 
}, { _name: 'ice-cream',
    _price: 1.99,
    get price() {
        return this._price
    }
    } 
]

//global variables for calculations
let orderTicket = 001
let orderItems = []
let orderTotal = 0.00
let orderHistory = []
let currentOrder = [] // active with frontend
let currentTotal = 0; // active with frontend
 

// pulls an item from the menu
const fetchItem = itemToFetch => menuItems.find( object => object._name === itemToFetch );
// gets the price of an item from the menu
const fetchPrice = itemToFetchPrice => fetchItem(itemToFetchPrice).price;
// places the order
const placeOrder = arr => {
    arr.forEach(item => {
        orderItems.push(fetchItem(item));
        // console.log(orderItems)
        orderTotal = orderTotal + fetchPrice(item);
    } );
    orderTotal = Math.round(100*orderTotal)/100; 
    orderTicket++
    // console.log(
    // `Order: ${orderTicket} Total: $${orderTotal}`)
    return [orderTicket, orderTotal, orderItems]
}


const processOrder = arr => orderHistory.push(placeOrder(arr));
const addItemToCurrent = item => currentOrder.push(item);





let burgerButton = document.getElementById("burgerButton");

burgerButton.addEventListener("click", function( event ) {
  {
    addItemToCurrent('burger');
    currentTotal = currentTotal + fetchPrice('burger')
    currentTotal = Math.round(100*currentTotal)/100;


	var burger = document.createElement('h2');
    burger.innerText = "🍔";
    burger.setAttribute("class", "crazy");

    // var burgerNumber = document.createElement('p');
    // burgerNumber.innerText = currentTotal;
    // burgerNumber.setAttribute("class", "crazy");
  
	document.getElementById("cont").appendChild(burger);
    document.getElementById("total").innerHTML = currentTotal;

  }})

let friesButton = document.getElementById("friesButton");

friesButton.addEventListener("click", function( event ) {
  {
    addItemToCurrent('fries');
    currentTotal = currentTotal + fetchPrice('fries')
    currentTotal = Math.round(100*currentTotal)/100;

	var fries = document.createElement('h2');
  fries.innerText = "🍟";
  fries.setAttribute("class", "crazy");
  
	document.getElementById("cont").appendChild(fries);
    document.getElementById("total").innerHTML = currentTotal;

}
  }
  );

  let sodaButton = document.getElementById("sodaButton");

  sodaButton.addEventListener("click", function( event ) {
    {
    addItemToCurrent('soda');
    currentTotal = currentTotal + fetchPrice('soda')
    currentTotal = Math.round(100*currentTotal)/100;
  
    var soda = document.createElement('h2');
    soda.innerText = "🥤";
    soda.setAttribute("class", "crazy");
    
    document.getElementById("cont").appendChild(soda);
    document.getElementById("total").innerHTML = currentTotal;

  }
    }
    );


  let iceCreamButton = document.getElementById("iceCreamButton");

  iceCreamButton.addEventListener("click", function( event ) {
    {
    addItemToCurrent('ice-cream');
    currentTotal = currentTotal + fetchPrice('ice-cream')
    currentTotal = Math.round(100*currentTotal)/100;
  
    var iceCream = document.createElement('h2');
    iceCream.innerText = "🍦";
    iceCream.setAttribute("class", "crazy");
    
    document.getElementById("cont").appendChild(iceCream);
    document.getElementById("total").innerHTML = currentTotal;
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
    currentTotal = 0.00;
    document.getElementById("total").innerHTML = currentTotal;
  let tacoMountain  = document.getElementsByClassName("crazy");
  console.log(tacoMountain);
  let howMany = tacoMountain.length
  for(let p = 0; p < howMany; p++){
 
    tacoMountain[0].remove();
  // tacoMountain[p].setAttribute("style", "transform: scale(0);");

    
  }
});





// an array containing each menu item as an object


// addItemToCurrent('burger'); //click burger button
// addItemToCurrent('fries'); // click fries button
// console.log(currentOrder); // current order list to be processed
// placeOrder(currentOrder);
// console.log(orderItems);
// console.log(orderTotal);