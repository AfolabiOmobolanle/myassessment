let fullname = document.querySelector("#fullname");
let title = document.querySelector("#title");
let phone = document.querySelector("#phone");
let email = document.querySelector("#email");
let country= document.querySelector("#country")
let state= document.querySelector("#state")
let city = document.querySelector("#city")


const key =`https://randomuser.me/api`;

 
function getProfile () {
    fetch (key) 
    .then(response => {
        return response.json()
    }).then(data =>{
        console.log(data.results[0]);
    
        title.textContent =data.results[0].name.title
        phone.textContent =data.results[0].phone
        email.textContent =data.results[0].email
        country.textContent =data.results[0].location.country
        state.textContent =data.results[0].location.state
        city.textContent =data.results[0].location.city



       
    })
}

getProfile();