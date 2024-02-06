"use strict"
const dropdownMenus = document.querySelectorAll("[data-dropdown]");
const linkFeatures = document.querySelector(".link-features");
const linkCompany = document.querySelector(".link-company");
const events = ["click", "touchstart"];

function handleEvent(event) {
    dropdownMenus.forEach(li => {
        if(li.classList.contains("active"))
            li.classList.remove("active");
        
    });
    this.classList.add("active");
    this.classList.add("active-arrowup");
    this.addEventListener("mouseleave", function() {
        closeDropdownMenu(this);
    })
}

function closeDropdownMenu(li) {
    li.classList.remove("active");
}

dropdownMenus.forEach(li => {
    events.forEach(userEvent => {
        li.addEventListener(userEvent, handleEvent);
    });
})
