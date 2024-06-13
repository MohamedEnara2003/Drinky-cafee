"use strict";

////////////////////////////////////////////////////////////////
//intro page

const introWeb = document.querySelector('.intro__page')
const logoIntro = document.querySelector('.logo__intro')
const logoIntro2 = document.querySelector('.logo__intro-2')

const introPage = setTimeout(function(){
  introWeb.classList.add('hidden')
},1000)

const IntroImage = setTimeout(function(){
  logoIntro.classList.add('hidden')
  logoIntro2.classList.add('hidden')
},1000)
//
//////////////////////////////////////////////////////////////
// nav list screen 350px to 900px
const btnList = document.querySelector(".fa-list-ul");
const navList = document.querySelector(".nav-list");
const Blur = document.querySelector(".blur");

btnList.addEventListener("click", function (e) {
  e.preventDefault();

  if (btnList.className == "fa fa-list-ul list") {
    navList.style.width = "65%";
    btnList.classList.remove("list");
    Blur.classList.remove("hidden");
  } else {
    navList.style.width = "0%";
    btnList.classList.add("list");
    Blur.classList.add("hidden");
  }
});

Blur.addEventListener('click' , function(){
  navList.style.width = "0%";
  btnList.classList.add("list");
  Blur.classList.add("hidden");
})

/////////////////////////////////////////////////////////////////////////

// const Sliders = document.querySelectorAll('.sliders')
const Slide = document.querySelectorAll('.slide')
const Slider__image = document.querySelectorAll('.image__slide')
const btnLeftSlide = document.querySelector('.btn__left')
const btnRightSlide = document.querySelector('.btn__right')

let curslide = 0;
const maxSlide = Slide.length;

const gotoSlide = function(slider){
  Slide.forEach((s,i) => s.style.transform  = `translateX(${100 * (i-slider)}%)`)
}
gotoSlide()



const nextSlide = function(){
  if(curslide === maxSlide - 1){
    curslide = 0;
  }else{
    curslide ++;
  }
  gotoSlide(curslide)
}

const prevSlide = function(){
  if(curslide === 0){
  curslide = maxSlide -1
  }else{
   curslide --;
  }
  gotoSlide(curslide)
}

btnRightSlide.addEventListener('click',nextSlide)
btnLeftSlide.addEventListener('click',prevSlide)

document.addEventListener('keydown',function(e){
  if(e.key === 'ArrowLeft') prevSlide ()
  if(e.key === 'ArrowRight') nextSlide ()
})


const btnSizeSlide = document.querySelector('.large__menu')

const query = window.matchMedia("(min-width: 1024px)")
const query2 = window.matchMedia("(min-width: 1536px)")

btnSizeSlide.addEventListener('click',function(e){
    e.preventDefault()

  if(btnSizeSlide.className == 'large__menu bigger'){
    Slider__image.forEach(m => m.style.width = '280px')
    Slider__image.forEach(m => m.style.height = '200px')
    Slider__image.forEach(m => m.style.top = '60px')
    Slider__image.forEach(m => m.style.borderRadius = '15px')
    if(query.matches){
      Slider__image.forEach(m => m.style.width = '450px')
      Slider__image.forEach(m => m.style.height = '300px')
      Slider__image.forEach(m => m.style.top = '70px')
      Slider__image.forEach(m => m.style.borderRadius = '15px')
    }
    if(query2 .matches){
      Slider__image.forEach(m => m.style.width = '600px')
      Slider__image.forEach(m => m.style.height = '400px')
      Slider__image.forEach(m => m.style.top = '80px')
      Slider__image.forEach(m => m.style.borderRadius = '15px')
    }
    btnSizeSlide.style.backgroundColor = 'transparent'
    btnSizeSlide.classList.remove('bigger')
  }else{
    btnSizeSlide.classList.add('bigger')
    btnSizeSlide.style.backgroundColor = '#32cd32'
    Slider__image.forEach(m => m.style.width = '150px')
    Slider__image.forEach(m => m.style.height = '150px')
    Slider__image.forEach(m => m.style.borderRadius = '35%')
    Slider__image.forEach(m => m.style.top = '90px')
    if(query.matches){
      Slider__image.forEach(m => m.style.width = '250px')
      Slider__image.forEach(m => m.style.height = '250px')
      Slider__image.forEach(m => m.style.borderRadius = '35%')
      Slider__image.forEach(m => m.style.top = '90px')
    }
    if(query2.matches){
      Slider__image.forEach(m => m.style.width = '300px')
      Slider__image.forEach(m => m.style.height = '300px')
      Slider__image.forEach(m => m.style.borderRadius = '35%')
      Slider__image.forEach(m => m.style.top = '90px')
    }
  }
})
//////////////////////////////////////////////////////////////////////////
// location map

// const locationMap = document.querySelector('.location')

// if(navigator.geolocation)
// navigator.geolocation.getCurrentPosition(function(position){

