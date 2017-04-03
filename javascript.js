/*jslint browser: true*/
/*global $, jQuery*/
/*jslint devel: true */

function pageChoice() {
    "use strict";
    var fn = document.getElementById('firstName'),
        ln = document.getElementById('lastName'),
        firstVal = fn.value,
        lastVal = ln.value;
    if (firstVal.length < 1 && lastVal.length < 1) {
        alert("Please Enter your First and Last Name to enter the Contest!");
        return false;
        
    } else if (firstVal.length > 1 && lastVal.length < 1) {
        alert("Please Enter your Last Name to enter the Contest!");
        return false;
    } else if (firstVal.length < 1 && lastVal.length > 1) {
        alert("Please Enter your First Name to enter the Contest!");
        return false;
    } else if (firstVal.length > 1 && lastVal.length > 1) {
        window.location.href = 'http://www.google.com';
    }
}









/*
function checkEnable() {
    "use strict";
    var rid = document.getElementById('rid'),
        firstBox = document.getElementById('firstBox'),
        secondBox = document.getElementById('secondBox'),
        checkOne = document.getElementById('checkOne'),
        checkTwo = document.getElementById('checkTwo'),
        checkOneOn = checkOne.checked,
        checkTwoOn = checkTwo.checked;
    if (checkOne.checked === true) {
        firstBox.removeAttribute("disabled");
    } else if (checkOne.checked === false) {
        firstBox.setAttribute("disabled", "disabled");
    }
    if (checkTwo.checked === true) {
        secondBox.removeAttribute("disabled");
    } else if (checkTwo.checked === false) {
        secondBox.setAttribute("disabled", "disabled");
    }
}

function test1() {
    "use strict";
    var firstBox = document.getElementById('firstBox'),
        secondBox = document.getElementById('secondBox'),
        firstVal = firstBox.value,
        secondVal = secondBox.value;
    alert(firstVal + " AND " + secondVal);
}

function pageChoice() {
    "use strict";
    var radioOne = document.getElementById('checkOne'),
        firstName = document.getElementById('firstBox'),
        lastName = document.getElementById('secondBox'),
        valFirstName = firstName.value,
        valLastName = lastName.value;
    if (radioOne.checked === true) {
        alert("yes.html?rid=" + valFirstName + "." + valLastName);
    } else {
        alert("no.html");
    }
}
*/
/*
function pageChoice() {
    "use strict";
    var radioOne = document.getElementById('checkOne'),
        firstName = document.getElementById('firstName'),
        lastName = document.getElementById('lastName'),
        valFirstName = firstName.value,
        valLastName = lastName.value;
    if (valFirstName.length > 1) {
        if (radioOne.checked === true) {
            window.location.href = 'yes.html?rid=' + valFirstName + "." + valLastName;
        } else {
            window.location.href = 'no.html?rid=' + valFirstName + "." + valLastName;
        }
    } else {
        if (valFirstName.length === null && valLastName.length === null) {
            alert("Please Enter your First and Last Name to enter the Contest");
        } else if (valFirstName.length === null && valLastName.length !== null) {
            alert("Please Enter your First Name to enter the Contest");
        } else if (valFirstName.length !== null && valLastName.length === null) {
            alert("Please Enter your Last Name to enter the Contest");
        }
    }
}
*/