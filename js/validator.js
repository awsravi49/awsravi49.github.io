function validateForm() {
    var x = document.forms["contactForm"]["firstName"].value;
    if (x == "") {
        alert("FirstName must be filled out");
        return false;
    }
    var y = document.forms["contactForm"]["lastName"].value;
    if (y == "") {
        alert("LastName must be filled out");
        return false;
    }
    if (document.forms["contactForm"]["email"].value == "") {
        alert("Email must be filled out");
        return false;
    }
    var phone = document.forms["contactForm"]["contactNumber"].value;
    var phoneno = /^\d{10}$/;
    if (phone.value.match(phoneno))
        {
        return true;
    }
    else {
        alert("Enter valid Contact Number");
        return false;
    }
}
