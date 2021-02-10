import { loadHome } from './modules/home'
import { loadMenu } from './modules/menu'
import { loadContact } from './modules/contact'
import { loadFooter } from './modules/footer';

const header =  () => {
    const content = document.getElementById('content');
    const head = document.createElement("header");
    head.innerHTML =`
    <nav>
        <h2>Good Burger</h2>
        <ul class ="tabs">
            <li data-target = '#home' class = 'tab active'>Home</li>
            <li data-target = '#menu' class = 'tab'>Menu</li>
            <li data-target = '#contact' class = 'tab'>Contact</li>
        </ul>
    </nav>
    `;
    content.appendChild(head);
};
header();
loadHome();
loadFooter();