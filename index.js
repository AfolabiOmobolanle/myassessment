let fullname = document.querySelector("#fullname");
let title = document.querySelector("#title");
let phone = document.querySelector("#phone");
let email = document.querySelector("#email");
let country= document.querySelector("#country")
let state= document.querySelector("#state")
let city = document.querySelector("#city")
let userImage = document.querySelector("#userImage")
let age = document.querySelector("#age")
let date = document.querySelector("#gender")


const key =`https://randomuser.me/api`;

 
function getProfile () {
    fetch (key) 
    .then(response => {
        return response.json()
    }).then(data =>{
        console.log(data.results[0]);
        title.textContent = "Title:" + data.results[0].name.title
        fullname.textContent = "First Name:" + " " + data.results[0].name.first + " " + data.results[0].name.last
        age.textContent ="Age:"+ " " + data.results[0].dob.age
        gender.textContent ="Gender:"+" "+ data.results[0].gender


        phone.textContent ="Phone:"+ " " + data.results[0].phone
        email.textContent = "Email:"+ " " + data.results[0].email
        country.textContent = "Country:"+ " " + data.results[0].location.country
        state.textContent = "State:"+ " " + data.results[0].location.state
        city.textContent = "City:"+ " " + data.results[0].location.city
         Img.src = data.results[0].picture.medium

       
    })
}

getProfile();