const full_bcak= document.querySelector(".full-back");
const line1 = document.querySelector(".line1");
const line2 = document.querySelector(".line2");
const line3 = document.querySelector(".line3");
const nav=document.querySelector("nav");
const hamburger =document.querySelector(".hamburger");
const hamburger_line= document.querySelectorAll(".hamburger-line");

hamburger.addEventListener("click",()=>{
  full_bcak.classList.toggle("open");
  line1.classList.toggle("open");
  line2.classList.toggle("open");
  line3.classList.toggle("open");
  nav.classList.toggle("open");
  hamburger_line.classList.toggle("open");
  hamburger.classList.toggle("open");
})
 

full_bcak.addEventListener("click",()=>{
  full_bcak.classList.remove("open");
  line1.classList.remove("open");
  line2.classList.remove("open");
  line3.classList.remove("open");
  nav.classList.remove("open");
  hamburger_line.classList.remove("open");
  hamburger.classList.remove("open");
})





// $(function() {
//   alert('OK!');
// });



$('.center').slick({
  infinite: true,
  dots: true,
  centerMode: true, //要素を中央寄せ
  centerPadding: '10%', //両サイドの見えている部分のサイズ
  autoplay: true,
  speed: 500,
});


