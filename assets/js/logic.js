// /js/logic.js
// /js/logic.js
document.addEventListener("DOMContentLoaded", function() {
    const modeToggleBtn = document.querySelector('button.toggle-mode');

    modeToggleBtn.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
    });
});
