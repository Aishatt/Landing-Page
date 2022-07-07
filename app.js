//Onclick Function for the nav link
let a= document.getElementById("featCard");
let b= document.getElementById("compCard");
    
function myFunction(){
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
function myFunction2(){
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