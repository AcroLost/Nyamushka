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

  darkGray = '#666666',

  product = document.querySelectorAll('.product'),
  productBorder = document.querySelectorAll('.product__border'),
  item = document.querySelectorAll('.item'),
  productFooter = document.querySelectorAll('.product__footer');


for (let i = 0; i < productsList.length; i++) {

  const productClass = product[i].classList,
    itemTitle = item[i].firstElementChild,
    itemWeight = item[i].lastElementChild;

  //  NORMAL/ACTIVE/ENDED STATE====================================

  const updateState = () => {

    if (productsList[i].active == true) {

      productClass.add('product_active');

      productBorder[i].style.background = gradientPink;
      itemWeight.style.backgroundColor = pink;
      productFooter[i].innerHTML = productsList[i].footerActive;

    } else if (productsList[i].active == false && productsList[i].ended == false) {

      productClass.remove('product_active');

      itemTitle.innerHTML = 'Сказочное заморское яство';
      itemTitle.style.color = darkGray;

      productBorder[i].style.background = gradientBlue;
      itemWeight.style.backgroundColor = blue;
      productFooter[i].innerHTML = productsList[i].footer;

    } else if (productsList[i].ended == true) {

      productClass.add('product_ended');
      productFooter[i].innerHTML = `Печалька, ${productsList[i].taste} закончился.`;

    }

  };

  updateState();

  // CLICK ON ITEM============================================

  const clickOnItem = (id) => {

    if (productsList[id].active == true) {

      productsList[id].active = false;

      updateState();

    } else if (productsList[id].active == false) {

      productsList[id].active = true;
      updateState();

    }

  };

  item[i].addEventListener('click', clickOnItem.bind(this, i));

  //  HOVER ON ITEM=================================================

  const mouseEnter = () => {

    if (productsList[i].active == true) {

      itemTitle.innerHTML = 'Котэ не одобряет?';
      itemTitle.style.color = lightPink;

      productBorder[i].style.background = gradientLightPink;
      itemWeight.style.backgroundColor = lightPink;

    } else {

      productBorder[i].style.background = gradientLightBlue;
      itemWeight.style.backgroundColor = lightBlue;

    }

  };
  item[i].addEventListener('mouseenter', mouseEnter);

  const mouseLeave = () => {

    if (productsList[i].active == true) {

      itemTitle.innerHTML = 'Сказочное заморское яство';
      itemTitle.style.color = darkGray;

      productBorder[i].style.background = gradientPink;
      itemWeight.style.backgroundColor = pink;

    } else {

      productBorder[i].style.background = gradientBlue;
      itemWeight.style.backgroundColor = blue;

    }

  };
  item[i].addEventListener('mouseleave', mouseLeave);

  //  CHECK USER DEVICE AND REMOVE 'HOVER'==========================
  /* global device */
  if (device.mobile() || device.tablet()) {

    item[i].removeEventListener('mouseenter', mouseEnter, false);
    item[i].removeEventListener('mouseleave', mouseLeave, false);

  }

  //  CLICK ON FOOTER===============================================

  productFooter[i].addEventListener('click', (event) => {

    const target = event.target.classList;

    if (target.contains('product__buy')) {

      clickOnItem(i);

    }

  });

}
