import { welcomeComponent } from './components/welcome/welcome.js';
import { footerComponent } from './components/footer/footer.js';

function main() {
    welcomeComponent(document.querySelector(".App-welcome"));
    footerComponent(document.querySelector(".App-footer"));
}

main();