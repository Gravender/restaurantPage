
function loadFooter(){
    const content = document.getElementById('content');

    const footer = document.createElement('footer');
    const link = document.createElement('a');

    footer.innerText = "Made by:";

    link.setAttribute('href', "https://github.com/Gravender");
    link.innerText = 'Gravender';

    footer.appendChild(link);
    content.appendChild(footer);
}

export {loadFooter}