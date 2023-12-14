const confirmBtn = document.getElementById('confirmBtn');
const totalDisplay = document.getElementById('total');
const cartSubtotal = document.getElementById('cartSubtotal')
//grab the menu-div
const menuDivs = document.querySelectorAll('.menu-div')
const receipt = document.getElementById('receipt')
let tax = .07;
let subtotal = 0;

//grab the types
const menuType = [
    'appetizers', 
    'entrees', 
    'drinks', 
    'desserts'
]

let receiptArray = []

confirmBtn.addEventListener('click', (e)=> {
    e.preventDefault()
    getTotal()
})

const getTotal=()=>{
    const subtotal = parseFloat(cartSubtotal.innerText)
    const tipAmt = parseFloat(document.getElementById('tipAmt').value)
    const otherAmt = parseFloat(document.getElementById('otherAmt').value)
    const yourTip = document.getElementById('yourTip')
    const yourSubtotal = document.getElementById('yourSubtotal')
    const taxDisplay = document.getElementById('tax')


    let taxTotal = subtotal * tax

    
    let receiptTip = isNaN(tipAmt) ? otherAmt : (subtotal * tipAmt)
    
    let total = isNaN(tipAmt) ? subtotal + otherAmt + taxTotal : (subtotal * tipAmt) + subtotal + taxTotal;
    
    isNaN(tipAmt) ? total = subtotal + otherAmt : total = (subtotal * tipAmt) + subtotal
    
    taxDisplay.innerText = taxTotal.toFixed(2)
    yourSubtotal.innerText = subtotal
    yourTip.innerText = receiptTip.toFixed(2)
    totalDisplay.innerText = total.toFixed(2)
}

//make receipt
const makeReceipt =(obj, el)=> {
    const tableRow = document.createElement('tr')
    tableRow.classList.add('receipt-item', 'text-start')

    const receiptChoice = document.createElement('td')
    receiptChoice.classList.add('receipt-item', 'text-center')
    receiptChoice.innerText = obj.item

    const receiptQty = document.createElement('td')
    receiptQty.classList.add('receipt-qty', 'text-center')
    receiptQty.setAttribute('id', `qty${obj.id}`)
    receiptQty.innerText = obj.qty

    const receiptPrice = document.createElement('td')
    receiptPrice.classList.add('receipt-price', 'text-center')
    receiptPrice.innerText = obj.price.toFixed(2)

    const itemSubtotal = document.createElement('td')
    itemSubtotal.classList.add('item-Subtotal', 'text-center')
    itemSubtotal.setAttribute('id', `subTotal${obj.id}`)
    itemSubtotal.innerText = obj.itemTotal.toFixed(2)

    tableRow.appendChild(receiptChoice)
    tableRow.appendChild(receiptQty)
    tableRow.appendChild(receiptPrice)
    tableRow.appendChild(itemSubtotal)

    

    el.appendChild(tableRow)

    // console.log(listItem);
}
//update receipt
const updateReceipt =(obj, qty, itemTotal)=> {
    const receiptQty = document.getElementById(`qty${obj.id}`)
    receiptQty.classList.add('receipt-qty')
    receiptQty.innerText = qty

    const itemSubtotal = document.getElementById(`subTotal${obj.id}`)
    console.log(obj.itemTotal)
    itemSubtotal.innerText = obj.itemTotal.toFixed(2)
    
    console.log(itemSubtotal)
}

