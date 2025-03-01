const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirm-password");
const passwordError = document.getElementById("password-error");
const registerForm = document.getElementById("register-form");

confirmPasswordInput.addEventListener("input", function() {
    if (passwordInput.value !== confirmPasswordInput.value) {
        passwordError.textContent = "密碼不一致，請重新輸入";
    } else {
        passwordError.textContent = "";
    }
});

registerForm.addEventListener("submit", function(event) {
    if (passwordInput.value !== confirmPasswordInput.value) {
        event.preventDefault();
        passwordError.textContent = "密碼不一致，請重新輸入";
    }
});