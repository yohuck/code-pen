
// an array containing each menu item as an object
const menuItems = [
    { _name: 'burger',
    _price: 2.25,
    get price() {
        return this._price
    } 
}, { _name: 'fries',
    _price: 1.40,
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

//global variables
let orderTicket = 001
let orderItems = []
let orderTotal = 0
let orderHistory = []
let currentOrder = []


const fetchItem = itemToFetch => menuItems.find( object => object._name === itemToFetch );
const fetchPrice = itemToFetchPrice => fetchItem(itemToFetchPrice).price;
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

const lastOrder = ['fries', 'ice-cream']
const firstOrder = ['burger', 'burger', 'fries', 'ice-cream']

const processOrder = arr => orderHistory.push(placeOrder(arr));

const addItemToCurrent = item => currentOrder.push(item);

addItemToCurrent('burger'); //click burger button
addItemToCurrent('fries'); // click fries button
console.log(currentOrder); // current order list to be processed
placeOrder(currentOrder);
console.log(orderItems);
console.log(orderTotal);