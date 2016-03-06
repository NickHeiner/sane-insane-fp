'use strict';

const greetUser = require('./curry');

const greetRussell = greetUser('Russell Wilson');
greetRussell(42);

greetUser('Jim', 99);

