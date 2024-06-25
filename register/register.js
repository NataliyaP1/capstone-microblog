
"use strict"


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
    }).then(() => location = "/api/users"); 
}

registerBtn.addEventListener("click", register);
