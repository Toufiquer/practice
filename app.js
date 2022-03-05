let dQS = id => { return document.querySelector(id) }
let warning = (data, isShow) => {
    if (isShow) {
        dQS('#warning-data').innerText = data
        dQS('#display-none').style.display = 'block'
    } else {
        dQS('#display-none').style.display = 'none'
    }
}
// *****************************************************
let getCart = () => {
    let cart = localStorage.getItem('cart')
    let cartObj
    if (cart) {
        cartObj = JSON.parse(cart)
    } else {
        cartObj = {}
    }
    return cartObj
}
let makeData = (name, price) => {
    let cart = getCart()
    let newCart = JSON.stringify(cart)
    if (newCart === '{}') {
        console.log('empty')
    } else {
        console.log('Not empty')
    }
    console.log(cart)
}
let saveItem = (name, price) => {
    makeData(name, price)
    console.log(name, price)
}
// *****************************************************
let displayItem = (name, price) => {
    let div = document.createElement('div')
    div.classList.add = 'container'
    div.innerHTML = `
        <div class="row">
            <div class="col-6">
                <h2>Product Name: <span id="name">${name}</span></h2>
            </div>
            <div class="col-6">
                <h2>Price $$: <span id="price">${price}</span></h2>
            </div>
        </div>
    `
    dQS('#main').appendChild(div)
}
dQS('#price-input').addEventListener('keyup', () => {
    let priceInput = dQS('#price-input').value
    if (priceInput == '') {
        warning('', false)
    } else if (priceInput == 0) {
        warning('Price is not 0', true)
    } else if (isNaN(priceInput)) {
        warning('Please input Number', true)
    } else {
        warning('', false)
    }
})
dQS('#add').addEventListener('click', () => {
    // console.log('working')
    let product = dQS('#product').value
    let priceInput = dQS('#price-input').value
    if (((product === '') && (priceInput === '')) || (isNaN(priceInput))) { return }
    saveItem(product, priceInput)
    displayItem(product, priceInput)
    // console.log(product, priceInput)
})
dQS('#clear').addEventListener('click', () => {
    dQS('#main').textContent = ''
    localStorage.removeItem('product')
})