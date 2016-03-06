'use strict';

const _ = require('lodash');

function scope() {
    
    function greetUser(name, score) {
        console.log(`Hello ${name}. Your score is ${score}.`);
    }

    module.exports = _.curry(greetUser);
    
}

function greetUser(name, score, salutation) {
    const greeting = salutation || 'Hello';
    console.log(`${greeting} ${name}. Your score is ${score}.`);
}

module.exports = _.curry(greetUser);

scope();