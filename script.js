// script.js
// Simple form validation for the ReLink contact page

function validateForm() {

    var name = document.getElementById("contactName").value;
    var email = document.getElementById("contactEmail").value;
    var message = document.getElementById("contactMessage").value;

    if (name == "") {
        alert("Please enter your name.");
        return false;
    }

    if (email == "") {
        alert("Please enter your email address.");
        return false;
    }

    if (message == "") {
        alert("Please enter a message.");
        return false;
    }

    alert("Thank you, " + name + "! Please note this is a fictional college project and no message will actually be sent.");
    return false;

}