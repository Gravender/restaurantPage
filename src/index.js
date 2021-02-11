import { loadHome } from './modules/home'
import { loadMenu } from './modules/menu'
import { loadContact } from './modules/contact'
import { loadFooter } from './modules/footer';

const header =  () => {
    const body = document.querySelector('body');
    const head = document.createElement("header");
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
    body.appendChild(head);
};

const tabSelector = () =>{
    const tabs = document.querySelectorAll(".tab");
    tabs.forEach((tab) =>{
        tab.addEventListener('click', () =>{
            const target = tab.dataset.target;
            tabs.forEach((tab) =>{
                tab.classList.remove("active");
            });
            tab.classList.add("active");
            if(target == 'Home')loadHome();
            if(target == 'Menu')loadMenu();
            if(target == 'Contact')loadContact();
        });
    });
};
header();
tabSelector();
loadHome();
loadFooter();