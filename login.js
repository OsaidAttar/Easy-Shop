let email =document.getElementById('email')
let password = document.getElementById('pass')
let login = document.getElementById('log')
let navbar =document.getElementById('navbar')


window.addEventListener("scroll",function(){
    if(window.scrollY > 50){
        navbar.classList.add('new-bg-color')
        navbar.style.transition='1s'
    }
    else{
        navbar.classList.remove('new-bg-color')
        navbar.style.transition='1s'
        
    }
    
})
let statuse = false
var arrayLogin
if(localStorage.getItem('arrayLogin')){
    arrayLogin=JSON.parse(localStorage.getItem('arrayLogin'))

}else{
    arrayLogin = []
}

function checkLogin(){
let user =arrayLogin.find(u=> u.email===email.value)
if(user){
    if(user.password===password.value){
        statuse=true;
    }
    else{
        statuse=false
    }
}
else{
    statuse=false
    
}

}


login.onmouseenter=function(){
    checkLogin()
    if(statuse==true){
        location.href="shop.html"
    }
    else{
        escap()
    }
}

function escap() {
    if(login.classList.contains("l1")){
        login.classList.remove("l1")
        login.classList.add("l2")
    }
    else if(login.classList.contains("l2")){
        login.classList.remove("l2")
        login.classList.add("l1")
    }
    else{
        login.classList.add("l1")
    }
    // if(left== "20%")
    //     login.style.left = "60%"
    // else if(left == "60%")
    //     login.style.left = "20%"
}