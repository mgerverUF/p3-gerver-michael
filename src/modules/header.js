// Create a class called Header with two properties
class Header {
    constructor(pageTitle, pageDescription) {
        this.pageTitle = pageTitle;
        this.pageDescription = pageDescription;
    }
}    

// Create a variable that's a new instance of Header
const headerText = new Header('What\'s For Lunch?','Can\'t decide what to eat? Use our random food generator for a great lunchtime suggestion.');

const template = `
    <header>
        <h1>${headerText.pageTitle}</h1>
        <p>${headerText.pageDescription}</p>
    </header>
`;

document.body.innerHTML = template;

