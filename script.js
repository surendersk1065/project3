var openpopup = document.getElementById("openpop")
var loginforms = document.querySelector(".loginform")
openpopup.addEventListener("click",function(event){
         event.preventDefault()
            loginforms.style.display="block"
        })
var closepop = document.getElementById("closepopup")
        closepop.addEventListener("click",function(event){
            event.preventDefault()
            loginforms.style.display="none"
        })

var addbutton = document.getElementById("addbtn")
var namedis = document.querySelector(".displayname")
var input = document.getElementById("nameinp")

addbutton.addEventListener("click",function(event){
    event.preventDefault()
    namedis.innerHTML = ` <h3>Hi, ${input.value}</h3>
    <h3>Welcome to Our Website</h3>
    <h3>Plan Your Trip....</h3>`
    loginforms.style.display="none"
})

var scrollingbox = document.querySelector(".containerbox2")
var leftbutton = document.getElementById("leftbtn")
var rightbutton = document.getElementById("rightbtn")

leftbutton.addEventListener("click",function(event){
    event.preventDefault()
    scrollingbox.style.scrollBehavior = "smooth"
    scrollingbox.scrollLeft -= 200
})

rightbutton.addEventListener("click",function(event){
    event.preventDefault()
    scrollingbox.style.scrollBehavior = "smooth"
    scrollingbox.scrollLeft += 200
})

var scrollingbox2 = document.querySelector(".containerbox")
var leftbutton1 = document.getElementById("leftbtn1")
var rightbutton1 = document.getElementById("rightbtn1")

leftbutton1.addEventListener("click",function(event){
    event.preventDefault()
    scrollingbox2.style.scrollBehavior = "smooth"
    scrollingbox2.scrollLeft -= 200
})

rightbutton1.addEventListener("click",function(event){
    event.preventDefault()
    scrollingbox2.style.scrollBehavior = "smooth"
    scrollingbox2.scrollLeft += 200
})

var ratingbutton = document.getElementById("rbtn")
var ratingpopbox = document.querySelector(".ratingpopup")
var rateclose = document.getElementById("ratepopclose")

ratingbutton.addEventListener("click",function(event){
    event.preventDefault()
    ratingpopbox.style.display="block"
})
  
rateclose.addEventListener("click",function(event){
    event.preventDefault()
    ratingpopbox.style.display="none"
})

var ratingaddbox = document.querySelector(".reviewcontainer")
var nameinput = document.getElementById("nameint")
var rateinput = document.getElementById("rateint") 
var textinput = document.getElementById("textint")
var rateaddbut = document.getElementById("ratepopadd")

rateaddbut.addEventListener("click",function(){
    var div = document.createElement("div")
    div.setAttribute("class","ratingbox")
    div.innerHTML=` <h3><i class="fa-regular fa-user"></i>${nameinput.value}</h3>
    <p>${rateinput.value}</p> <p>${textinput.value}</p>`
    ratingaddbox.append(div)
    ratingpopbox.style.display="none"
})

const menu = document.querySelector(".menu")
const menulist = document.querySelector("nav ul")

menu.addEventListener("click",function(){
    menulist.classList.toggle("showmenu")
})