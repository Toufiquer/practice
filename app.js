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
let gitItem = () => {
    let item = localStorage.getItem('item')
    let itemObj
    if (item) {
        itemObj = JSON.parse(item)
    } else {
        itemObj = {}
    }
    return itemObj
}
let newId = () => {
    id = 0
    return oldId => {
        id += oldId
        return id
    }
}
let itemNum = newId()
let allData = []
let makeData = (name, price) => {
    const idNum = itemNum(1)
    // console.log(idNum)
    allData[idNum] = {
        name: name,
        price: price
    }
    // let newItem = JSON.stringify(item)
    // console.log(item, newItem)
}
let saveItem = (name, price) => {
    let makeDataArray = makeData(name, price)
    let item = gitItem()
    item = { allData }
    // console.log(item)
    makeDataArray = JSON.stringify(makeDataArray)
    item = JSON.stringify(item)
    localStorage.setItem('item', item)
    // console.log(name, price, makeDataArray)
}
// *****************************************************
let loadData = () => {
    let allData = gitItem().allData
    // allData = allData.allData
    // console.log(allData.length)
    // console.log(allData[1].name)
    for (let i = 1; i < allData.length; i++) {
        // console.log(allData[i])
        let itemName = allData[i].name
        let itemPrice = allData[i].price
        // console.log(itemName, itemPrice)
        displayItem(itemName, itemPrice)
    }
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

loadData()