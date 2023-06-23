
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
let hert1 =document.querySelectorAll('.hover .fa-heart')
console.log(hert1);
for(let i=0; i<hert1.length;i++){
  hert1[i].onclick = function(){
    hert1[i].classList.toggle('active');
  }
}

  document.querySelector('.top').style.opacity='0'
  window.addEventListener('scroll',function(){
       let aboutPos=this.window.document.getElementById('project-jacket').offsetTop
       console.log(aboutPos);
      if(window.scrollY > aboutPos){
      document.querySelector('.top'). style.opacity='1'
      document.querySelector('.top').style.transition='.7s'
      }
      else{
          document.querySelector('.top').style.opacity='0'
          document.querySelector('.top').style.transition='.7s' 
      }
  })
  let topbtn=document.querySelector('.top button')
  topbtn.addEventListener('click',function(e){
      e.preventDefault()
      window.scroll({
          top:0,
          behavior:'smooth'
      })
  })
  let body =document.body
  body.style.overflow="hidden"
  document.querySelector('.loading').style.opacity='1'
  document.querySelector('.loading').style.visibility='visible'
  document.querySelector('.loading').style.transition='.7s'
  
  
  window.addEventListener('load',function(){
      this.setTimeout(function(){
          document.querySelector('.loading').style.opacity='0'
          document.querySelector('.loading').style.visibility='hidden'
          document.querySelector('.loading').style.transition='.7s'
          body.style.overflow='auto'
  
      },1000)
  })
  function countdownTimeStart(){

    var countDownDate = new Date("2023-6-1 04:34:10").getTime();
    
    // Update the count down every 1 second
    var x = setInterval(function() {
    
        // Get todays date and time
        var now = new Date().getTime();
        
        // Find the distance between now an the count down date
        var distance = countDownDate - now;
        
        
        // Time calculations for days, hours, minutes and seconds
        var days =  Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        // Output the result in an element 
          document.getElementById("day").innerHTML =  days;
    document.getElementById("hour").innerHTML =  hours;
    document.getElementById("min").innerHTML =  minutes;
    document.getElementById("sec").innerHTML =  seconds;
        
        // If the count down is over, write some text 
        if (distance < 0) {
            clearInterval(x);
            alert("This offer has already ended")
            document.getElementById("time").innerHTML = "EXPIRED";
        }
    }, 1000);
  
    }
  
  countdownTimeStart()