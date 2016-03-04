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