/*jshint esversion: 6 */
const EventEmmiter = require('events');

var s=998;

class Logger extends EventEmmiter{
    
    log(message){
        console.log(message);

        //Raise an event
        this.emit('messageLogged',{message:"An message logging event took place"});
    }
}

module.exports = Logger;