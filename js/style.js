const imageCarousel = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
  ];


  const before = document.querySelector('.before');
const after = document.querySelector('.after');

const contrPlayStop = document.getElementById('controller-play-stop');
const contrRightLeft = document.getElementById('controller-right-left');

const slides = document.querySelector('.slides');
const preview = document.querySelector('.preview');

let currentSlide = 0

createdSlide ();

const allSlide = document.querySelectorAll('.slide');
const allFilterId = document.querySelectorAll('img.filter-id')
const allBoxPreview = document.querySelectorAll('.box-preview')
allSlide[0].classList.add('active');
allFilterId[0].classList.remove('filter-on');


let playStopInt;
let leftRightContr = false;

// Controlli

contrPlayStop.addEventListener('click',
  ()=>{
    if (contrPlayStop.classList.contains("fa-play")){
      modContrPlay (contrPlayStop, "fa-play", "fa-stop");
      autoPlay();
    }
    else{
      modContrPlay (contrPlayStop, "fa-stop", "fa-play");
      autoStop ();
    }
  }
)

contrRightLeft.addEventListener('click',
  ()=>{
    if (contrRightLeft.classList.contains("fa-rotate-left")){
      modContrPlay (contrRightLeft, "fa-rotate-left", "fa-rotate-right");
      leftRightContr = true;
    }
    else{
      modContrPlay (contrRightLeft, "fa-rotate-right", "fa-rotate-left");
      leftRightContr = false;
    }
  }
)

allBoxPreview.forEach((item, index)=>{
  item.addEventListener('click',
    function (){
      
      changeCurrentSlide (index);
    }
  )
})

after.addEventListener('click',

  function(){
    if( currentSlide < (imageCarousel.length - 1)){
      changeCurrentSlide (currentSlide + 1);
    }
    else{
      changeCurrentSlide (0)
    }
  }

)

before.addEventListener('click',

  function(){
    if(currentSlide > 0){
      changeCurrentSlide (currentSlide - 1);
    }
    else{
      changeCurrentSlide (imageCarousel.length -1)
    }
    
  }

)