//   const {latitude}  = position.coords;
//   const {longitude} = position.coords;
//   console.log(latitude , longitude);
// console.log
// (`https://www.google.com/maps/dir/30.081024,31.2049664//@${latitude},${longitude},10z/data=!4m4!4m3!1m1!4e1!1m0?entry=ttu`);
  
  
// },function(){
// })
//////////////////////////////////////////////////////////////////////////////////

const navFull = document.querySelector('.navigation-full')
const AllSections = document.querySelector('section')

const stickyNav = function(entries){
  const [entry] = entries;
  if(!entry.isIntersecting){
    navFull.classList.add("fixed")
  }else{
    navFull.classList.remove("fixed")
  }
}
const sectionObsever = new IntersectionObserver(stickyNav , {
  root:null,
  threshold: 0.15,
})
sectionObsever.observe(AllSections)

//////////////////////////////////////////////////////////////////////////////////
// scroll texts

const textHeader = document.querySelector('.text-header ')
const Header = document.querySelector('.header ')

const moveTextHead =function(entries){
  const [entry] = entries
  if(entry.isIntersecting){
    textHeader.style.transform = "translateX(0%)" ;
  }
}
const textHeaderObserver = new IntersectionObserver(moveTextHead,{
  root:null,
  threshold: 0
})
textHeaderObserver.observe(Header)
////////////////////////////////////////////////////////////////
const menu = document.querySelector('.menu ')
const menuLeft= document.querySelector('.menu__left')
const menuRight = document.querySelector('.menu__right')
const text__menu = document.querySelector('.text__menu')

const moveMenu =function(entries){
  const [entry] = entries
  if(entry.isIntersecting){
    menuLeft.style.transform = "translateX(0%)" ;
    menuRight.style.transform = "translateX(0%)" ;
    text__menu.style.opacity= 1 ;
  }
}
const moveMenuObserver = new IntersectionObserver(moveMenu, {
  root:null,
  threshold: 0.15,
})
moveMenuObserver.observe(menu)
/////////////////////////////////////////////////////////////////////
const sliders = document.querySelector('.sliders')
const text__slide = document.querySelector('.parent-text__slide')

const opacityMenuBar =function(entries){
  const [entry] = entries
  if(entry.isIntersecting){
  Slide.forEach(s => s.style.opacity= 1  );
  btnLeftSlide.style.opacity= 1 ;
  btnRightSlide.style.opacity= 1 ;
  text__slide.style.opacity= 1 ;
  }
}
const MenuBarObserver = new IntersectionObserver(opacityMenuBar,{
  root:null,
  threshold: 0.15,
})
MenuBarObserver.observe(sliders)
/////////////////////////////////////////////////////////////////////
const review = document.querySelectorAll('.review')
const Allreviews = document.querySelector('.Allreviews')
const MenuBarText = document.querySelector('.parent-text__slide')
const MoveReview =function(entries){
  const [entry] = entries
  if(entry.isIntersecting){
  review.forEach(s => s.style.transform = "translateX(0%)" );
  }
}
const ReviewObserver = new IntersectionObserver(MoveReview,{
  root:null,
  threshold: 0.15,
})
ReviewObserver.observe(Allreviews)
/////////////////////////////////////////////////////////////////
const about = document.querySelector('.about')
const h1__about = document.querySelector('.h1__about')
const p__about = document.querySelector('.p__about')
const btnLoction__about = document.querySelector('.btn-loction__about')

const revealAbout=function(entries){
  const [entry] = entries
  if(entry.isIntersecting){
    h1__about.style.transform = "translateX(0%)"  ;
    p__about.style.opacity= 1  ;
    btnLoction__about.style.transform = "translateX(0%)"  ;
  }
}
const aboutObserver = new IntersectionObserver(revealAbout,{
  root:null,
  threshold: 0.15,
})
aboutObserver.observe(about)
////////////////////////////////////////////////////////////////////
const contact = document.querySelector('.contact')
const h1__contact= document.querySelector('.h1__contact')
const Navsocial = document.querySelector('.nav--links__contact')
const nav__contact = document.querySelector('.nav__contact')
const btnLoction__contact = document.querySelector('.btn-loction__contact')
const h2__contact = document.querySelector('.h2__contact')

const revealContact =function(entries){
  const [entry] = entries
  if(entry.isIntersecting){
  h1__contact.style.transform = "translateX(0%)";
  Navsocial.style.opacity= 1;
  nav__contact.style.opacity= 1;
  btnLoction__contact.style.opacity= 1;
  h2__contact.style.transform = "translateX(0%)"  ;
  contact.style.borderBottom = '80px' 
  }
}
const ContactObserver = new IntersectionObserver(revealContact ,{
  root:null,
  threshold: 0.15,
})
ContactObserver.observe(contact)
//////////////////////////////////////////////////////////////////////////////



