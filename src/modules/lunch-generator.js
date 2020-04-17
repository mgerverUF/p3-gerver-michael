class lunchGenerator {
    constructor(foodItem) {
        this.foodItem = foodItem;
    }

const btn = document.getElementById('lunch-button');
btn.addEventListener('click', () => {

    // Lunch array
    const lunchArray = [
        {
            lunchName: 'Pizza',
            lunchPic: 'images/pizza.jpg'
        },
    
        {
            lunchName: 'Noodle Bowl',
            lunchPic: 'images/noodlebowl.jpg'
        },
    
        {
            lunchName: 'Burrito',
            lunchPic: 'images/burrito.jpg'
        },
    
        {
            lunchName: 'Chicken and Fries',
            lunchPic: 'images/chicken.jpg'
        },
    
        {
            lunchName: 'Burger and Fries',
            lunchPic: 'images/burger.jpg'
        },
    
        {
            lunchName: 'Crab Cakes',
            lunchPic: 'images/crabcakes.jpg'
        },
    
        {
            lunchName: 'Yogurt Parfait',
            lunchPic: 'images/yogurt.jpg'
        },
    
        {
            lunchName: 'Grilled Chicken',
            lunchPic: 'images/grilledchicken.jpg'
        },
    
        {
            lunchName: 'Boiled Egg',
            lunchPic: 'images/egg.jpg'
        },
    
        {
            lunchName: 'Banana Smoothie',
            lunchPic: 'images/bananasmoothie.jpg'
        }
    ]

    // Function to shuffle elements within the array
    let shuffleNum = (i, j, k) => {
        for (i = lunchArray.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * i)
            k = lunchArray[i]
            lunchArray[i] = lunchArray[j]
            lunchArray[j] = k
            // document.getElementById('result').innerHTML = lunchArray[0];                            
        };
    }; 

    // Feeds lunch array to shuffleNum function
    shuffleNum(lunchArray);
  });
}

export const lunchOption = new lunchGenerator (lunchArray[0]);