//array of menu items
let menuItems = [
    {
        id: 1,
        type: 'appetizers',
        item: 'salmon dip',
        desc: 'fresh salmon spread and toast',
        imgUrl: 'salmondip.jpeg',
        price: 9.50,
        qty: 0
    },
    {
        id: 2,
        type: 'appetizers',
        item: 'shrimp and chicken platter',
        desc: 'fried shrimp and fried chicken tender platter',
        imgUrl: 'shrimpnckn.jpg',
        price: 10.50,
        qty: 0        
    },
    {
        id: 3,
        type: 'appetizers',
        item: 'spinach dip',
        desc: 'creamy spinach and artichoke dip topped with parmesian accompanied by a side of pita chips',
        imgUrl: 'spinachdip.jpg',
        price: 9.50,
        qty: 0    
    },
    {
        id: 4,
        type: 'appetizers',
        item: 'crab cakes',
        desc: '4 crab cakes and dipping sauce',
        imgUrl: 'crabcakes.jpg',
        price: 11.50,
        qty: 0     
    },
    // {
    //     id: 5,
    //     type: 'appetizer',
    //     item: 'loaded nachos',
    //     desc: 'fresh tortillas chips topped with cheese, lettuce, ground beef, and salsa',
    //     imgUrl: 'loadednachos.jpg',
    //     price: 12.99,
    //     qty: 0
    // },
    // {
    //     id: 6,
    //     type: 'appetizer',
    //     item: 'ahi tuna',
    //     desc: 'fresh medium rare thin sliced ahi tuna and carrots',
    //     imgUrl: 'ahituna.jpg',
    //     price: 9.99,
    //     qty: 0
    // },
    {
        id: 7,
        type: 'entrees',
        item: 'salmon',
        desc: 'perfectly grilled salmon with two side items',
        imgUrl: 'salmon.jpg',
        price: 24.50,
        qty: 0
    },
    {
        id: 8,
        type: 'entrees',
        item: 'grilled chicken cesear salad',
        desc: 'romaine lettuce and croutons tossed in cesear dressing topped with juicy grilled chicken',
        imgUrl: 'grilledcesearsalad.jpg',
        price: 16.50,
        qty: 0
    },
    {
        id: 9,
        type: 'entrees',
        item: '16oz Ribeye',
        desc: '16 oz Ribeye cooked on an open flammed grill with two sides',
        imgUrl: 'ribeye.jpg',
        price: 27.50,
        qty: 0
    },
    {
        id: 10,
        type: 'entrees',
        item: 'steak and shrimp pasta',
        desc: '6oz sirloin steak sliced accompanied by 6 grilled shrimp on a bed of alfredo pasta',
        imgUrl: 'steakandshrimppasta.jpg',
        price: 23.50,
        qty: 0
    },
    {
        id: 11,
        type: 'drinks',
        item: 'peach belini',
        desc: 'frozen peach flavored beverage',
        imgUrl: 'peachb.jpg',
        price: 7.50,
        qty: 0
    },
    {
        id: 12,
        type: 'drinks',
        item: 'sparkling water',
        desc: '',
        imgUrl: 'sparklingwater.jpg',
        price: 3.50,
        qty: 0
    },
    {
        id: 13,
        type: 'drinks',
        item: 'lemonade',
        desc: 'Homemade country style lemonade balanced between tart and sweet. Try our other flavors: mango pineapple, strawberry, peach.',
        imgUrl: 'lemonade.jpg',
        price: 4.50,
        qty: 0
    },
    {
        id: 14,
        type: 'drinks',
        item: 'iced tea',
        desc: 'Freshly brewed southern sweet tea.',
        imgUrl: 'tea.jpg',
        price: 4.50,
        qty: 0
    },
    {
        id: 15,
        type: 'desserts',
        item: 'lemon pound cake',
        desc: 'A slice of our rich & moist lemon pound cake topped with a zesty lemon glaze.',
        imgUrl: 'lemonpoundcake.jpg',
        price: 7.50,
        qty: 0
    },
    {
        id: 16,
        type: 'desserts',
        item: 'creme brule',
        desc: 'A bed of mixed berries on top of our rich custard based creme brule with a caramalized candy top.',
        imgUrl: 'cremebrule.jpg',
        price: 8.50,
        qty: 0
    },
    {
        id: 17,
        type: 'desserts',
        item: 'beignets',
        desc: 'French style, fried doughnut squares',
        imgUrl: 'beignets.jpg',
        price: 9.50,
        qty: 0
    },
    {
        id: 18,
        type: 'desserts',
        item: 'cheesecake',
        desc: 'A slice of our deliciously creamy cheesecake bites with your choice of topping: strawberry, caramel, pineapple, chocolate raspberry, keylime, mixed berry.',
        imgUrl: 'cheesecake.jpg',
        price: 10.50,
        qty: 0
    }
]
//make menu divs
menuDivs.forEach(div => {
    const menuSubheading = document.createElement('h3')
    menuSubheading.classList.add('menu-subheading', 'text-capitalize')

    const row = document.createElement('div')
    row.classList.add('row')
    
    div.appendChild(menuSubheading)
    div.appendChild(row)
})

for (let i = 0; i < menuType.length; i++) {
        menuDivs[i].children[0].innerText = menuType[i]
        menuDivs[i].children[1].setAttribute("id", `${menuType[i]}Row`)
}
//load the menu items
//grab the appRow
const appRow = document.getElementById('appetizersRow')
const entreesRow = document.getElementById('entreesRow')
const drinksRow = document.getElementById('drinksRow')
const dessertsRow = document.getElementById('dessertsRow')

