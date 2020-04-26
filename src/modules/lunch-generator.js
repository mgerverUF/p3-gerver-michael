class lunchGenerator {
    constructor(lunchArray) {
        this.lunchArray = lunchArray = [
            {
                lunchName: 'Pizza',
                lunchPic: '././images/pizza.jpg'
            },
        
            {
                lunchName: 'Noodle Bowl',
                lunchPic: '././images/noodlebowl.jpg'
            },
        
            {
                lunchName: 'Burrito',
                lunchPic: '././images/burrito.jpg'
            },
        
            {
                lunchName: 'Chicken and Fries',
                lunchPic: '././images/chicken.jpg'
            },
        
            {
                lunchName: 'Burger and Fries',
                lunchPic: '././images/burger.jpg'
            },
        
            {
                lunchName: 'Crab Cakes',
                lunchPic: '././images/crabcakes.jpg'
            },
        
            {
                lunchName: 'Yogurt Parfait',
                lunchPic: '././images/yogurt.jpg'
            },
        
            {
                lunchName: 'Grilled Chicken',
                lunchPic: '././images/grilledchicken.jpg'
            },
        
            {
                lunchName: 'Boiled Egg',
                lunchPic: '././images/egg.jpg'
            },
        
            {
                lunchName: 'Banana Smoothie',
                lunchPic: '././images/bananasmoothie.jpg'
            }
        ]
    }

    randomizeLunches() {
        // Function to shuffle elements within the array
        for (let i = this.lunchArray.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * i)
            let k = this.lunchArray[i]
            this.lunchArray[i] = this.lunchArray[j]
            this.lunchArray[j] = k                          
        }; 
    };

        showResult() {
            window.onload = () => {
                const btn = document.getElementById('lunch-button');
                btn.addEventListener('click', () => {
                    this.randomizeLunches();    
                    document.getElementById('result-pic').setAttribute('src',this.lunchArray[0].lunchPic);
                    document.getElementById('result-pic').classList.remove('on-arrival');
                    document.getElementById('result').innerHTML = this.lunchArray[0].lunchName;
                    document.getElementById('result').classList.remove('on-arrival');
                }       
            )};
        }  
}

export const lunchOption = new lunchGenerator(); 