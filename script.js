// generate 8 ID unique ID number
var ID = function (length) {
    if (!length) {
        length = 8
    }
    var str = ''
    for (var i = 1; i < length + 1; i = i + 8) {
        str += Math.random().toString(36).substr(2, 10)
    }
    return ('_' + str).substr(0, length)
}

// get the url http
let requestURL = ''; //TODO need the link for json!!
let request = new XMLHttpRequest();
request.open('GET', requestURL);



// convert employee.json into javascript
var text = '{ "employees" : [' +
    '{ "firstName":"" , "lastName":"" },' +
    '{ "firstName":"" , "lastName":"" },' +
    '{ "firstName":"" , "lastName":"" } ]}';

var object = {
    table: []
};