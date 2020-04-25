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
        <h1>${headerText.pageTitle}</h1>
        <p>${headerText.pageDescription}</p>
        <button id="lunch-button">Generate New Lunch</button>
        <img id="result-pic" src="${lunchOption.lunchArray[0].lunchPic}" />
        <h3 id="result">${lunchOption.showResult()}</h3>
        <h4>${footerText.footerLabel}</h4>
        <h4>${footerText.lastUpdate}</h4>
        `;

        document.body.innerHTML = template;
    }
}

new App;