let slides = Array.from(document.querySelectorAll('.slider-content'))
let buttonNext = document.querySelector('.slider-next-slide')
let buttonPrev = document.querySelector('.slider-previous-slide')
let currentSlideArr = Array.from(document.querySelectorAll('.current-slide'))
let currentSlide = 0

function Hide (arr, display) {
  for (let i = 0; i < arr.length; i++) {
    arr[i].style.display = display
  }
}

function Show (arr, index, dispaly) {
  arr[index].style.display = dispaly
}

Hide(slides, 'none')

Show(slides, currentSlide, 'block')

buttonNext.onclick = () => {
  (currentSlide == 4) ? currentSlide = 0 : currentSlide += 1
  if (currentSlide == 0) {
    currentSlideArr[currentSlide + 4].classList.remove('js-current-slide-class')
  } else {
    currentSlideArr[currentSlide - 1].classList.remove('js-current-slide-class')
  }
  Hide(slides, 'none')
  Show(slides, currentSlide, 'block')
  currentSlideArr[currentSlide].classList.add('js-current-slide-class')
}

buttonPrev.onclick = () => {
  (currentSlide == 0) ? currentSlide = 4 : currentSlide -= 1
  console.log(currentSlide)
  if (currentSlide == 4) {
    currentSlideArr[currentSlide - 4].classList.remove('js-current-slide-class')
  } else {
    currentSlideArr[currentSlide + 1].classList.remove('js-current-slide-class')
  }
  Hide(slides, 'none')
  Show(slides, currentSlide, 'block')
  currentSlideArr[currentSlide].classList.add('js-current-slide-class')
}

let memberButtonNext = document.querySelector('.member-slider-next-slide')
let memberButtonPrev = document.querySelector('.member-slider-previous-slide')
let memberCurrentSlideArr = Array.from(document.querySelectorAll('.member-current-slide'))
let memberSlides = Array.from(document.querySelectorAll('.member-slider-content-item'))
let memberCurrentSlide = 0

Hide(memberSlides, 'none')
Show(memberSlides, memberCurrentSlide, 'block')

memberButtonNext.onclick = () => {
  (memberCurrentSlide == 4) ? memberCurrentSlide = 0 : memberCurrentSlide += 1
  if (memberCurrentSlide == 0) {
    memberCurrentSlideArr[memberCurrentSlide + 4].classList.remove('js-current-slide-class')
  } else {
    memberCurrentSlideArr[memberCurrentSlide - 1].classList.remove('js-current-slide-class')
  }
  Hide(memberSlides, 'none')
  Show(memberSlides, memberCurrentSlide, 'block')
  memberCurrentSlideArr[memberCurrentSlide].classList.add('js-current-slide-class')
}

memberButtonPrev.onclick = () => {
  (memberCurrentSlide == 0) ? memberCurrentSlide = 4 : memberCurrentSlide -= 1
  if (memberCurrentSlide == 4) {
    memberCurrentSlideArr[memberCurrentSlide - 4].classList.remove('js-current-slide-class')
  } else {
    memberCurrentSlideArr[memberCurrentSlide + 1].classList.remove('js-current-slide-class')
  }
  Hide(memberSlides, 'none')
  Show(memberSlides, memberCurrentSlide, 'block')
  memberCurrentSlideArr[memberCurrentSlide].classList.add('js-current-slide-class')
}
