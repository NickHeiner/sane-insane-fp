'use strict';

const _ = require('lodash');

function pipe(/* args */) {
    return _.toArray(arguments)
        .slice(1)
        .reduce((acc, el) => el(acc), arguments[0]);
}

const result = pipe(
    3,
    x => x + 1,
    x => x * 2    
);

console.log(result);