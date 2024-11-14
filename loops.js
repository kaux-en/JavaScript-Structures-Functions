let loggedIn = true
let cart = ['Shirts', 'Shoes', 'Bread', 'Cell Phone', 'Candy corn', 'The Pragmatic programmer: Your journey To Mastery, 20th Anniversary Edition (2nd Edition)', 'Tomato']


if (loggedIn) {
    for (i = 0; i < cart.length; i++) {
        console.log("Available items:", cart[i]);
    } 
} else {
    console.log("You will need to log in before you can view the cart.");
}