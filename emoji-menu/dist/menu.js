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

let orderTicket = 001
let orderItems = []
let orderTotal = 0
let orderHistory = []


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
const currentOrder = ['burger', 'burger', 'fries', 'ice-cream']

const processOrder = orderHistory.push(placeOrder)

placeOrder(currentOrder);
placeOrder(lastOrder);

console.log(orderHistory)