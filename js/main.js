function validate() {
    var email = document.form.email.value;
    const errorMessage = document.getElementById('error-mobile');
    const errorMessageTwo = document.getElementById('error-desktop');
    const container = document.getElementById('error-container');
    if (email == "") {
        errorMessage.classList.add("input__error");
        errorMessageTwo.classList.add("input__error");
        container.setAttribute("id", "input__validation");
        form.reset();
        return false;
    } else {
        errorMessage.classList.remove("input__error");
        errorMessageTwo.classList.remove("input__error");
        container.removeAttribute("id");
        form.reset();
        return false;
    }
}