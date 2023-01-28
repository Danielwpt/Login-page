function validateInputs(getUsername, getPassword) {

    getUsername = document.getElementById("username").value
    getPassword = document.getElementById("password").value

    if (getUsername == "" && getPassword == "") {
        alert("Username and Password are empty!")
    } else if (getPassword.length < 6) {
        alert("Password too short")
    } else {
        alert("Welcome!")
    }
}