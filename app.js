let dQS = id => { return document.querySelector(id) }
let warning = (data, isShow) => {
    if (isShow) {
        dQS('#warning-data').innerText = data
        dQS('#display-none').style.display = 'block'
    } else {
        dQS('#display-none').style.display = 'none'
    }
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
    console.log('working')
    let product = dQS('#product').value
    let priceInput = dQS('#price-input').value
    if (((product === '') && (priceInput === '')) || (isNaN(priceInput))) { return }
    let div = document.createElement('div')
    div.classList.add = 'container'
    div.innerHTML = `
        <div class="row">
            <div class="col-6">
                <h2>Product Name: <span id="name">${product}</span></h2>
            </div>
            <div class="col-6">
                <h2>Price $$: <span id="price">${priceInput}</span></h2>
            </div>
        </div>
    `
    dQS('#main').appendChild(div)
    console.log(product, priceInput)
})
dQS('#clear').addEventListener('click', () => {
    dQS('#main').textContent = ''
})