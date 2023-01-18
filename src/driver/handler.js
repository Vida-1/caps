const { events, chance } = require('../eventPool');

function deliver(orderId) {
  console.log("Driver finished delivery of orderId: ", orderId);
  events.emit("delivered orderID: ", orderId);
}

function handlePickup(event) {
  console.log("Driver recieved a pickup event!", event);
  setTimeout(
    () => deliver(event.orderId),
    chance.integer({ min: 500, max: 1000 })
  );
}

function startDriver() {
  console.log("Driver ready!");

  events.on('pickup', handlePickup);
}

module.exports = { startDriver };