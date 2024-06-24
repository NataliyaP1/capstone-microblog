/* auth.js provides LOGIN-related functions */

"use strict";

const apiBaseURL = "http://microbloglite.us-east-2.elasticbeanstalk.com";
// Backup server (mirror):   "https://microbloglite.onrender.com"

// NOTE: API documentation is available at /docs 
// For example: http://microbloglite.us-east-2.elasticbeanstalk.com/docs


// You can use this function to get the login data of the logged-in
// user (if any). It returns either an object including the username
// and token, or an empty object if the visitor is not logged in.
// function getLoginData () {
//     const loginJSON = window.localStorage.getItem("login-data");
//     return JSON.parse(loginJSON) || {};
// }


// You can use this function to see whether the current visitor is
// logged in. It returns either `true` or `false`.
function isLoggedIn () {
    return Boolean(localStorage.token);
}


// This function is already being used in the starter code for the
// landing page, in order to process a user's login. READ this code,
// and feel free to re-use parts of it for other `fetch()` requests
// you may need to write.
function login (loginData) {
    // POST /auth/login
    return fetch(apiBaseURL + "/auth/login" , { 
        method: "POST",
        headers: {
            // This header specifies the type of content we're sending.
            // This is required for endpoints expecting us to send
            // JSON data.
            "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
    }).then(response => response.json())
      .then(loginData => {
        window.localStorage.setItem("login-data", JSON.stringify(loginData));
        window.localStorage.token = loginData.token;
        window.location.assign("/posts");
        return loginData;
    });


}

function logout () {
    fetch(apiBaseURL + "/auth/logout", { 
        method: "GET",
        headers: { Authorization: `Bearer ${localStorage.token}`}
    }).then(() => {
            window.localStorage.clear("token");
            location  = "/";  // redirect back to landing page
    });
}