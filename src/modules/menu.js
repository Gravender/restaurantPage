
const menuItem = (src, alt, title, price, description) =>{
    const item = document.createElement('div');

    const itemImg = document.createElement('img');
    const itemTitle = document.createElement('h1');
    const itemPrice = document.createElement('h2');
    const itemDescription = document.createElement('p');

    item.classList.add('menuItem');

    itemImg.setAttribute('src', src);
    itemImg.setAttribute('alt', alt);

    itemTitle.innerText = title;
    itemPrice.innerText = `$${price}`;
    itemDescription.innerText = description;

    item.appendChild(itemImg);
    item.appendChild(itemTitle);
    item.appendChild(itemPrice);
    item.appendChild(itemDescription);

    return item;
};


function loadMenu(){
    const content = document.getElementById('content');
    while (content.firstChild) {
        content.removeChild(content.lastChild);
    }

    const menuDiv = document.createElement('div');
    menuDiv.id = 'menu';

    const menu = [
        menuItem(
            './img/cheeseBurger.jpg',
            'Cheese Burger',
            'Cheese Burger',
            '5.00',
            'Burger with cheese'
        ),
        menuItem(
            './img/veggieBurger.jpg',
            'Veggie Burger',
            'Veggie Burger',
            '4.00',
            'Burger made entirely out of veggies'
        ),
        menuItem(
            './img/californiaBurger.jpg',
            'California Burger',
            'California Burger',
            '7.00',
            'Burger with Avocado'
        ),
        menuItem(
            './img/tacoBurger.jpg',
            'Taco Burger',
            'Taco Burger',
            '8.00',
            'Burger with Pico de Gailo'
        )
    ]
    menu.forEach((item) =>{
        menuDiv.appendChild(item);
    });
    content.appendChild(menuDiv);
}

export {loadMenu}