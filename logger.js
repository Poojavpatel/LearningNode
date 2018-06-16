/*jshint esversion: 6 */
const EventEmmiter = require('events');

class Logger extends EventEmmiter{
    //var s=998;

    this.emit('messageLogged',{message:"An message logging event took place"});

    log(message){
        console.log(message);
    }
}

module.exports = Logger;