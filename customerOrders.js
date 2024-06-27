console.log('Customer places an order');

function placeOrder() {
    console.log('Waiter takes the order to the kitchen');

    //kitchen preparing food (async operation)
    setTimeout(() => {
        console.log('Kitchen has prepared the food');
        serveFood();
    }, 3000); // 3 seconds to prepare food
}

function serveFood() {
    console.log('Waiter serves the food to the customer');
}

placeOrder();

console.log('Customer continues chatting with friends');