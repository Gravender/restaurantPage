function loadHeader(){
    const body = document.querySelector('body');
    const head = document.createElement("header");
    const content = document.getElementById('content');
    head.innerHTML =`
    <nav>
        <h2>Good Burger</h2>
        <ul class ="tabs">
            <li data-target = 'Home' class = 'tab active'>Home</li>
            <li data-target = 'Menu' class = 'tab'>Menu</li>
            <li data-target = 'Contact' class = 'tab'>Contact</li>
        </ul>
    </nav>
    `;
    body.insertBefore(head, content);
};
export {loadHeader}