const all = './js/main_all.js',
    ie = './js/main_ie.js',

    isIE = false || !!document.documentMode;

const script = document.createElement('script');
script.src = isIE ? ie : all;

document.body.appendChild(script);
