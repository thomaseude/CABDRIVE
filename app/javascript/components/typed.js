import Typed from 'typed.js';

const loadDynamicBannerText = () => {
  if (document.querySelector('#banner-typed-text')){
    new Typed('#banner-typed-text', {
      strings: [" Créer la bière qui te ressemble !"],
      typeSpeed: 50,
      fadeOut: true,
      loop: true,
      showCursor: false,
      fadeOut: true
    });
  }
}

export { loadDynamicBannerText };
