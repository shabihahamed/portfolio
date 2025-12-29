// Animate skill bars
document.querySelectorAll('.skill-progress').forEach(bar => {
    bar.style.width = bar.dataset.level + '%';
});

// Feedback form validation
feedbackForm.addEventListener("submit", function (e) {
    e.preventDefault();

    nameError.textContent = "";
    emailError.textContent = "";
    commentError.textContent = "";

    let valid = true;

    if (visitorName.value.trim() === "") {
        nameError.textContent = "Name is required.";
        valid = false;
    }

    if (!visitorEmail.value.includes("@")) {
        emailError.textContent = "Valid email is required.";
        valid = false;
    }

    if (suggestion.value.trim() === "") {
        commentError.textContent = "Comment cannot be empty.";
        valid = false;
    }

    if (valid) {
        alert("Thank you for your feedback!");
        feedbackForm.reset();
    }
});

function toggleMenu() {
    document.querySelector(".navBar").classList.toggle("show");
}