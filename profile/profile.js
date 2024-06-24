
function getInfo(info){
    return `
    
    <h1>Username: ${info.username}</h1>
    <h3>Bio: ${info.bio}</h3>
    
    `
}

function showInfo(){
    profileInfo.innerHTML = info.map(getInfo);
}



fetch(apiBaseURL + "/api/users/getser" , {
    method: "GET",
    headers: { Authorization: `Bearer ${localStorage.token}` }
})
.then(info=>{
    showInfo(info)
});