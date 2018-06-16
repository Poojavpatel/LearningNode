/*jshint esversion: 6 */
const Logger = require('./logger.js');
const path = require('path');
const os = require('os');
const fs = require('fs');
const EventEmmiter = require('events');

//listening for message logged events
//const emmiter = new EventEmmiter();
const logger = new Logger();
logger.on('messageLogged',(event) => {
    console.log("Listner is active");
    console.log(event.message);
});

//loading a module
logger.log("Yay your first module works and s is " + logger.s);

// Path module
var pathObj = path.parse(__filename);
console.log(pathObj);

//os module
console.log(`Free memory on pc is : ${os.freemem()}`);
console.log(`uptime of pc is : ${os.uptime()}`);

//file system module
console.log(`read dir sync data is :  ${fs.readdirSync('./')}`);

//event emmiter
// const emmiter = new EventEmmiter();
// emmiter.on('messageLogged',(event) => {
//     console.log("Listner is active");
//     console.log(event.message);
// });
// emmiter.emit('messageLogged',{message:"A message log event took place"});













