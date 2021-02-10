
function loadContact(){
    const content = document.getElementById('content');

    const img = document.createElement('img');
    const headline = document.createElement('h1');
    const description = document.createElement('p');

    img.setAttribute('src', "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Cheeseburger.jpg/1200px-Cheeseburger.jpg");
    img.setAttribute('alt', "Cheese Burger");

    headline.innerText = 'Made with love';
    description.innerText = 'This is the most amazing burger place ever made.';

    content.appendChild(img);
    content.appendChild(headline);
    content.appendChild(description);
}

export {loadContact}