
document.querySelector('.quantity').value = 1;


function price(select) {
  const buttonElement = document.querySelector(select);



  if (!buttonElement.classList.contains('clicked')) {
    const clickedElement = document.querySelector('.clicked');

    if (clickedElement.classList.contains('clicked')) {
      clickedElement.classList.remove('clicked');
      buttonElement.classList.remove('hover');
      if (!clickedElement.classList.contains('hover')) {
        clickedElement.classList.add('hover');
      }
    }
    buttonElement.classList.add('clicked');


  } else {

    clickedElement;

  }



  changePrice();

}
function changePrice() {
  const priceChange = document.querySelector('.price');
  const clicked = document.querySelector('.clicked');

  if (priceChange) {
    priceChange.innerHTML = clicked.innerHTML;
  }
}


document.querySelector('.minus')
  .addEventListener('click', () => { quantityReduce() })
document.querySelector('.add')
  .addEventListener('click', () => { quantityAdd(); })

function quantityReduce() {
  let addValue = document.querySelector('.quantity')

  document.querySelector('.quantity')
    .value--;
  let popMessage = document.querySelector('.above');
  if (addValue.value < 50) {
    popMessage.innerHTML = '';
  }
  if (addValue.value < 1) {
    addValue.value = 1;
  }
}
function quantityAdd() {
  const addValue = document.querySelector('.quantity')
  addValue.value++;


  let popMessage = document.querySelector('.above');
  if (addValue.value > 50) {
    addValue.value = 50;
    popMessage.innerHTML = 'For bulk gift card purchases see the link below';
  }
}
