import { headerText } from './modules/header';
import { footerText } from './modules/footer';
import { lunchOption } from './modules/lunch-generator';
import './main.css';

class App {

    constructor() {
        this.renderTemplate();
        lunchOption.showResult();
        }

    renderTemplate() {
        const template = `
        <section class="content">
        <h1>${headerText.pageTitle}</h1>
        <p>${headerText.pageDescription}</p>
        <button id="lunch-button">GENERATE</button>
        <img id="result-pic" class="on-arrival" src=${lunchOption.lunchArray[0].lunchPic} />
        <h3 id="result" class="on-arrival">${lunchOption.showResult()}</h3>
        </section>
        <footer>
        <h4 class="footer-left">${footerText.footerLabel}</h4>
        <h4 class="footer-right">${footerText.lastUpdate}</h4>
        </footer>
        `;

        document.body.innerHTML = template;
    }
}

new App;