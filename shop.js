let page2=document.getElementById('page2') ;
let page3=document.getElementById('page3') ;
let prod9=document.getElementById('prod9')
let page1=document.getElementById('page1') ;
let container =document.getElementById('container')
let neg = document.getElementById('minus')
let plus = document.getElementById('plus')
let num =document.getElementById('number')
let rangePrise =document.getElementById('range_weight')
let targetPrice = document.getElementById('targetPrice')
let colorBlack =document.getElementById('firstCheckboxb')
let colorWhite =document.getElementById('secondCheckboxw')
let colorYellow =document.getElementById('thirdCheckboxy')
let colorRed =document.getElementById('thirdCheckboxr')
let colorBlue =document.getElementById('secondCheckboxbl')
let colorBeigeTones =document.getElementById('thirdCheckboxbt')
let show = document.getElementById('show')
let oninputs =document.getElementById("range_weight_disp")





let products=[
    {image:"assets/image/shop-1.jpg.webp",
  title :"Furry-jacket",
  prise:"59",
  color :"Blacks",
  size:"XXL",
  id:0,
  total:"59"
  },
  {image:"assets/image/shop-2.jpg.webp",
  title :"Women's sholder bag",
  prise:"49",
  color:"Blacks",
  size:"M",
  id:1,
  total:"49"
  }
  ,{image:"assets/image/shop-3.jpg.webp",
  title :"Colorful chiffon dress",
  prise:"59",
  color:"Whites",
  size:"L",
  id:2,
  total:"59"
  }
  ,{image:"assets/image/shop-4.jpg.webp",
  title :"Dark wash Xavi jeans",
  prise:"59",
  color:"Blacks",
  size:"XL",
  id:3,
  total:"59"
  }
  ,{image:"assets/image/shop-5.jpg.webp",
  title :"Ankle-cuff sandals",
  prise:"49",
  color:"Yellows",
  size:"L",
  id:4,
  total:"49"
  }
  ,{image:"assets/image/shop-6.jpg.webp",
  title :"Water resistant zips backpack",
  prise:"59",
  color:"Blacks",
  size:"L",
  id:5,
  total:"59"
}
  ,{image:"assets/image/shop-7.jpg.webp",
  title :"Pandent earring",
  prise:"59",
  color:"Blues",
  size:"S",
  id:6,
  total:"59"
}
  ,{image:"assets/image/shop-8.jpg.webp",
  title :"Silk skarf",
  prise:"59",
  color:"Reds",
  size:"S",
  id:7,
  total:"59"
}
  ,{image:"assets/image/shop-9.jpg.webp",
  title :"Women tall boats",
  prise:"59",
  color:"Blacks",
  size:"XL",
  id:8,
  total:"59"
}
  ]




rangePrise.onclick=function(){
  console.log(parseInt(rangePrise.value))
  if( rangePrise.value == 100 )
  rangePrise.style.backgroundColor="red"
}
dispaly(filter(0)); 
show.onclick=function(){
let filterdColors = choosecheckValues("messageCheckbox")
let filterdSizes = choosecheckValues("messageCheckboxS") 

 let filteredPrises=0|parseInt(oninputs.value)

  let targetProductsColors = filterColors(filterdColors);
 let targetProductsSize = filterSizes(targetProductsColors ,filterdSizes);
 let targetproductsPrices = filterRangePrise(targetProductsColors ,targetProductsSize , filteredPrises)


 dispaly(targetproductsPrices)

  }
function choosecheckValues(className ){
  var checkedValues = [];
  var inputElements = document.getElementsByClassName(className);
 for(var i=0; inputElements[i]; ++i){
      if(inputElements[i].checked){
        checkedValues.push(inputElements[i].value);
         
      }
}
return checkedValues
}

page1.onclick=function(){
let targetProducts = filter(0);

dispaly(targetProducts)
}
page2.onclick=function(){
  let targetProducts = filter(1);
 
  dispaly(targetProducts)
}
page3.onclick=function(){
    let targetProducts = filter(2);
   
    dispaly(targetProducts)
}



function filterColors (targetColor){ 
  let arrayColors = [] 
  for (const color of targetColor) {
    let returnArray = products.filter(yy=> yy.color===color) 
    arrayColors.push(...returnArray)                                                             
  }
  return arrayColors;
}

  function filterRangePrise(arrayofColors , arrayofSizes , targetPrice){
    let arrayPrise
   

    if(arrayofColors==0 && arrayofSizes==0){
      arrayPrise=products;
    }
    else if(arrayofSizes!=0){
      arrayPrise=arrayofSizes
     
   
    }    
    else
      arrayPrise=arrayofColors
    
   
    let returnArray
    if(targetPrice == 0 )
        returnArray = arrayPrise
    else{
     returnArray=arrayPrise.filter(yy=>parseInt(yy.prise)=== targetPrice)
      
    }

      return returnArray
      
    }
  

function filterSizes (arrayofColors ,targetSize){ // [l , M]
  if(arrayofColors==0){
    arrayofColors=products;
  }
  let arraySizes
  if(targetSize == false )
    arraySizes = arrayofColors
  else
    arraySizes = []
   
  for (const size of targetSize) {
    let returnArray = arrayofColors.filter(yy=> yy.size===size) 
    arraySizes.push(...returnArray)      
  }
  return arraySizes;
}


function filter(pageNumber){
let filterdProducts = products.slice(pageNumber*3,(pageNumber+1) *3); 

return filterdProducts;
}

function dispaly(elements){
    // console.log(elements);
let result =``

    for(let i=0;i<elements.length;i++){
      
result+=
`
<div class="col-lg-4 col-md-5">
<div class="product-item  position-relative">
        <img src=${elements[i].image} alt="coate" class="w-100">

        <div class="lable green ">New</div>
        <div class="hover">
        <div class="bar text-center  ">
           <a href="#"><i class="bar1 fa-solid fa-up-right-and-down-left-from-center  "></i></a>
         <a href='#'> <i class="heart fa-regular fa-heart " onclick="changeColor(${i})" ></i></a>
          <a href="#" onclick="addToCart(${elements[i].id})"> <i class="bar1 fa-solid fa-cart-shopping " ></i></a>
     
      </div>
      </div>
<div class="product-info text-center">
  <div class="prod-name">${elements[i].title}</div>
  <div class="star-ratio">
    <i class="fa-solid fa-star "></i>
    <i class="fa-solid fa-star "></i>
    <i class="fa-solid fa-star "></i>
    <i class="fa-solid fa-star "></i>
    <i class="fa-solid fa-star "></i>
  </div>
<div class="prod-price">$ ${elements[i].prise}</div>
</div>
</div> 
</div>

`
   }

container.innerHTML=result
}

var cart;
  function addToCart(i){
    if(localStorage.getItem('cart')){
      cart = JSON.parse(localStorage.getItem('cart'))
    }else{
      cart = []
    }
    // console.log(products[i].id);
    let isValid = 1;
    for(let j=0; j<cart.length; j++){
      if(products[i].id==cart[j].id){
        isValid=0;
        break;
      }
    }

    if(isValid==1){
      cart.push(products[i])
      localStorage.setItem('cart',JSON.stringify(cart))
      alert('the product added successful');
    }else{
      alert('the product already exists');
    }
  }
  
  let hert2 =document.querySelectorAll('.product-item .bar .heart')
console.log(" this heart");
console.log(hert2);
 
 function changeColor(i){
  let hert2 =document.querySelectorAll('.product-item .bar .heart')
console.log(i);
console.log(hert2[i]);
    hert2[i].classList.toggle("active");
  
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