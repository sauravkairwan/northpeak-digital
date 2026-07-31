const form = document.getElementById("contact-form");
const formMessage = document.getElementById("form-message");

if (form) {
    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const firstName = document.getElementById("first-name").value.trim();
        const lastName = document.getElementById("last-name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        formMessage.textContent = "";
        formMessage.className = "";

        if (firstName === "") {
            formMessage.textContent = "Please enter your first name.";
            formMessage.classList.add("form-error");
            return;
        }

        if (lastName === "") {
            formMessage.textContent = "Please enter your last name.";
            formMessage.classList.add("form-error");
            return;
        }

        if (email === "") {
            formMessage.textContent = "Please enter your email.";
            formMessage.classList.add("form-error");
            return;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {
            formMessage.textContent = "Please enter a valid email address.";
            formMessage.classList.add("form-error");
            return;
        }

        if (message === "") {
            formMessage.textContent = "Please enter your message.";
            formMessage.classList.add("form-error");
            return;
        }

        if (message.length < 20) {
            formMessage.textContent =
                "Please enter at least 20 characters in your message.";
            formMessage.classList.add("form-error");
            return;
        }

        formMessage.textContent =
            "Thanks! Your message has been submitted successfully.";
        formMessage.classList.add("form-success");

        form.reset();
    });
}