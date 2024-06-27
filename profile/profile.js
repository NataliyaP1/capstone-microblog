// const loginData = loginData();
// function showProfile(user){
//     profileBio.value = user.bio;
//     profileName.innerHTML = user.bio;
// }
// profilePost.addEventListener("click", () => {
//     fetch(apiBaseUrl + "/api/users/" + loginData.username, {
//             method:"POST",
//             headers: { 
//                 Authorization: `Bearer ${loginData.token}`,
//             },
//             body: JSON.stringify({
//                  bio: profileBio.value
//     })

//     }).then(r => location = "/profile/profile.html/")

// })
// fetch (apiBaseUrl + "/api/users/" + loginData.username,{
//     headers:{
//         Authorization: `Bearer ${loginData.token}`
//     },
// }).then(r => r.json()).then(showProfile)

btnProfile.addEventListener("click", () => {
    fetch(apiBaseURL + "/api/users/" + localStorage.username, {
        method: "PUT",
        headers: {
             accept: "application/json",
             "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.token
        },
        body: JSON.stringify({ bio: bioInput.value })
    }).then(response => {
        console.log(response);
        location = "/profile/profile.html";  //force refresh
    });
});

function showProfile(data){
    bioElement.innerHTML = data.bio;
    bioInput.value = data.bio;
}

fetch(apiBaseURL + "/api/users/" + localStorage.username, {
    headers: { Authorization: `Bearer ${localStorage.token}` }
}).then(response => {
    if (response.statusCode >= 400) {
        location = "/";
    }
    return response.json()
}).then(data=>{
    showProfile(data);
});