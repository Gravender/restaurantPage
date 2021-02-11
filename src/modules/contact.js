
function loadContact(){
    const content = document.getElementById('content');

    const contact = document.createElement('div');
    const headline = document.createElement('h1');
    const address = document.createElement('p');
    const hours = document.createElement('p');

    while (content.firstChild) {
        content.removeChild(content.lastChild);
    }

    contact.id = 'contact';

    headline.innerText = 'Contact us';
    address.innerText = '2262 Blackwell Street Anchorage, AK 99504 ';
    hours.innerText = 'Mon-Sun 1am-2am';

    contact.appendChild(headline);
    contact.appendChild(address);
    contact.appendChild(hours);
    content.appendChild(contact);
}

export {loadContact}