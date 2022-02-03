// problem solving

// 1.write a simple function that takes name as a perameter and then return a custom message.

// function messageGenaretor (name) {
//     var message = 'Hello ' + name + ' welcome to programmig hero';
//     return message;
// }

// console.log(messageGenaretor('tamim iqbal'));


// problem solving 2

// 2. write a function for a food delivery service that sells 'pizza' only.Each pizza costs 10$.This function takes the food name & quantity as perameter and then return a custom message with order info.This function should be smart enough to handle wrong perameter.

// function pizzaPanda (foodName, quantity) {

//     if (foodName.toLowerCase() != 'pizza'){
//         return 'sorry with sell pizza only';
//     }
//     if (quantity >= 10) {
//         return 'sorry only 10 pizza left';
//     }

//     var price = 10 * quantity;
//     var message = 'Order Successfull!, Order info: ' + foodName + ', Price:' + price + '$';
//     return message;
// }

// console.log(pizzaPanda('Pizza', 3));

//////////////////////////////////////////////////////////////////// again problem solving 2..................

function applePanda (fruitName, quantity) {
    if (fruitName != 'apple') {
        return 'sorry with sell apple only'
    }
    else if (quantity < 0) {
        return 'sorry, use positive number'
    }
    else if (quantity > 10) {
         return 'sorry 10 apple left'   
   }

    var price = 10 * quantity;
    var message = 'order successfull, order info: ' + fruitName + ' Price:' + price + '$';
    return message;
}

// console.log(applePanda('apple', 10));


// // problem solving 3....
// // object

// var person = {
//     name: 'Afzal',
//     age: 25,
//     height: '5 feet 7 inch',
//     weight: '60kg',
//     hairColor: 'black',
//     male: true,
//     cardNumber: [2344345, 674387467,8793457895,5348792879,5389738754]
// }

// // console.log(person.cardNumber);


// var person1 = 'Rakib';
// var hisAge = 56;

// var hisDetails = `his name is ${person1}. he is ${hisAge} years old`;

// console.log(hisDetails);



// /////////////////////////////////////////////////////////////////////////////////

// var color = 'red';

// switch (color) {
//     case 'blue':
//         console.log('color is green')
//         break;
//     case 'black':
//         console.log('color is black');
//         break;
//     case 'yellow':
//         console.log('color is yellow');
//         break;
//     case 'red':
//         console.log('color is red');
//         break;
//     default:
//         console.log('I dont know');
// }

function printer (numberLimit) {
    for (var i = 1; i <= numberLimit; i++) {
        console.log(i);
    }
}
printer (10);

// problem 3 again sove

function  orangePanda (fruitName, quantity) {
    if (fruitName != 'orange') {
        return 'sorry with sell only orange'
    }
    else if (quantity > 10) {
        return 'sorry with sell only 10 orange'
    }
    var price = 134 * quantity;
    var message = 'Order Successfull, Order info: '+ fruitName + ' Price:' + price + '$';
    return message;
}

console.log(orangePanda('orange', 10));