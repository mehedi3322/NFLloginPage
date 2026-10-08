// =========================================
// GET ELEMENTS
// =========================================

const loginForm = document.getElementById("loginForm");

const userIdInput = document.getElementById("userId");

const passwordInput = document.getElementById("password");

const togglePassword = document.getElementById("togglePassword");

const eyeIcon = document.getElementById("eyeIcon");

const languageBtn = document.getElementById("languageBtn");

const languageText = document.getElementById("languageText");

const registrationBtn = document.getElementById("registrationBtn");


// =========================================
// PASSWORD SHOW / HIDE
// =========================================

togglePassword.addEventListener("click", function () {

    if (passwordInput.type === "password") {

        // Show password
        passwordInput.type = "text";

        eyeIcon.classList.remove("fa-eye-slash");
        eyeIcon.classList.add("fa-eye");

    } else {

        // Hide password
        passwordInput.type = "password";

        eyeIcon.classList.remove("fa-eye");
        eyeIcon.classList.add("fa-eye-slash");
    }

});


// =========================================
// LOGIN FORM SUBMIT
// =========================================

loginForm.addEventListener("submit", function (event) {

    // Stop page reload
    event.preventDefault();


    // Get input values
    const userId = userIdInput.value.trim();

    const password = passwordInput.value.trim();


    // =========================================
    // USER ID VALIDATION
    // =========================================

    if (userId === "") {

        showError(userIdInput, "Please enter your User ID.");

        return;
    }


    // =========================================
    // PASSWORD VALIDATION
    // =========================================

    if (password === "") {

        showError(passwordInput, "Please enter your password.");

        return;
    }


    // =========================================
    // PASSWORD LENGTH
    // =========================================

    if (password.length < 6) {

        showError(
            passwordInput,
            "Password must be at least 6 characters."
        );

        return;
    }


    // =========================================
    // LOGIN SUCCESS
    // =========================================

    alert("Login successful!");

});


// =========================================
// SHOW ERROR MESSAGE
// =========================================

function showError(input, message) {

    // Remove previous error
    removeError(input);


    // Create error message
    const errorMessage = document.createElement("p");

    errorMessage.className = "error-message";

    errorMessage.innerText = message;


    // Add error message after input
    input.parentElement.appendChild(errorMessage);


    // Focus input
    input.focus();


    // Red border
    input.style.borderColor = "#DC2626";


    // Remove error when user starts typing
    input.addEventListener(
        "input",
        function removeInputError() {

            removeError(input);

            input.style.borderColor = "";

            input.removeEventListener(
                "input",
                removeInputError
            );
        }
    );

}


// =========================================
// REMOVE ERROR MESSAGE
// =========================================

function removeError(input) {

    const parent = input.parentElement;

    const existingError =
        parent.querySelector(".error-message");


    if (existingError) {

        existingError.remove();

    }

}


// =========================================
// LANGUAGE BUTTON
// =========================================

languageBtn.addEventListener("click", function () {

    if (languageText.innerText === "বাংলা") {

        languageText.innerText = "English";

    } else {

        languageText.innerText = "বাংলা";

    }

});


// =========================================
// NEW REGISTRATION
// =========================================

registrationBtn.addEventListener("click", function () {

    // Later you can redirect to:
    // window.location.href = "registration.html";

    alert("Registration page will open here.");

});