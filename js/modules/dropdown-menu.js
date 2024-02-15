import outsideClick from "./outsideclick.js";

export default function initDropdownMenu() {
    const dropdownMenus = document.querySelectorAll("[data-dropdown]");
    const events = ["click", "touchstart"];
    
    dropdownMenus.forEach(li => {
        events.forEach(userEvent => {
            li.addEventListener(userEvent, handleEvent);
        });
    });
    
    function handleEvent(event) {
        event.preventDefault();
        this.classList.add("active");
    
        outsideClick(this, events, () => {
            this.classList.remove("active");
        });
    };
}