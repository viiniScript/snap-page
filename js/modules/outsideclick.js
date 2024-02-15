export default function outsideClick(element, events, callback) {
    const html = document.documentElement;
    const outsideAttribute = "data-outside";

    if(!element.hasAttribute(outsideAttribute)) {
        events.forEach(userEvent => {
            html.addEventListener(userEvent, handleOutsideClick);
        });

        element.setAttribute(outsideAttribute, "");
    };
    
    function handleOutsideClick(event) {
        if(!element.contains(event.target)) {
            callback();
            events.forEach(userEvent => {
                html.removeEventListener(userEvent, handleOutsideClick);
            })
            element.removeAttribute(outsideAttribute);
        };
    };
};