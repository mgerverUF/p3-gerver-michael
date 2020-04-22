import { headerText } from './modules/header';
import { footerText } from './modules/footer';
import { lunchOption } from './modules/lunch-generator';
import './main.css';

class App {

    constructor() {
        this.renderTemplate();
        this.showResult();
        }

    renderTemplate() {
        const template = `
        <h1>${headerText.pageTitle}</h1>
        <p>${headerText.pageDescription}</p>
        <button id="lunch-button">Generate New Lunch</button>
        <h3 class="result">${lunchOption.showResult()}</h3>
        <h4>${footerText.footerLabel}</h4>
        <h4>${footerText.lastUpdate}</h4>
        `;

        document.body.innerHTML = template;
    }
}

new App;