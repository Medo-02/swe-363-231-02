//Implement the custom emitter funcitionality 
const customEmitter = require('./event.js');

//get random number from 100ms to 2000ms
function getRandNumber(){
    return (Math.random() * (2000 - 100) + 100);
}
//Login simulation proccess
function simulateLogin(user) {
  setTimeout(() => {
    customEmitter.emit('userLoggedIn', user);
    simulateLogout(user);
  }, getRandNumber());
}
//Logout simulation proccess
function simulateLogout(user) {
  setTimeout(() => {
    customEmitter.emit('userLoggedOut', user);
  }, getRandNumber());
}

//simulated users
const users = ['Ahmad', 'Ali', 'Jasim'];
//Simulate each user
users.forEach((user) => {
  simulateLogin(user);
});
console.log('Simulation started...');