menuItems.forEach(item => {
    const column = document.createElement('div')
    column.classList.add('col-md-3', 'text-capitalize')
    const card = document.createElement('div')
    card.classList.add('card', 'h-100')
    card.innerHTML = `
    <img src="images/${item.imgUrl}" alt="${item.desc}" class="img-fluid menu-image card-image-top" />
    <div class="card-body">
        <h4 class="card-title">${item.item}</h4>
        <p class="card-text">${item.desc}</p>
    </div>
    <footer class="card-footer">
        <p class="card-text item-price">${item.price.toFixed(2)}</p>
        <div class="buttons-div d-flex justify-content-around">
            
            <div class="qty-div">
                <button 
                    class="btn btn-primary btn-subtract" 
                    id="btnSubtract${item.id}"
                    data-id="${item.id}"
                    data-qty="${item.qty}">
                    - 
                </button>
                <span class="quantity" id="quantity${item.id}">${item.qty}</span>
                <button 
                    class="btn btn-primary btn-add" 
                    id="btnAdd${item.id}"
                    data-id="${item.id}"
                    data-qty="${item.qty}">
                    + 
                </button>
            </div>
            <button 
                class="btn cart-btn" 
                id="Btn${item.id}" 
                data-id="${item.id}"
                data-price="${item.price}" 
                data-qty="${item.qty}"
                data-item="${item.item}">
                Add to Cart
            </button>
        </div>
    </footer>
    `
    
    column.appendChild(card);
    //appRow.appendChild(column)

    //switch (menuItems.type)
    switch(item.type) {
        case 'appetizers':
            appRow.appendChild(column)
            break;
        case 'entrees':
            entreesRow.appendChild(column)
            break;
        case 'drinks':
            drinksRow.appendChild(column)
            break;
        case 'desserts': 
            dessertsRow.appendChild(column)
            break;
        default:
            console.log('Error, menu type not listed')
            break;

    }
})

const cartButtons = document.querySelectorAll('.cart-btn')

cartButtons.forEach(button => {

    const price = parseFloat(button.getAttribute('data-price'))
    let qty = parseFloat(button.getAttribute('data-qty'))
    const item = button.getAttribute('data-item')
    const id = parseFloat(button.getAttribute('data-id'))
    button.addEventListener('click', ()=>{
        qty+=1
        addItems(price, qty, item, id)
    })
})

const addItems=(price, qty, item, id)=>{
    
    let itemObj = {
        id,
        item,
        qty,
        price,
        itemTotal: qty * price
    }

    if (itemObj.qty == 1) {
            receiptArray = [...receiptArray, itemObj]
            makeReceipt(itemObj, receipt)
            console.log(itemObj)
        } else {
            for (let i = 0; i < receiptArray.length; i++) {
                if (receiptArray[i].id === id) {
                    receiptArray[i].qty = itemObj.qty++
                    receiptArray[i].itemTotal = receiptArray[i].qty * price
                    updateReceipt(receiptArray[i], receiptArray[i].qty, receiptArray[i].itemTotal)
                }
            }
        }
    subtotal+=price
    cartSubtotal.innerText = subtotal.toFixed(2)
    console.log(receiptArray);   
}

const btnSubtract = document.querySelectorAll('.btn-subtract')
const btnAdd = document.querySelectorAll('.btn-add')
const salmonDip = menuItems[0]


btnSubtract.forEach(button => {
    button.addEventListener('click', ()=> {
        
        const btnQty = parseFloat(button.getAttribute('data-qty'))
        const btnId = parseFloat(button.getAttribute('data-id'))
        const spanQty = document.getElementById(`quantity${btnId}`)
        
        for (let i = 0; i < menuItems.length; i++) {
            if(menuItems[i].id == btnId && menuItems[i].qty > 0) {
                menuItems[i].qty-=1
                spanQty.innerText = menuItems[i].qty
            }

            if (menuItems[i].id == 1) {
                console.log(salmonDip.qty);
            }
        }

        
    })
})

btnAdd.forEach(button => {
    button.addEventListener('click', ()=> {

        console.log(button);
        const btnQty = parseFloat(button.getAttribute('data-qty'))
        const btnId = parseFloat(button.getAttribute('data-id'))
        const spanQty = document.getElementById(`quantity${btnId}`)

        for (let i = 0; i < menuItems.length; i++) {
            if(menuItems[i].id == btnId && menuItems[i].qty < 20 && cartButtons[i].dataset.id == btnId) {
                menuItems[i].qty+=1
                cartButtons[i].dataset.qty = menuItems[i].qty
                spanQty.innerText = menuItems[i].qty
            }

            
            if (menuItems[i].id == 1) {
                console.log(salmonDip.qty);
            }
        }
    })
})
// console.log(button)
