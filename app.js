const slides = document.querySelectorAll('.slide');
const nextBtn = document.querySelector('.nextBtn');
const prevBtn = document.querySelector('.prevBtn');

slides.forEach(function (slide, index) {
  slide.style.left = `${index * 100}%`;
});

let currentItem = 0;

nextBtn.addEventListener('click', function () {
  currentItem++;
  carrousel();
});

prevBtn.addEventListener('click', function () {
  currentItem--;
  carrousel();
});

function carrousel() {
  // first version with slides
  // if (currentItem >= slides.length) {
  //   currentItem = 0;
  // }

  // if (currentItem < 0) {
  //   currentItem = slides.length - 1;
  // }

  // version with buttons

  if (currentItem < slides.length - 1) {
    nextBtn.style.display = 'block';
  } else {
    nextBtn.style.display = 'none';
  }

  if (currentItem > 0) {
    prevBtn.style.display = 'block';
  } else {
    prevBtn.style.display = 'none';
  }

  slides.forEach(function (slide) {
    slide.style.transform = `translateX(-${currentItem * 100}%)`;
  });
}
prevBtn.style.display = 'none';
