

function loadHome(){
    const content = document.getElementById('content');

    const home = document.createElement('div');
    const headline = document.createElement('p');
    const description = document.createElement('h1');
    
    while (content.firstChild) {
        content.removeChild(content.lastChild);
    }

    home.id = 'home';

    headline.innerText = 'Burgers made with love';
    description.innerText = 'Create your own amazing Burger from scratch!';

    home.appendChild(description);
    home.appendChild(headline);
    content.appendChild(home);
}

export {loadHome}