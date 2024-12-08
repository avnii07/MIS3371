 /*
<!--
Name: Avnii Vaish
Name of the file: hw3.js
Date created: 09/20/2024
Description: Homework: JS
Date last updated: 12/01/2024
-->
*/

// Dynamic date JS code
const d = new Date();
let text = d.toLocaleDateString();
document.getElementById("today").innerHTML = text;

// Range slider JS code
document.addEventListener("DOMContentLoaded", () => {
  let slider = document.getElementById("health_slider");
  let output = document.getElementById("slider_value");
  output.innerHTML = slider.value; // Set initial value
  slider.oninput = function () {
    output.innerHTML = this.value; // Update on input change
  };
});

// First name validation JS code
function validateFname() {
    let fname = document.getElementById("fname").value.trim();
    const namePattern = /^[a-zA-Z'-]+$/;
    // check if fist name field is empty
    if (fname === "") {
        document.getElementById("fname-error").innerHTML = "First name field cannot be empty.";
        return false;
    } else if (!fname.match(namePattern)) { //check if fist name field is  Letters, apostrophes, and dashes only.
        document.getElementById("fname-error").innerHTML = "Letters, apostrophes, and dashes only.";
        return false;
    } else if (fname.length < 2) { //check if fist name field is more than 2 characters
        document.getElementById("fname-error").innerHTML = "First name cannot be less than 2 characters.";
        return false;
    } else if (fname.length > 30) { //check if fist name field is less than 30 characters
        document.getElementById("fname-error").innerHTML = "First name cannot exceed 30 characters.";
        return false;
    } else {
        document.getElementById("fname-error").innerHTML = "";
        return true;
    }
}

// Last name validation JS code
function validateLname() {
    let lname = document.getElementById("lname").value.trim();
    const namePattern = /^[a-zA-Z'-]+$/;

    if (lname === "") {
        document.getElementById("lname-error").innerHTML = "Last name field cannot be empty.";
        return false;
    } else if (!lname.match(namePattern)) {
        document.getElementById("lname-error").innerHTML = "Letters, apostrophes, and dashes only.";
        return false;
    } else if (lname.length < 2) {
        document.getElementById("lname-error").innerHTML = "Last name cannot be less than 2 characters.";
        return false;
    } else if (lname.length > 30) {
        document.getElementById("lname-error").innerHTML = "Last name cannot exceed 30 characters.";
        return false;
    } else {
        document.getElementById("lname-error").innerHTML = "";
        return true;
    }
}

// Middle initial validation JS code
function validateMini() {
    let mini = document.getElementById("mini").value.trim();
    const namePattern = /^[A-Z]+$/;

    mini = mini.toUpperCase();
    document.getElementById("mini").value = mini;

    if (!mini.match(namePattern)) {
        document.getElementById("mini-error").innerHTML = "Letters only.";
        return false;
    } else if (mini.length > 3) {
        document.getElementById("mini-error").innerHTML = "Middle initial cannot exceed 3 characters.";
        return false;
    } else {
        document.getElementById("mini-error").innerHTML = "";
        return true;
    }
}

// DOB validation
function validateDob() {
    const dob = document.getElementById("dob");
    let date = new Date(dob.value);
    let maxDate = new Date();
    maxDate.setFullYear(maxDate.getFullYear() - 120);

    if (date > new Date()) {
        document.getElementById("dob-error").innerHTML = "Date cannot be in the future.";
        dob.value = "";
        return false;
    } else if (date < maxDate) {
        document.getElementById("dob-error").innerHTML = "Date cannot be more than 120 years ago.";
        dob.value = "";
        return false;
    } else {
        document.getElementById("dob-error").innerHTML = "";
        return true;
    }
}

// SSN validation
function validateSsn() {
    const ssn = document.getElementById("ssn").value;
    const ssnR = /^[0-9]{3}-?[0-9]{2}-?[0-9]{4}$/;

    if (!ssnR.test(ssn)) {
        document.getElementById("ssn-error").innerHTML = "Please enter a valid Social Security Number.";
        return false;
    } else {
        document.getElementById("ssn-error").innerHTML = "";
        return true;
    }
}

// Address validation
function validateAdd1() {
    const add1 = document.getElementById("add1").value;
    if (add1.length < 2) {
        document.getElementById("add1-error").innerHTML = "Please enter something on address line.";
        return false;
    } else {
        document.getElementById("add1-error").innerHTML = "";
        return true;
    }
}

//city validate js code
function validateCity()
{ city = document.getElementById("city").value.trim();
    if (!city) {
        document.getElementById("city-error").innerHTML = "City cannot be left blank.";
        return false;}
    else {
        document.getElementById("city-error").innerHTML = "";
        return true;
    }
}

// ZIP code validation
function validateZip() {
    const zipInput = document.getElementById("zip");
    let zip = zipInput.value.replace(/[^\d]/g, ""); // Remove non-numeric characters

    if (zip.length === 0) {
        document.getElementById("zip-error").innerHTML = "Zip code cannot be left blank.";
        return false;
    }

    if (zip.length < 5) {
        document.getElementById("zip-error").innerHTML = "Zip code must be 5 digits.";
        return false;
    }

    if (zip.length > 5) {
        zip = zip.slice(0, 5); // Truncate to 5 digits if input exceeds
        zipInput.value = zip;
    }

    document.getElementById("zip-error").innerHTML = ""; // Clear error if valid
    return true;
}


// Email validation
function validateEmail() {
    const email = document.getElementById("email").value;
    const emailR = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (email === "") {
        document.getElementById("email-error").innerHTML = "Email cannot be empty.";
        return false;
    } else if (!emailR.test(email)) {
        document.getElementById("email-error").innerHTML = "Please enter a valid email.";
        return false;
    } else {
        document.getElementById("email-error").innerHTML = "";
        return true;
    }
}

//Phone validation JS code
function validatePhone() {
    const phoneInput = document.getElementById("phone");
    const phone = phoneInput.value.replace(/\D/g, "");

    if (phone === "") {
        document.getElementById("phone-error").innerHTML = "Phone number cannot be left blank.";
        return false;
    } else if (phone.length !== 10) {
        document.getElementById("phone-error").innerHTML = "Please enter a 10-digit phone number.";
        return false;
    }

    const formattedPhone = phone.slice(0, 3) + "-" + phone.slice(3, 6) + "-" + phone.slice(6);
    phoneInput.value = formattedPhone;
    document.getElementById("phone-error").innerHTML = ""; // Clear error
    return true;
}

// Emergency phone validation JS code
function validateEphone() {
    const ephoneInput = document.getElementById("ephone");
    const ephone = ephoneInput ? ephoneInput.value.replace(/\D/g, "") : "";

    if (ephone === "") {
        document.getElementById("ephone-error").innerHTML = "Phone number cannot be left blank.";
        return false;
    } else if (ephone.length !== 10) {
        document.getElementById("ephone-error").innerHTML = "Please enter a 10-digit phone number.";
        return false;
    }

    const formattedEphone = ephone.slice(0, 3) + "-" + ephone.slice(3, 6) + "-" + ephone.slice(6);
    if (ephoneInput) ephoneInput.value = formattedEphone;
    document.getElementById("ephone-error").innerHTML = ""; // Clear error
    return true;
}
// Username validation
function validateUname() {
    let uname = document.getElementById("uname").value.toLowerCase();
    document.getElementById("uname").value = uname;

    if (uname.length === 0) {
        document.getElementById("uname-error").innerHTML = "Username field cannot be empty.";
        return false;
    }
    if (!isNaN(uname.charAt(0))) {
        document.getElementById("uname-error").innerHTML = "Username cannot begin with a number.";
        return false;
    }
    if (!/^[a-zA-Z0-9_]+$/.test(uname)) {
        document.getElementById("uname-error").innerHTML = "Username can only contain letters, numbers, or underscores.";
        return false;
    }
    if (uname.length < 5) {
        document.getElementById("uname-error").innerHTML = "Username must be at least 5 characters.";
        return false;
    }
    if (uname.length > 30) {
        document.getElementById("uname-error").innerHTML = "Username cannot exceed 30 characters.";
        return false;
    }
    document.getElementById("uname-error").innerHTML = "";
    return true;
}
// Password validation
function validatePassword() {
    const pword = document.getElementById("pword").value;
    const errorContainer = document.getElementById("pword-error");
    const errorMessage = [];

    if (!/[a-z]/.test(pword)) errorMessage.push("At least one lowercase letter required.");
    if (!/[A-Z]/.test(pword)) errorMessage.push("At least one uppercase letter required.");
    if (!/[0-9]/.test(pword)) errorMessage.push("At least one number required.");
    if (!/[!@#$%&*\-_\\.+()]/.test(pword)) errorMessage.push("At least one special character required.");
    if (pword.length < 10) errorMessage.push("Password must be at least 10 characters long.");

    errorContainer.innerHTML = errorMessage.map((msg) => `<span>${msg}</span>`).join("<br>");
    return errorMessage.length === 0;
}

// Confirm Password validation
function confirmCpword() {
    const pword = document.getElementById("pword").value;
    const cpword = document.getElementById("cpword").value;
    const errorContainer = document.getElementById("cpword-error");

    if (cpword === "") {
        errorContainer.textContent = "Confirm password cannot be empty.";
        return false;
    } else if (pword !== cpword) {
        errorContainer.textContent = "Passwords do not match.";
        return false;
    } else {
        errorContainer.textContent = "Passwords match.";
        return true;
    }
}

// Combined validation for form submission
function validateForm() {
    const isPasswordValid = validatePassword();
    const isConfirmPasswordValid = confirmCpword();

    return isPasswordValid && isConfirmPasswordValid;
}

// Add event listener for form submission
document.getElementById("form").addEventListener("submit", function (e) {
    if (!validateForm()) {
        e.preventDefault(); // Prevent form submission if validation fails
    }
});
// Re-display user input back to user (review button)
function reviewInput() {
    var formcontent = document.getElementById("signup");
    var formoutput = "<table class='output'><thead><tr><th colspan='2'>Your Information:</th></tr></thead><tbody>";
    var i;

    for (i = 0; i < formcontent.length; i++) {
        if (formcontent.elements[i].value !== "") {
            let datatype = formcontent.elements[i].type;

            switch (datatype) {
                case "checkbox":
                    if (formcontent.elements[i].checked) {
                        formoutput += `<tr><td align='right'>${formcontent.elements[i].name}</td>`;
                        formoutput += "<td class='outputdata'>&#x2713;</td></tr>";
                    }
                    break;

                case "radio":
                    if (formcontent.elements[i].checked) {
                        formoutput += `<tr><td align='right'>${formcontent.elements[i].name}</td>`;
                        formoutput += `<td class='outputdata'>${formcontent.elements[i].value}</td></tr>`;
                    }
                    break;

                case "button":
                case "submit":
                case "reset":
                    break;

                default:
                    formoutput += `<tr><td align='right'>${formcontent.elements[i].name}</td>`;
                    formoutput += `<td class='outputdata'>${formcontent.elements[i].value}</td></tr>`;
            }
        }
    }

    formoutput += "</tbody></table>";
    document.getElementById("showInput").innerHTML = formoutput;
}


function validateEverything() {
    let valid = true;

    valid &= validateFname();
    valid &= validateMini();
    valid &= validateLname();
    valid &= validateDob();
    valid &= validateSsn();
    valid &= validateEmail();
    valid &= validatePhone();
    valid &= validateAdd1();
    valid &= validateZip();
    valid &= validateUname();
    valid &= validatePassword();
    valid &= confirmCpword();

    if (valid) {
        document.getElementById("submit").disabled = false;
    } else {
        showAlert();
    }
}
// Function to set a cookie
function setCookie(name, cvalue, expiryDays) {
    var day = new Date();
    day.setTime(day.getTime() + (expiryDays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + day.toUTCString();
    document.cookie = name + "=" + cvalue + ";" + expires + ";path=/";
}
// Function to get a cookie
function getCookie(name) {
    var cookieName = name + "=";
    var cookies = document.cookie.split(';');

    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i].trim();
        if (cookie.indexOf(cookieName) === 0) {
            return cookie.substring(cookieName.length, cookie.length);
        }
    }
    return "";
}

// Input fields and their corresponding cookies
var inputs = [
    { id: "fname", cookieName: "firstName" },
    { id: "mini", cookieName: "middleInitial" },
    { id: "lname", cookieName: "lastName" },
    { id: "dob", cookieName: "dob" },
    { id: "ssn", cookieName: "ssn" },
    { id: "add1", cookieName: "address1" },
    { id: "city", cookieName: "city" },
    { id: "zip", cookieName: "zip" },
    { id: "email", cookieName: "email" },
    { id: "phone", cookieName: "telephone" },
    { id: "uname", cookieName: "userName" }
];

// Loop through inputs to prefill and save cookie values
inputs.forEach(function (input) {
    var inputElement = document.getElementById(input.id);
    if (inputElement) {
        // Prefill input with value from the cookie
        var cookieValue = getCookie(input.cookieName);
        if (cookieValue !== "") {
            inputElement.value = cookieValue;
        }

        // Set a cookie with the input value when the input field changes
        inputElement.addEventListener("change", function () {
            setCookie(input.cookieName, inputElement.value, 30);
        });
    }
});

// Greet the user with their name + message if the cookie is set
var firstName = getCookie("firstName");
if (firstName !== "") {
    var welcome1 = document.getElementById("welcome1");
    var welcome2 = document.getElementById("welcome2");

    if (welcome1 && welcome2) {
        welcome1.innerHTML = "Welcome back, " + firstName + "!";
        welcome2.innerHTML =
            "<a href='#' id='new-user'>Not " + firstName + "? Click here to start a new form</a>";
    }

    var newUser = document.getElementById("new-user");
    if (newUser) {
        newUser.addEventListener("click", function () {
            inputs.forEach(function (input) {
                setCookie(input.cookieName, "", -1); // Clear the cookie
            });
            location.reload(); // Reload the page to reset the form
        });
    }
}
