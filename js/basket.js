document.addEventListener('DOMContentLoaded', function () {
    let openShopping = document.querySelector('.shopping');
    let closeShopping = document.querySelector('.closeShopping');
    let list = document.querySelector('.dropdown-menu');
    let listCard = document.querySelector('.listCard');
    let body = document.querySelector('body');
    let total = document.querySelector('.total');
    let quantity = document.querySelector('.quantity');

    openShopping.addEventListener('click', () => {
        body.classList.add('active');
    });

    closeShopping.addEventListener('click', () => {
        body.classList.remove('active');
    });

    let shoppingCart = [];

    let products = [
        {
            id: 1,
            name: 'PRODUCT NAME 1',
            dropdown: 'Dropdown content 1',
            price: 10.99,
        },
        {
            id: 2,
            name: 'PRODUCT NAME 2',
            dropdown: 'Dropdown content 2',
            price: 15.99,
        },
        // Add more product objects with id, name, dropdown, and price properties
    ];

    let listCards = [];

    function initApp() {
        products.forEach((product, key) => {
            let newDiv = document.createElement('div');
            newDiv.classList.add('item');
            newDiv.innerHTML = `
                <div class="title">${product.name}</div>
                <div class="dropdown">${product.dropdown}</div>
                <button onclick="addToCard(${key})">Add To Card</button>`;
            list.appendChild(newDiv);
        });
    }

    initApp();

    function addToCart(key) {
        if (shoppingCart.find(item => item.id === products[key].id)) {
            // If the product is already in the cart, increase its quantity
            shoppingCart.forEach(item => {
                if (item.id === products[key].id) {
                    item.quantity++;
                }
            });
        } else {
            // If the product is not in the cart, add it with quantity 1
            const product = { ...products[key], quantity: 1 };
            shoppingCart.push(product);
        }
        reloadCart();
    }
    

    function reloadCard() {
        listCard.innerHTML = '';
        let count = 0;
        let totalPrice = 0;
        listCards.forEach((product, key) => {
            totalPrice += product.price * product.quantity;
            count += product.quantity;
            if (product != null) {
                let newDiv = document.createElement('li');
                newDiv.innerHTML = `
                    <div>${product.name}</div>
                    <div>${product.dropdown}</div> <!-- Display dropdown content -->
                    <div>$${product.price.toFixed(2)}</div>
                    <div>
                        <button onclick="changeQuantity(${key}, ${product.quantity - 1})">-</button>
                        <span class="count">${product.quantity}</span>
                        <button onclick="changeQuantity(${key}, ${product.quantity + 1})">+</button>
                    </div>`;
                listCard.appendChild(newDiv);
            }
        });
        total.innerText = `$${totalPrice.toFixed(2)}`;
        quantity.innerText = count;
    }

    function changeQuantity(key, quantity) {
        if (quantity == 0) {
            delete listCards[key];
        } else {
            listCards[key].quantity = quantity;
        }
        reloadCard();
    }
});
