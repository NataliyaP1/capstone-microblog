function register() {
    return fetch(apiBaseURL + "/api/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "accept": "application/json"
        },
        body: JSON.stringify({
            username: username.value,
            fullName: fullname.value,
            password: password.value
        })
    }).then(() => location = "/"); //TODO check for failure
    if (isLoggedIn() === true) window.location.replace("/posts");
}

registerButton.addEventListener("click", register)