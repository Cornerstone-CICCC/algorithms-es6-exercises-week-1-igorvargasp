/*
Write an anonymous function expression that stores a function in a variable called "laugh" and outputs the number of "ha"s that you pass in as an argument.

laugh(3);
Returns: hahaha!
*/


const laugh = (ha) => {
    let storedHas = "";
    for (let i = 0; i < ha; i++) {
    storedHas += "ha";
    }
    console.log(storedHas + "!");
};

laugh(3);