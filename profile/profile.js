const loginData = loginData();
function showProfile(user){
    profileBio.value = user.bio;
    profileName.innerHTML = user.bio;
}
profilePost.addEventListener("click", () => {
    fetch(apiBaseUrl + "/api/users/" + loginData.username, {
            method:"POST",
            headers: { 
                Authorization: `Bearer ${loginData.token}`,
            },
            body: JSON.stringify({
                 bio: profileBio.value
    })

    }).then(r => location = "/profile/profile.html/")

})
fetch (apiBaseUrl + "/api/users/" + loginData.username,{
    headers:{
        Authorization: `Bearer ${loginData.token}`
    },
}).then(r => r.json()).then(showProfile)