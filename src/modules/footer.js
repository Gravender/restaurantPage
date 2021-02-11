
function loadFooter(){
    const body = document.querySelector('body');

    const footer = document.createElement('footer');
    const link = document.createElement('a');

    footer.innerText = "Made by:";

    link.setAttribute('href', "https://github.com/Gravender");
    link.innerText = 'Gravender';

    footer.appendChild(link);
    body.appendChild(footer);
}

export {loadFooter}