let hamburguer = document.querySelector(".hamburguer")
let navmenu = document.querySelector(".navmenu")
let titulo = document.querySelector(".titulo")
let slidelist = document.querySelector(".slide-list")
let areaSobreNos = document.querySelector(".areaSobreNos")//esses elementos com mesma class ficam dentro de um array
let PrincipaisProduções = document.querySelector(".PrincipaisProduções")
let areaSlide2 = document.querySelector('.areaSlide2')
let areaArtistas = document.querySelector(".areaArtistas")
let btnTopo = document.querySelector(".btnTopo")


hamburguer.addEventListener("click", xmenu)
function xmenu(event){
hamburguer.classList.toggle("virarX")
navmenu.classList.toggle("ExpandirMenu")
titulo.classList.toggle("ExpandirMenu")
}


window.onload = function(){
 
if(screen.width <=  991.98){
    areaSobreNos.classList.add("aparecer")
    PrincipaisProduções.classList.add("aparecer")
    areaArtistas.classList.add("aparecer")
}
}

let alturaDoWindow = window.innerHeight 
window.addEventListener("scroll", ()=>{


if(document.documentElement.scrollTop > 1300){
  areaArtistas.classList.add("aparecer")
}
 else if(document.documentElement.scrollTop >= 800){
    PrincipaisProduções.classList.add("aparecer")
}

else if(document.documentElement.scrollTop >= 170){
    areaSobreNos.classList.add("aparecer")
}



if(document.documentElement.scrollTop < 170){
  if(screen.width <=  991.98){
    areaSobreNos.classList.add("aparecer")
}else{
  areaSobreNos.classList.remove("aparecer")
}
}

else if(document.documentElement.scrollTop < 750){
  if(screen.width <=  991.98){
    areaSobreNos.classList.add("aparecer")
}
else{
  PrincipaisProduções.classList.remove("aparecer")
}
}

else if(document.documentElement.scrollTop < 1140){
  if(screen.width <= 991.98){
    areaSobreNos.classList.add("aparecer")
}else{
  areaArtistas.classList.remove("aparecer")
}
}

  
}

)

window.addEventListener("scroll", ()=>{
  if (document.documentElement.scrollTop > 800) {
    btnTopo.classList.add("aparecer")
  } 
  else if(document.documentElement.scrollTop < 280){
    btnTopo.classList.remove("aparecer")
  }
})

let areaSlide = document.querySelector(".areaSlide");

$(document).ready(function(){
    var slider = $(areaSlide);

slider.slick({

slidesToShow: 1,/* define o número de slides a serem exibidos simultaneamente no slideshow.*/
slidesToScroll: 1,/* define o número de slides que serão pulados*/ 
autoplay: true,/*define se o slideshow deve ser reproduzido automaticamente ou não*/ 
autoplaySpeed: 1000,//define o tempo em milissegundos entre cada transição de slide, quando o autoplay está ativado
arrows: false,//define se as setas de navegação devem ser exibidas ou não.
dots: false,//define se os pontos indicadores devem ser exibidos ou não.
draggable: true//define se o usuário pode arrastar o slide com o mouse ou o toque.
});
  
var resetInterval = function() {
  clearInterval(interval);
   interval = setInterval(function() {
      slider.slick('slickNext');
    }, 2000);
  };
  
var interval = setInterval(function() {
    slider.slick('slickNext');
}, 2000);
  
slider.on('mousedown', function() {
resetInterval();
});
  
slider.on('touchstart', function() {
resetInterval();
});
  
slider.on('keydown', function() {
resetInterval();
});
});

$('.areaSlide2').slick({
infinite: false,
speed: 300,
slidesToShow: 3,
slidesToScroll: 4,
arrows: false,
dots:false,

});