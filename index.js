'use strict';

const _ = require('lodash');

function cleanUpEmails() {

}

function isValidEmail() {
    return true;
}

function getDomainOfEmail() {

}

const possibleEmails = [
    "boss@trump.com",
    "   leading-space-in-string@gmail.com",
    "not-an-email address"
]

const emailDomains =
    possibleEmails
        .map(cleanUpEmails)
        .filter(isValidEmail)
        .map(getDomainOfEmail);

function loadData() {
    console.log('loadData', arguments);
    return 'loaded';
}
function applyFilter() {
    console.log('applyFilter', arguments);
    return 'filtered';
}
function applyTransformation() {
    console.log('applyTransformation', arguments);
    return 'transformed';
}
function pipe() {}

function query(selectStatement, whereStatement, fromStatement) {
    const data = loadData(fromStatement);
    const filteredData = applyFilter(whereStatement, data);
    const transformedData = applyTransformation(selectStatement, filteredData);
    return transformedData;
}


function scope0() {

    function query(selectStatement, whereStatement, fromStatement) {
        return applyTransformation(selectStatement,
            applyFilter(whereStatement, loadData(fromStatement)));
    }

}

function scope() {

    function query(selectStatement, whereStatement, fromStatement) {
        return applyTransformation(
            selectStatement,
            applyFilter(
                whereStatement,
                loadData(fromStatement)
            )
        );
    }

}

function scope2() {

    function query(selectStatement, whereStatement, fromStatement) {
        return pipe(
            fromStatement,
            loadData,
            loaded => applyFilter(whereStatement, loaded),
            filtered => applyTransformation(selectStatement, filtered)
        );
    }

}

// Also consider talking about how currying can be bad.

function scope3() {

    function query(selectStatement, whereStatement, fromStatement) {
        return pipe(
            fromStatement,
            loadData,
            _.partial(applyFilter, whereStatement),
            _.partial(applyTransformation, selectStatement)
        );
    }

}

function scope4() {

    function query(selectStatement, whereStatement, fromStatement) {
        return _.flow(
            loadData,
            _.partial(applyFilter, whereStatement),
            _.partial(applyTransformation, selectStatement)
        )(fromStatement);
    }

    query('select stmt', 'where stmt', 'from stmt');

}

scope4();

function accidentalInherentComplexity() {

    function isValidPhoneNumber() {}
    function getAreaCode() {}

    function scope() {

        function getAreaCodes(ostensiblePhoneNumbers) {
            const areaCodes = [];
            for (let i = 0; i < ostensiblePhoneNumbers.length; i++) {
                const ostensiblePhoneNumber = ostensiblePhoneNumbers[i];
                if (isValidPhoneNumber(ostensiblePhoneNumber)) {
                    const areaCode = getAreaCode(ostensiblePhoneNumber);
                    areaCodes.push(areaCode)
                }
            }
            return areaCodes;
        }

    }

    function scope2() {

        function getAreaCodes(ostensiblePhoneNumbers) {
            return ostensiblePhoneNumbers
                .filter(isValidPhoneNumber)
                .map(getAreaCode);
        }

    }





}

function getWinnerNames(users) {
    return _(users)
        .filter('hasStartedGame')
        .sortBy('score')
        .take(3)
        .map('name')
        .value();
}

function scope7() {

    /* global filter, sortBy, map */

    function getWinnerNames(users) {
        return _.flow(
            users => filter(users, 'hasStartedGame'),
            users => sortBy(users, 'score'),
            users => users.slice(0, 3),
            users => map(users, 'name')
        )(users);
    }

}

function scope8() {

    const obj = {
        a: [1,2,3],
        b: 4,
        c: [5,6],
        d: { e: [7,8], f: 9 },
    };

    const traverse = require('traverse');
    const leaves = traverse(obj).reduce(function(acc, el) {
        if (this.isLeaf) {
            return [el].concat(acc);
        }
        return acc;
    }, []);

    console.log(leaves);

}

function updateDeepProperty(obj) {
    const clone = _.cloneDeep(obj);
    clone.a.b.c = 'new value';
    return clone;
}

function scope10() {

    const traverse = require('traverse');

    function updateDeepProperty(obj) {
        return traverse(obj).map(function(node) {
            if (this.path === ['a', 'b', 'c']) {
                this.update('new value');
            }
        });
    }

}

function scope9() {

    // obj is an ImmutableJS map
    function updateDeepProperty(obj) {
        return obj.setIn(['a', 'b', 'c'], 'new value');
    }

}