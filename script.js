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
 
if(screen.width <=  576.98){
    areaSobreNos.classList.add("aparecer")
}
document.documentElement.scrollTop = 0
}


if(screen.width <=  576.98){
window.addEventListener("scroll", ()=>{
 
  if(document.documentElement.scrollTop > 1066){
    areaArtistas.classList.add("aparecer")
 }
    
else if(document.documentElement.scrollTop > 667){
    PrincipaisProduções.classList.add("aparecer")
}

if(document.documentElement.scrollTop < 667){
    PrincipaisProduções.classList.remove("aparecer")
}
else if(document.documentElement.scrollTop < 1066){
    areaArtistas.classList.remove("aparecer")
}

})
 
}


if(screen.width >=  576 && screen.width <= 991.98){
    areaSobreNos.classList.add("aparecer")
    PrincipaisProduções.classList.add("aparecer")
    areaArtistas.classList.add("aparecer")
}

if(screen.width >=  992){

window.addEventListener("scroll", ()=>{

//APARECENDO========================================
if(document.documentElement.scrollTop > 1200){
    areaArtistas.classList.add("aparecer")
}

else if(document.documentElement.scrollTop > 796){
    PrincipaisProduções.classList.add("aparecer")
}
else if(document.documentElement.scrollTop > 394){
    areaSobreNos.classList.add("aparecer")
}

//DESAPARECENDO========================================
if(document.documentElement.scrollTop < 394){
    areaSobreNos.classList.remove("aparecer")
}
else if(document.documentElement.scrollTop < 796 ){
    PrincipaisProduções.classList.remove("aparecer")
}
else if(document.documentElement.scrollTop < 1200){
    areaArtistas.classList.remove("aparecer")
}
})

}

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
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    arrows: false,
    dots: false,
    draggable: true,
    pauseOnHover: true,
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
    clearInterval(interval);
    slider.slick('slickPause');
  });

  slider.on('mouseup', function() {
    resetInterval();
  });

  slider.on('touchstart', function() {
    clearInterval(interval);
    slider.slick('slickPause');
  });

  slider.on('touchend', function() {
    resetInterval();
  });

  slider.on('keydown', function() {
    resetInterval();
  });

  slider.on('beforeChange', function() {
    slider.slick('slickPause');
  });

  slider.on('afterChange', function() {
    slider.slick('slickPlay');
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
