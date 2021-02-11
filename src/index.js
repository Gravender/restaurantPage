import { loadHome } from './modules/home'
import { loadMenu } from './modules/menu'
import { loadContact } from './modules/contact'
import { loadFooter } from './modules/footer';
import { loadHeader } from './modules/header';

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
loadHeader();
loadFooter();
tabSelector();
loadHome();