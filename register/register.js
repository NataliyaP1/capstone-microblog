function register() {
    return fetch(apiBaseURL + "/api/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "accept": "application/json"
        },
        body: JSON.stringify({
            fullName: fullName.value,
            username: username.value,
            password: password.value
        })
    }).then(() => location = "/"); 
}

registerBtn.addEventListener("click", register);
