export function welcomeComponent(el) {
    const welcomeEl = document.createElement("div");
    welcomeEl.classList.add("Welcome");

    welcomeEl.innerHTML = `
        <img src="./images/logo.svg" id="scrollDown" alt="Logo Megatones">
    `;

    el.appendChild(welcomeEl);


    (function() {

        var btnScrollDown = document.getElementById('scrollDown');
        var containerEl = document.querySelector('.Welcome');

        function scrollDown() {
            var containerHeightEl = containerEl.clientHeight;
            window.scroll({
                top: containerHeightEl,
                behavior: 'smooth'
            });
        }
        btnScrollDown.addEventListener('click', scrollDown);
    })();

}