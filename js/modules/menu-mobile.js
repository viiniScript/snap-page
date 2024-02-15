import outsideClick from "./outsideclick.js";

export default function initMenuMobile() {
    const menuButton = document.querySelector('[data-menu="button"]');
    const menuContainer = document.querySelector('[data-menu="container"]')
    const modalSection = document.querySelector('[data-modal]');
    const events = ['click', 'touchstart'];
    
    function openMenu() {
        menuContainer.classList.add('active');
        menuButton.classList.add('active');
        modalSection.classList.add('active');

        outsideClick(menuContainer, events, () =>{
            console.log('outside');
            menuContainer.classList.remove('active');
            menuButton.classList.remove('active');
            modalSection.classList.remove('active');
        })
    }

    menuButton.addEventListener('click', openMenu);
}