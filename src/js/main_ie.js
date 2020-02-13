const productsList = [
  {
    taste: 'c фуа-гра',

    active: false,
    ended: false,

    footer: 'Чего сидишь? Порадуй котэ, <span class="product__buy">купи</span><span>.</span>',
    footerActive: 'Печень утки разварная с артишоками.',
  },
  {
    taste: 'c рыбой',

    active: true,
    ended: false,

    footer: 'Чего сидишь? Порадуй котэ, <span class="product__buy">купи</span><span>.</span>',
    footerActive: 'Головы щучьи с чесноком да свежайшая сёмгушка.',
  },
  {
    taste: 'c курой',

    active: false,
    ended: true,

    footer: 'Чего сидишь? Порадуй котэ, <span class="product__buy">купи</span><span>.</span>',
    footerActive: 'Филе из цыплят с трюфелями в бульоне.',
  },
];

//  COLORS=======================================================

const pink = '#d91667',
  lightPink = '#e62e7a',
  gradientPink = 'linear-gradient(135deg, transparent 31.5px, #d91667 0)',
  gradientLightPink = 'linear-gradient(135deg, transparent 31.5px, #e62e7a 0)',

  blue = '#1698d9',
  lightBlue = '#2ea8e6',
  gradientBlue = 'linear-gradient(135deg, transparent 31.5px, #1698d9 0)',
  gradientLightBlue = 'linear-gradient(135deg, transparent 31.5px, #2ea8e6 0)',

  darkGray = '#666666';


const product = document.querySelectorAll('.product'),
  productBorder = document.querySelectorAll('.product__border'),
  item = document.querySelectorAll('.item'),
  productFooter = document.querySelectorAll('.product__footer');


for (let i = 0; i < productsList.length; i++) {

  const productClass = product[i].classList,
    itemTitle = item[i].firstElementChild,
    itemWeight = item[i].lastElementChild;

  //  NORMAL/ACTIVE/ENDED STATE ===================================

  function updateState(id) {

    if (productsList[id].active == false && productsList[id].ended == false) {

      productClass.remove('product_active');

      itemTitle.innerHTML = 'Сказочное заморское яство';
      itemTitle.style.color = darkGray;

      productBorder[id].style.background = gradientBlue;
      itemWeight.style.backgroundColor = blue;
      productFooter[id].innerHTML = productsList[id].footer;

    } else if (productsList[id].active == true) {

      productClass.add('product_active');

      productBorder[id].style.background = gradientPink;
      itemWeight.style.backgroundColor = pink;
      productFooter[id].innerHTML = productsList[id].footerActive;

    } else if (productsList[id].ended == true) {

      productClass.add('product_ended');

      productFooter[id].innerHTML = 'Печалька, ' + productsList[id].taste + ' закончился.';

    }

  }
  updateState(i);

  // CLICK ON ITEM============================================

  function clickOnItem(id) {

    if (productsList[id].active == true) {

      productsList[id].active = false;
      updateState(id);

    } else if (productsList[id].active == false) {

      productsList[id].active = true;
      updateState(id);

    }

  }

  item[i].addEventListener('click', clickOnItem.bind(this, i));

  //  HOVER ON ITEM=================================================

  function mouseEnter(id) {

    if (productsList[id].active == true) {

      itemTitle.innerHTML = 'Котэ не одобряет?';
      itemTitle.style.color = lightPink;

      productBorder[id].style.background = gradientLightPink;
      itemWeight.style.backgroundColor = lightPink;

    } else {

      productBorder[id].style.background = gradientLightBlue;
      itemWeight.style.backgroundColor = lightBlue;

    }

  }
  item[i].addEventListener('mouseenter', mouseEnter.bind(this, i));


  function mouseLeave(id) {

    if (productsList[id].active == true) {

      itemTitle.innerHTML = 'Сказочное заморское яство';
      itemTitle.style.color = darkGray;

      productBorder[id].style.background = gradientPink;
      itemWeight.style.backgroundColor = pink;

    } else {

      productBorder[id].style.background = gradientBlue;
      itemWeight.style.backgroundColor = blue;

    }

  }
  item[i].addEventListener('mouseleave', mouseLeave.bind(this, i));

  //  CHECK USER DEVICE AND REMOVE 'HOVER'==========================
  /*  global device */
  if (device.mobile() || device.tablet()) {

    item[i].removeEventListener('mouseenter', mouseEnter, false);
    item[i].removeEventListener('mouseleave', mouseLeave, false);

  }

  //  CLICK ON FOOTER===============================================

  function clickOnFooter(id, event) {

    const target = event.target.classList;

    if (target.contains('product__buy')) {

      clickOnItem(id);

    }

  }
  productFooter[i].addEventListener('click', clickOnFooter.bind(this, i));

}
