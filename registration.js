// ==========================================
// GET FORM
// ==========================================

const registrationForm =
    document.getElementById("registrationForm");


// ==========================================
// GET SUCCESS MESSAGE
// ==========================================

const successMessage =
    document.getElementById("successMessage");


// ==========================================
// PASSWORD SHOW / HIDE
// ==========================================

function togglePassword(inputId, button) {

    const input =
        document.getElementById(inputId);


    if (input.type === "password") {

        input.type = "text";

        button.textContent = "Hide";

    }

    else {

        input.type = "password";

        button.textContent = "Show";

    }

}


// ==========================================
// MOBILE NUMBER
// ONLY ALLOW NUMBERS
// ==========================================

const mobileInput =
    document.getElementById("mobile");


mobileInput.addEventListener(
    "input",
    function () {

        this.value =
            this.value.replace(/\D/g, "");

    }
);


// ==========================================
// FORM SUBMISSION
// ==========================================

registrationForm.addEventListener(
    "submit",
    function (event) {


        // Stop page refresh

        event.preventDefault();


        // ==================================
        // GET VALUES
        // ==================================

        const fullName =
            document.getElementById("fullName")
                .value.trim();


        const email =
            document.getElementById("email")
                .value.trim();


        const mobile =
            document.getElementById("mobile")
                .value.trim();


        const password =
            document.getElementById("password")
                .value;


        const confirmPassword =
            document.getElementById("confirmPassword")
                .value;


        const terms =
            document.getElementById("terms")
                .checked;



        // ==================================
        // ERROR ELEMENTS
        // ==================================

        const nameError =
            document.getElementById("nameError");


        const emailError =
            document.getElementById("emailError");


        const mobileError =
            document.getElementById("mobileError");


        const passwordError =
            document.getElementById("passwordError");


        const confirmPasswordError =
            document.getElementById("confirmPasswordError");


        const termsError =
            document.getElementById("termsError");



        // ==================================
        // CLEAR OLD ERRORS
        // ==================================

        nameError.textContent = "";

        emailError.textContent = "";

        mobileError.textContent = "";

        passwordError.textContent = "";

        confirmPasswordError.textContent = "";

        termsError.textContent = "";

        successMessage.style.display = "none";



        let isValid = true;



        // ==================================
        // NAME VALIDATION
        // ==================================

        if (fullName === "") {

            nameError.textContent =
                "Please enter your full name.";

            isValid = false;

        }

        else if (fullName.length < 3) {

            nameError.textContent =
                "Name must contain at least 3 characters.";

            isValid = false;

        }



        // ==================================
        // EMAIL VALIDATION
        // ==================================

        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


        if (email === "") {

            emailError.textContent =
                "Please enter your email address.";

            isValid = false;

        }

        else if (!emailPattern.test(email)) {

            emailError.textContent =
                "Please enter a valid email address.";

            isValid = false;

        }



        // ==================================
        // MOBILE VALIDATION
        // ==================================

        if (mobile === "") {

            mobileError.textContent =
                "Please enter your mobile number.";

            isValid = false;

        }

        else if (mobile.length !== 10) {

            mobileError.textContent =
                "Mobile number must contain 10 digits.";

            isValid = false;

        }



        // ==================================
        // PASSWORD VALIDATION
        // ==================================

        if (password === "") {

            passwordError.textContent =
                "Please create a password.";

            isValid = false;

        }

        else if (password.length < 8) {

            passwordError.textContent =
                "Password must contain at least 8 characters.";

            isValid = false;

        }



        // ==================================
        // CONFIRM PASSWORD
        // ==================================

        if (confirmPassword === "") {

            confirmPasswordError.textContent =
                "Please confirm your password.";

            isValid = false;

        }

        else if (password !== confirmPassword) {

            confirmPasswordError.textContent =
                "Passwords do not match.";

            isValid = false;

        }



        // ==================================
        // TERMS
        // ==================================

        if (!terms) {

            termsError.textContent =
                "Please accept the Terms & Conditions.";

            isValid = false;

        }



        // ==================================
        // SUCCESS
        // ==================================

        if (isValid) {


            successMessage.textContent =
                "🎉 Welcome to TOMATO! Your account is ready.";


            successMessage.style.display =
                "block";


            // For now we only display the data
            // in the browser console.
            //
            // Later:
            // JavaScript → Java Backend → MySQL


            console.log("TOMATO Registration Data");

            console.log({

                fullName: fullName,

                email: email,

                mobile: mobile,

                password: password

            });


            // Clear form

            registrationForm.reset();

        }

    }
);