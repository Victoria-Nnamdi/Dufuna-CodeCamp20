const contactForm = document.getElementById("contactForm"),
    fullName = document.getElementById("fullName"),
    email = document.getElementById("email"),
    subject = document.getElementById("subject"),
    message = document.getElementById("message"),
    nameVal =  /^[a-zA-Z ]+$/,
    emailVal = /^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,6})+$/,
    messageVal = /^[a-zA-Z]/;


function formValidation (field, regex, error_one, error_two, event) {
    if (field.value === "") {
        field.nextElementSibling.innerHTML = error_one;
        event.preventDefault();
        return false;
    } else if (!field.value.match(regex)) {
        field.nextElementSibling.innerHTML = error_two;
        event.preventDefault();
        return false;
    } else {
        field.nextElementSibling.innerHTML = "";
        return true;
    }
}

function validation (event) {
    formValidation(fullName, nameVal, "This field is required", "Please enter your name", event);
    formValidation(email, emailVal, "Please enter your Email Address", "Please enter a valid email", event);
    formValidation(subject, messageVal, "This field is required", "Please enter your message subject", event);
    formValidation(message, messageVal, "This field is required", "Please enter your Message", event);
    return true;
}

contactForm.addEventListener("submit", validation);