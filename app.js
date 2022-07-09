//Onclick Function for the nav link
let a= document.getElementById("featCard");
let b= document.getElementById("compCard");
let menu= document.querySelector('.nav');
let open= document.querySelector('.menu-logo');
let close= document.querySelector('.close-menu');
    
function showCard1(){
    b.style.display='none';
 if (a.classList.contains('d-none')){
    a.style.display='block';
    a.classList.remove('d-none');
    // console.log('show');
 }else{
    a.style.display='none';
    a.classList.add('d-none');
    //console.log('removed');
 };

};
function showCard2(){
  a.style.display='none';
    if (b.classList.contains('d-none')){
       b.style.display='block';
       b.classList.remove('d-none');
       // console.log('show');
    }else{
       b.style.display='none';
       b.classList.add('d-none');
       //console.log('removed');
    };
    
   };

   function myMenu(){
   menu.style.display='block';   
   close.style.display='block';
   }
   function closeMenu(){
      menu.style.display='none';   
      close.style.display='none';
      }




      /* When the user clicks on the button,
toggle between hiding and showing the dropdown content 
function showCard1() {
   document.getElementById("myDropdown").classList.toggle("show");
 }
 
 // Close the dropdown menu if the user clicks outside of it
 window.onclick = function(event) {
   if (!event.target.matches('.dropbtn')) {
     var dropdowns = document.getElementsByClassName("dropdown-content");
     var i;
     for (i = 0; i < dropdowns.length; i++) {
       var openDropdown = dropdowns[i];
       if (openDropdown.classList.contains('show')) {
         openDropdown.classList.remove('show');
       }
     }
   }
 }*/