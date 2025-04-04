document.addEventListener("DOMContentLoaded", function () {
    const buttons = {
        off1: document.querySelector("#off1"),
        off2: document.querySelector("#off2"),
        off3: document.querySelector("#off3"),
        off4: document.querySelector("#off4")
    };
    
    const popups = document.querySelectorAll(".popup-md");
    const overlay = document.querySelector(".popup-overlayyy");

    // Add click handlers for each button
    Object.keys(buttons).forEach((key, index) => {
        const button = buttons[key];
        if (button && popups[index] && overlay) {
            button.addEventListener("click", function () {
                popups[index].classList.add("active");
            });
        }
    });

    // Close all popups when overlay is clicked
    if (overlay) {
        overlay.addEventListener("click", function () {
            popups.forEach(popup => {
                popup.classList.remove("active");
            });
        });
    }
});
