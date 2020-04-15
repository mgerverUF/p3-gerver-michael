import { headerText } from './modules/header';
import {footerText} from './modules/footer';

class App {

    constructor() {
        this.renderTemplate();
    }

    renderTemplate() {
        const template = `
        <h1>${headerText.pageTitle}</h1>
        <p>${headerText.pageDescription}</p>
        <h3>${footerText.footerLabel}</h3>
        <h3>${footerText.lastUpdate}</h3>
        `;


        document.body.innerHTML = template;
    }
}

new App;