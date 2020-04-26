// Create a class called Footer with two properties
class Footer {
    constructor(footerLabel, lastUpdate) {
        this.footerLabel = footerLabel;
        this.lastUpdate = lastUpdate;
    }
}    

// Create a variable that's a new instance of Footer
export const footerText = new Footer('Random Lunch Generator','Last updated 04.26.2020');