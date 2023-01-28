function validateInputs() {

    let getUsername = document.getElementById("username").value
    let getPassword = document.getElementById("password").value

    let hasError = false

    try {
        if (getUsername == "" && getPassword == "") {
            alert("Username and Password are empty!")
        } else if (getPassword.length < 6) {
            hasError = true
            document.getElementById("password-error-tip").innerText = "Password should be more than 6 chars"
        } else {
            alert("Welcome!")
        }
    } catch (error) {
        alert(error)
    }
}