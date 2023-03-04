let user =document.getElementById('user')
let email =document.getElementById('email')
let password = document.getElementById('pass')
var register =document.getElementById('regi')
let phone =document.getElementById('phone')
let city =document.getElementById('city')
let UNIVERSITY = document.getElementById('UNIVERSITY')
let age = document.getElementById('age')
let date =document.getElementById('date')
let man =document.getElementById('man')
let woman =document.getElementById('woman')
var arrayLogin

if(JSON.parse(localStorage.getItem('arrayLogin'))==null){
  arrayLogin=[];
}
else{
var arrayLogin =JSON.parse(localStorage.getItem('arrayLogin'));
//displayData();
}


register.disabled = true;   
date.addEventListener('keyup', function(event){
   
   let val = event.target.value;  
   
   if(val===''){
    register.disabled = true;  
   }
   else{
    register.disabled = false;  
   }
   
});



    function addAccount(){
        var registers =
        {
          user:user.value,
          email:email.value,
          password:password.value
        }
      
        arrayLogin.push(registers)
        localStorage.setItem('arrayLogin',JSON.stringify(arrayLogin))
       
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Courses added successfully and go to the page Login',
          showConfirmButton: false,
          timer: 2000
        })
      
       }
        register.onclick=function(){
 
  addAccount()
  
  clearInputs()
  register.classList.remove('disabled')
 }
 function clearInputs(){
  user.value='';
  email.value='';
  password.value='';
  phone.value='';
  city.value='';
  UNIVERSITY.value='';
  age.value=''
 
}
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
// let products=[
//     {image:"assets/image/shop-1.jpg.webp",
//   title :"Furry-jacket",
//   prise:"59",
//   color :"Blacks",
//   size:"XXL",
//   id:0,
//   total:"59"
//   },
//   {image:"assets/image/shop-2.jpg.webp",
//   title :"Women's sholder bag",
//   prise:"49",
//   color:"Blacks",
//   size:"M",
//   id:1,
//   total:"49"
//   }
//   ,{image:"assets/image/shop-3.jpg.webp",
//   title :"Colorful chiffon dress",
//   prise:"59",
//   color:"Whites",
//   size:"L",
//   id:2,
//   total:"59"
//   }
//   ,{image:"assets/image/shop-4.jpg.webp",
//   title :"Dark wash Xavi jeans",
//   prise:"59",
//   color:"Blacks",
//   size:"XL",
//   id:3,
//   total:"59"
//   }
//   ,{image:"assets/image/shop-5.jpg.webp",
//   title :"Ankle-cuff sandals",
//   prise:"49",
//   color:"Yellows",
//   size:"L",
//   id:4,
//   total:"49"
//   }
//   ,{image:"assets/image/shop-6.jpg.webp",
//   title :"Water resistant zips backpack",
//   prise:"59",
//   color:"Blacks",
//   size:"L",
//   id:5,
//   total:"59"
//   }
//   ,{image:"assets/image/shop-7.jpg.webp",
//   title :"Pandent earring",
//   prise:"59",
//   color:"Blues",
//   size:"S",
//   id:6,
//   total:"59"
//   }
//   ,{image:"assets/image/shop-8.jpg.webp",
//   title :"Silk skarf",
//   prise:"59",
//   color:"Reds",
//   size:"S",
//   id:7,
//   total:"59"
//   }
//   ,{image:"assets/image/shop-9.jpg.webp",
//   title :"Women tall boats",
//   prise:"59",
//   color:"Blacks",
//   size:"XL",
//   id:8,
//   total:"59"
//   }
//   ]
  
//   let cart;
//   if(localStorage.getItem('cart')){
//     cart=JSON.parse(localStorage.getItem('cart'))}
//     else
//     cart=[];