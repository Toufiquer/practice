let dQS = id => { return document.querySelector(id) }
// *****************************************************
// let newArray = { name: 'name' }
let getItem = () => {
    let item = localStorage.getItem('item')
    let itemObj
    if (item) {
        itemObj = JSON.parse(item)
    } else {
        itemObj = { name: 'name' }
    }
    return itemObj
}
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
dQS('#add').addEventListener('click', () => {
    // console.log('working')
    let product = dQS('#product').value
    let priceInput = dQS('#price-input').value
    if (((product === '') && (priceInput === '')) || (isNaN(priceInput))) { return }
    // saveItem(product, priceInput)
    displayItem(product, priceInput)
    run()
})
let run = () => {
    let product = dQS('#product').value
    let priceInput = dQS('#price-input').value
    let newArray = getItem()
    if (newArray.length == 0) {
        console.log('true')
        newArray = { name: 'name' }
    } else {
        console.log('false')
    }
    console.log(product, priceInput, newArray)
    newArray = JSON.stringify(newArray)
    localStorage.setItem('item', newArray)
}






dQS('#clear').addEventListener('click', () => {
    dQS('#main').textContent = ''
    localStorage.removeItem('item')
})
