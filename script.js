let openShopping = document.querySelector('.shopping');
let OpenShopping = document.querySelector('.order-now-button')
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');


openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'HUMMUS & CELERY &#127807',
        image: 'hummus2.png',
        image2: 'hummus2-removebg-preview.png',
        price: 3.99,
        cal: 275,
        des: 'Smooth, creamy chickpea dip served with crispy celery sticks.'
    },
    {
        id: 2,
        name: 'BABA GANOUSH & PITA BREAD',
        image: 'babagan.png',
        image2: 'babagan-removebg-preview (1).png',
        price: 4.49,
        cal: 350,
        des: 'A classic pairing of rich, smoky eggplant dip with warm pita bread.'
    },
    {
        id: 3,
        name: 'GREEK SALAD',
        image: 'saladfinalpic.png',
        image2: 'saladfinalpic-removebg-preview.png',
        price: 5.49,
        cal: 100,
        des: 'A refreshing salad featuring crisp cucumbers, juicy tomatoes, feta, and olives, all tossed in a light olive oil dressing.'
    },
    {
        id: 4,
        name: 'FALAFEL LOADED FRIES',
        image: 'loadedfries.png',
        image2: 'loadedfries-removebg-preview.png',
        price: 9.99,
        cal: 750,
        des: 'Hot, crispy fries topped with falafel bites, crumbled feta (optional) diced tomato, onions, siracha, and garlic sauce.'
    },
    {
        id: 5,
        name: 'SHAKSHUKA 🌿',
        image: 'shakshuka.png',
        image2: 'shakshuka-removebg-preview.png',
        price: 11.99,
        cal: 575,
        des: 'A rich tomato stew with spices, served with crusty bread.'
    },
    {
        id: 6,
        name: 'FALAFEL PLATTER &#127807',
        image: 'falplatter.png',
        image2: 'falplatter-removebg-preview.png',
        price: 13.29,
        cal: 950,
        des: 'Crispy, golden-brown falafel served with hummus, pickled vegetables, warm pita, and lime.'
    },
    {
        id: 7,
        name: 'FALAFEL WRAP 🌿',
        image: 'falafelwrapfinal.png',
        image2: 'falafelwrapfinal-removebg-preview (1).png',
        price: 9.49,
        cal: 450,
        des: 'A warm pita filled with mouthwatering falafel, fresh vegetables, tangy pickles, and tahini.'
    },
    {
        id: 8,
        name: 'COCONUT CHICKPEA STEW 🌿',
        image: 'chickpeastew.png',
        image2: 'chickpeastew-removebg-preview.png',
        price: 15.99,
        cal: 600,
        des: 'A hot, comforting stew with chickpeas, grated coconut, and seasoned with herbs and spices. Garnished with parsely and grated coconut.'
    },
    {
        id: 9,
        name: 'BAKLAVA 🌿',
        image: 'baklavafinal.png',
        image2: 'baklavafinal-removebg-preview (1).png',
        price: 5.49,
        cal: 550,
        des: 'Layers of flaky phyllo pastry filled with spiced nuts and sweetened with a honey glaze.'
    },
    {
        id: 10,
        name: 'KNAFEH 🌿',
        image: 'knafehfinal.png',
        image2: 'knafehfinal-removebg-preview.png',
        price: 4.49,
        cal: 475,
        des: 'A desert made with shredded phyllo dough, soft cheese, and syrup, topped with pistachios.'
    },
    {
        id: 11,
        name: 'CLASSIC FALOODA',
        image: '13.png',
        image2: '13-removebg-preview (1).png',
        price: 4.99,
        cal: 585,
        des: 'A lush and refreshing dessert drink, featuring vermicelli, rose syrup, and creamy ice cream, all layered into the perfect cold treat. Comes in Mango, Pistachio, and Rose (shown).'
    },
    {
        id: 12,
        name: 'PISTACHIO ICE CREAM',
        image: 'pistachioicecream.png',
        image2: 'pistachioicecream-removebg-preview.png',
        price: 2.99,
        cal: 390,
        des: 'Rich and creamy pistachio ice cream with the perfect earthy flavor.'
    },
    {
        id: 13,
        name: 'LEMONADE 🌿',
        image: '15.png',
        image2: '15-removebg-preview.png',
        price: 1.49,
        cal: 150,
        des: 'Made from freshly squeezed lemons, sugar, and water for a refreshing compliment to any meal.'
    },
    {
        id: 14,
        name: 'SUGARCANE JUICE 🌿',
        image: '14.png',
        image2: '14-removebg-preview.png',
        price: 1.99,
        cal: 75,
        des: 'A sweet, refreshing drink pressed from fresh sugarcane.'
    },
    {
        id: 15,
        name: 'HOT COFFEE',
        image: '16.png',
        image2: '16-removebg-preview.png',
        price: 1.49,
        cal: 165,
        des: 'Rich, aromatic brew made from freshly ground beans, perfect for any time of day.'
    },






];
let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <div class="shopping">
                <div>
                    <div class="app-button">
                        <img class="app-img" src="menu-items/${value.image}" alt="appetizer image unavailable">
                    </div>
                </div>
                <h1 class="app-title">${value.name}</h1>
                <p class="calsandprice">&#36;${value.price} &#8226; ${value.cal} Cal.</p>
                <p class="app-desc">${value.des}</p>
                <button onclick="addToCard(${key})" class="order-now-button">Order Now</button>
            </div>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="cart-items/${value.image2}"/></div>
                <div>${value.name}</div>
                <div>$${value.price.toLocaleString()}</div>
                <div>
                    <button class="quantbutton" onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button class="quantbutton" onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = `$` + totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}











