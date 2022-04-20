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
}, { _name: 'ice cream',
    _price: 1.99,
    get price() {
        return this._price
    }
    } 
]

let orderTicket = 001
let orderItems = []
let orderTotal = 0

const fetchItem = itemToFetch => menuItems.find( object => object._name === itemToFetch );

console.log(fetchItem('burger'));

console.log(menuItems[1].price);