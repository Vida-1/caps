// this is what we're going to replace with socket.io in lab 12

const { EventEmitter } = require('events');
const chance = require("chance")();

const events = new EventEmitter();

module.exports = { events, chance };