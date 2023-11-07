const EventEmitter = require('events');

class CustomEventEmitter extends EventEmitter {}

const customEmitter = new CustomEventEmitter();

customEmitter.on('userLoggedIn', (user) => {
  console.log(`${new Date().toLocaleString()}: ${user} logged in`);
});

customEmitter.on('userLoggedOut', (user) => {
  console.log(`${new Date().toLocaleString()}: ${user} logged out`);
});

module.exports = customEmitter;
