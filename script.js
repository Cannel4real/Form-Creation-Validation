
document.addEventListener('DOMContentLoaded', ()=> {
    const form = document.getElementById("registration-form");
    const feedbackDiv = document.getElementById("form-feedback");
    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const submitBtn = document.getElementById("submit-button");

    form.addEventListener('submit', (e) => {
        e.preventDefault();
    })
    submitBtn.addEventListener('click', ()=>{
        //username validation
    if (username.length < 3) {
        isValid = false;
        messages.push("Username must be at least 3 characters long.");
    }

//email validation
    if (!email.includes('@') || !email.includes('.')) {
        isValid = false;
        messages.push("Email must include both '@' and '.' characters.")
    }

//password validation
    if (password.length < 8) {
        isValid = false;
        messages.push("password must be at least 8 characters long.");
    }

//displaying feedback
    feedbackDiv.style.display = "block";
    if (isValid == true) {
        feedbackDiv.textContent("Registration successful!");
        feedbackDiv.style.color = "#28a745";
    } else {
        feedbackDiv.innerHTML = messages.join('<br>');
        feedbackDiv.style.color = "#dc3545";
    }
    form.reset();
    })
    let isValid = true;
    let messages = [];

    
});