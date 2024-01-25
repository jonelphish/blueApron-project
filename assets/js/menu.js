const price = document.querySelector('.price-one');

const topChoice = document.querySelectorAll('.intro-list ul li');
topChoice.forEach(tab => {

  tab.addEventListener('click', () => {

    if (!tab.classList.contains('border-bot')) {
      const topChoiceLi = document.querySelectorAll('.intro-list ul li')
      topChoiceLi.forEach(choice => {
        if (choice.classList.contains('border-bot')) {
          choice.classList.remove('border-bot');
        }
      });;
      tab.classList.add('border-bot');
    } 
  })
});
const text = document.querySelector('.text');
text.innerHTML = 'Ingredients and easy-to-follow recipes for home-cooked meals';
const buttonOne = document.querySelector('.button-one'),
      buttonTwo = document.querySelector('.button-two'),
      transition = document.querySelector('.choice-transition'),
      transitionServe = document.querySelector('.serve-transition'),
      serveBtnOne = document.querySelector('.button-serve-one'),
      serveBtnTwo = document.querySelector('.button-serve-two'),
      rightPlanOne = document.querySelector('.right-plan'),
      rightPlanTwo = document.querySelector('.right-plan-two');

buttonTwo.addEventListener('click', () => {
  transition.classList.add('translate')
  buttonTwo.classList.add('button-color-two');
  buttonOne.classList.remove('button-color-two');
  text.innerHTML = ' Fresh, pre-made meals ready in as little as 2 <br> minutes. Delivery available Mon–Wed.';
  document.querySelector('.pre-order').classList.remove('order-display');
  document.querySelector('.delivery').innerHTML = 'Deliveries begin January 8th'
  rightPlanOne.classList.add('display-right-plan');
  rightPlanTwo.classList.remove('display-right-plan-two');
});


serveBtnTwo.addEventListener('click', () => {
  transitionServe.classList.add('translate')
  serveBtnTwo.classList.add('button-color');
  serveBtnOne.classList.remove('button-color');
  price.innerHTML = '$3.50'
});

serveBtnOne.addEventListener('click', () => {
  transitionServe.classList.remove('translate')
  serveBtnOne.classList.add('button-color');
  serveBtnTwo.classList.remove('button-color');
  price.innerHTML = '$4.37'

});

buttonOne.addEventListener('click', () => {
  buttonOne.classList.add('button-color-two');
  transition.classList.remove('translate');
  buttonTwo.classList.remove('button-color-two');
  text.innerHTML = 'Ingredients and easy-to-follow recipes for home-cooked meals';
  document.querySelector('.pre-order').classList.add('order-display');
  document.querySelector('.delivery').innerHTML = '';
  rightPlanOne.classList.remove('display-right-plan');
  rightPlanTwo.classList.add('display-right-plan-two')
});


const numberBtnOne = document.querySelector('.button-choice-one'),
     numberBtnTwo = document.querySelector('.button-choice-two'),
     numberBtnThree = document.querySelector('.button-choice-three'),
     numberBtnFour = document.querySelector('.button-choice-four'),
     numberTransition = document.querySelector('.number-transition');

numberBtnOne.addEventListener('click', () => {
  numberTransition.style = 'transform:translatex(0)'
  numberBtnOne.classList.add('button-color');
  numberBtnTwo.classList.remove('button-color');
  numberBtnThree.classList.remove('button-color');
  numberBtnFour.classList.remove('button-color');
  price.innerHTML = '$4.37'

});

numberBtnTwo.addEventListener('click', () => {
  numberTransition.style = 'transform:translatex(100%)'
  numberBtnOne.classList.remove('button-color');
  numberBtnTwo.classList.add('button-color');
  numberBtnThree.classList.remove('button-color');
  numberBtnFour.classList.remove('button-color');
  price.innerHTML = '$3.85'

});

numberBtnThree.addEventListener('click', () => {
  numberTransition.style = 'transform:translatex(200%)'
  numberBtnOne.classList.remove('button-color');
  numberBtnTwo.classList.remove('button-color');
  numberBtnThree.classList.add('button-color');
  numberBtnFour.classList.remove('button-color');
  price.innerHTML = '$3.50'


});


numberBtnFour.addEventListener('click', () => {
  numberTransition.style = 'transform:translatex(300%)'
  numberBtnOne.classList.remove('button-color');
  numberBtnTwo.classList.remove('button-color');
  numberBtnThree.classList.remove('button-color');
  numberBtnFour.classList.add('button-color');
  price.innerHTML = '$3.32'

});
const mealBtnOne = document.querySelector('.button-meal-one'),
      mealBtnTwo = document.querySelector('.button-meal-two'),
      mealBtnThree = document.querySelector('.button-meal-three'),
      mealTransition = document.querySelector('.meal-transition'),
      priceTwo = document.querySelector('.price-two');



mealBtnOne.addEventListener('click', () => {
  mealTransition.style = 'transform:translatex(0)'
  mealBtnOne.classList.add('button-color');
  mealBtnTwo.classList.remove('button-color');
  mealBtnThree.classList.remove('button-color');
  priceTwo.innerHTML = '$4.72'

});

mealBtnTwo.addEventListener('click', () => {
  mealTransition.style = 'transform:translatex(100%)'
  mealBtnOne.classList.remove('button-color');
  mealBtnTwo.classList.add('button-color');
  mealBtnThree.classList.remove('button-color');
  priceTwo.innerHTML = '$4.55'

});

mealBtnThree.addEventListener('click', () => {
  mealTransition.style = 'transform:translatex(200%)'
  mealBtnOne.classList.remove('button-color');
  mealBtnTwo.classList.remove('button-color');
  mealBtnThree.classList.add('button-color');
  priceTwo.innerHTML = '$4.37'

});

// SCROLL STICKY-BOX-SHADOW JAVASCRIPT //
const sticky = document.querySelector('.sticky-intro');

window.addEventListener('scroll', () => {
  console.log(window.scrollY);

  if (window.scrollY > 545) {
    sticky.style = 'box-shadow:0 4px 4px 0 rgba(0,0,0,.25);'
  } else {
    sticky.style = 'box-shadow:none;'
  }
  const stickyTwo = document.querySelector('.sticky-intro-two');

  if (window.scrollY > 3435) {
    stickyTwo.style = 'box-shadow:0 4px 4px 0 rgba(0,0,0,.25);'
  } else {
    stickyTwo.style = 'box-shadow:none;'

  }
  const stickyThree = document.querySelector('.sticky-intro-three');

  if (window.scrollY > 5754) {
    stickyThree.style = 'box-shadow:0 4px 4px 0 rgba(0,0,0,.25);'
  } else {
    stickyThree.style = 'box-shadow:none;'

  }
  const stickyFour = document.querySelector('.sticky-intro-four');

  if (window.scrollY > 8065) {
    stickyFour.style = 'box-shadow:0 4px 4px 0 rgba(0,0,0,.25);'
  } else {
    stickyFour.style = 'box-shadow:none;'

  }
});
// 8068