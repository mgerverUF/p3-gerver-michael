import { headerText } from './modules/header';

class App {

    constructor() {
        this.renderTemplate();
    }

    renderTemplate() {
        const template = `
        <h1>${headerText.pageTitle}</h1>
        <p>${headerText.pageDescription}</p>
        `;

        document.body.innerHTML = template;
    }
}

new App;