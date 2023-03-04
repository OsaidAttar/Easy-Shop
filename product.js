let neg = document.getElementById('minus')
let plus = document.getElementById('plus')
let num =document.getElementById('number')
let addCart =document.getElementById('addCart')
let pri = document.getElementById('pri')
let product = document.getElementById('newz')
let hert =document.querySelectorAll('.bar .fa-heart')
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
console.log(hert);
// neg.onclick=function(e){
//    let count=num.value
//     console.log(count);
//     e.preventDefault();
//     count--
//     num.setAttribute("value" , count)
//   }
//   plus.onclick=function(){
//   let  count=num.value
//     console.log(count);
//     // e.preventDefault();
//     count++
//     num.setAttribute("value" , count)
//   }



  let cartProduct =[{
    image:"assets/image/discount/product-1.jpg.webp",
    prise:"75.0" ,
    total:"75.0"
    }
    ]
  
    let products=[
      {
        image:"assets/image/discount/product-1.jpg.webp",
        prise:"75.0" ,
        total:"75.0"
        },
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
    let Ids=[{
      id:0,
    },
    {
      id:1,
    },
    {
      id:2,
    },
    {
      id:3,
    },
  ]
    if(JSON.parse(localStorage.getItem('cart'))==null){
     var cart=[];
    
  }
  else{
  var cart =JSON.parse(localStorage.getItem('cart'));
 
    
  dispalycart(cart);
  
 
  }
    // filter(0)
    // function filter(NumberoFImage){
    //   let filterdProducts
      
    //    filterdProducts = products.slice(NumberoFImage,NumberoFImage+1);
    //   console.log(filterdProducts);
      
      
    //   dispalycart(filterdProducts) 
    //   return filterdProducts;
    //   }
    // addCart.onclick=function(){
      
    //     filterCartImg();
        
    //   }
    // function filterCartImg(){
     
    //   let filterProductCart = cartProduct.slice(0)
    //   localStorage.setItem('cart',JSON.stringify(cart)) =filterProductCart
      
    //   return filterProductCart;
    // }
    var cart=JSON.parse(localStorage.getItem('cart'))
    dispalycart(cart)
  
  function dispalycart(element){
  let result =``

    for(let i=0;i<element.length;i++){
        result+=
          `  
            <div class="col-md-1" >
            
        </div>
      
        <div class="col-md-3 mx-5 allimgs">
            <div class="allImg m-auto">
                <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                      <div class="carousel-item active">
                        <img src="${element[i].image}" alt="...">
                        
                      </div>
                      <div class="carousel-item">
                        <img src="${element[i].image}" class="object-fit-cover w-100" alt="...">
                      </div>
                      <div class="carousel-item">
                        <img src="${element[i].image}"  alt="...">
                      </div>
                      <div class="carousel-item">
                        <img src="${element[i].image}" " class="object-fit-none" alt="...">
                        
                      </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                      <span class="carousel-control-prev-icon bg-dark" aria-hidden="true"></span>
                      <span class="visually-hidden bg-danger">Previous</span>
                    </button>
                    <button class="carousel-control-next text-dark" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                      <span class="carousel-control-next-icon text-dark bg-dark" aria-hidden="true"></span>
                      <span class="visually-hidden">Next</span>
                    </button>
                  </div>
            </div>
        </div>
        <div class="col-md-6 ms-5 tit ">
            <div class="infoImg">
            <p>**************************************************************************************</p>
                <h2>${element[i].title}</h2>
                <p>Brand: SKMEIMore Men Watches from SKMEI</p>
            </div>
            <div class="rating ">
                <div class="stars">
              <i class="fa-solid fa-star "></i>
              <i class="fa-solid fa-star "></i>
              <i class="fa-solid fa-star "></i>
              <i class="fa-solid fa-star "></i>
              <i class="fa-solid fa-star "></i>
            </div>
              <div class="view"> <p>(138) reviews</p></div>
             
            </div>
            <div class="productPrice ">
                <div class="priceNew" id="pri" value="75.0">$ ${element[i].prise} <span class="prev-price text-decoration-line-through m-3" >$ 83.0</span></div>
            </div>
            <div class="paraImg py-2">
                <p>Nemo enim ipsam voluptatem quia aspernatur aut odit aut loret fugit, sed quia consequuntur magni lores eos qui ratione voluptatem sequi nesciunt.</p>
            </div>
            <div class="quantity d-flex mb-4 ">
               
            
            <a href="cart.html" <button class="site-btn" type="submit" id="addCart"><i class="fa-regular fa-clipboard" ></i>  Add to Card</button></a>
                <a href="#"><i class="hert fa-regular fa-heart"></i></a>
                <a href="#" class="slide"><i class="fa-solid fa-sliders"></i></a>

            </div>
            <hr>
            <div class="productWeight ">
              <ul class="p-0">
                <li class="d-flex">
                  <p class="me-5">Availability:</p>
                  <div class="stockCheckbox">
                    <label for="stockin">
                      
In Stock
                      <input type="checkbox"id="stockin" class="ms-1">
                     
                    </label>
                  </div>
                </li>
                <li class="d-flex">
                  <p class="me-5">Availability Color:</p>
                  <div class="stockRiduo d-flex ">
                    <form class="d-flex">
                    
                      <input type="radio" name="colorRadio" id="red" checked class="red me-1">
                      
                    <input type="radio" name="colorRadio" id="black" class="black me-1">
                    <input type="radio" name="colorRadio" id="blue" class="green me-1"> 
               
                  </form>
                 
                    
                  </div>
                </li>
              
              <li class="d-flex">
                <p class="me-5">Availability Size:</p>
                <div class="stockSize d-flex ">
                  
                <a href="#" onclick="changeActiveClass(this)"> <label class="size me-1"   >
                    <input type="radio" name="colorRadio" id="red" checked class="xxl me-1">
                    xxl</label></a>
                 <a href="#" onclick="changeActiveClass(this)"> <label class="size me-1" >xl</label></a>
                 <a href="#" onclick="changeActiveClass(this)"> <label class="size me-1">m</label></a>
                 <a href="#" onclick="changeActiveClass(this)">  <label  class="size me-1" >s</label> </a>
               
                  
                </div>
              </li>
              <li class="d-flex">
                <div class="promo d-flex">
                <p class="me-5">Promotions:</p>
                <p> Free shipping</p>
              </div>
              </li>
              </ul>
            </div>
        </div>

      
       
  `
  }
  // console.log(product);
  product.innerHTML=result;
 
  }

// var size=document.getElementsByClassName('size')
// console.log("nymn");
// console.log(size);


  function changeActiveClass (i){
    let targetElement = i 
    let parent = targetElement.parentElement ; 
    console.log(parent);
    let children = parent.children
    for (const child of children) {
      child.firstElementChild.classList.remove("active")
    }
    console.log(targetElement.firstElementChild);
    targetElement.firstElementChild.classList.add("active")
    // for (const s of size) {
    //   s.classList.remove("active")  
    // }

    // size[i].classList.add("active")
  }
   for(let i=0; i<hert.length;i++){
     hert[i].onclick = function(){
      let hert =document.querySelectorAll('.bar .fa-heart')
      hert[i].classList.toggle('active');
     }
    }