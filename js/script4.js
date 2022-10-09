// Validates a phone number in string form against a custom regex
// Adapted from
// https://www.abstractapi.com/guides/validate-phone-number-javascript
function validate_phone_number(phone) {
    return /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/.test(phone);
}

// Validates an email address in string form against a custom regex
// Adapted from https://www.w3resource.com/javascript/form/email-validation.php
function validate_email(mail) {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail);
}

// This function fills the text in the confirm booking popup and makes it
// visible
function book_now() {

    // Get the value in the location dropdown entry
    var loc = document.getElementById("location-entry").value;
    // If no location selected, i.e. the SELECT LOCATION option is selected,
    // alert the user and abort
    if (loc == "please-select") {
        alert("Please select a location");
        return;
    }
    // Otherwise set the location text on the popup with the location selected
    document.getElementById("loc").textContent = "Location: " + loc;

    // Get the value in the first name entry field
    var fn = document.getElementById("first-name-entry").value;
    // If field is empty, alert the user and abort
    if (fn == "") {
        alert("Please fill in the first name field");
        return;
    }
    // Otherwise set the first name text on the popup with the first name
    // entered
    document.getElementById("fn").textContent = "First Name: " + fn;

    // Get the value in the last name entry field
    var ln = document.getElementById("last-name-entry").value;
    // If field is empty, alert the user and abort
    if (ln == "") {
        alert("Please fill in the last name field");
        return;
    }
    // Otherwise set the last name text on the popup with the last name entered
    document.getElementById("ln").textContent = "Last Name: " + ln;

    // Get the phone number in the phone entry field
    var ph = document.getElementById("phone-entry").value;
    // If a valid phone number is not entered, alert user and abort
    if (!validate_phone_number(ph)) {
        alert("Please enter a valid phone number");
        return;
    }
    // Otherwise set the phone number text on the popup with the phone number
    // entered
    document.getElementById("phone").textContent = "Phone: " + ph;

    // Get the email address in the email entry field
    var em = document.getElementById("email-entry").value;
    // If a valid email address is not entered, alert the user and abort
    if (!validate_email(em)) {
        alert("Please enter a valid email address");
        return;
    }
    // Otherwise set the email text on the popup with the email entered
    document.getElementById("email").textContent = "Email: " + em;

    // Get the date in the date entry field
    var dat = document.getElementById("date-entry").value;
    // Convert to Date object
    var date = new Date(dat);
    // Convert to string format (dd/mm/yyyy)
    var strDate = [date.getDate(), date.getMonth() + 1,
        date.getFullYear()].join("/");
    // If a valid date hasn't been entered alert the user and abort
    if (!document.getElementById("date-entry").value) {
        alert("Please enter a valid date");
        return;
    }
    // Otherwise set the date text on the popup with the date entered
    document.getElementById("date").textContent = "Date: " + strDate;

    // If all fields field correctly, make the popup visible
    document.getElementById("booked-popup").style.display = "flex";
}

// If a booking is made but then cancelled the confirm booking popup is made
// invisible
function cancel_booking() {
    document.getElementById("booked-popup").style.display = "none";
}