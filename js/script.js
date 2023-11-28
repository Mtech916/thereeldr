// Replace Text in Header
const checkReplace = document.querySelector('.replace-me');

if (checkReplace != null) {
  const replace = new ReplaceMe(checkReplace, {
    animation: 'animated fadeIn',
    speed: 2000,
    separator: ',',
    loopCount: 'infinite',
    autoRun: true,
  });
}

// User Scroll For Navbar
function userScroll() {
  const navbar = document.querySelector('.navbar');
  const toTopBtn = document.querySelector('#to-top');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('bg-light');
      navbar.classList.add('border-bottom');
      navbar.classList.add('border-secondary');
      navbar.classList.add('navbar-sticky');
      toTopBtn.classList.add('show');
    } else {
      navbar.classList.remove('bg-light');
      navbar.classList.remove('border-bottom');
      navbar.classList.remove('border-secondary');
      navbar.classList.remove('navbar-sticky');
      toTopBtn.classList.remove('show');
    }
  });
}

function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// Event Listeners
document.addEventListener('DOMContentLoaded', userScroll);
document.querySelector('#to-top').addEventListener('click', scrollToTop);

// Video Modal
const videoBtn = document.querySelector('.video-btn');
const videoModal = document.querySelector('#videoModal');
const video = document.querySelector('#video');
let videoSrc;

if (videoBtn !== null) {
  videoBtn.addEventListener('click', () => {
    videoSrc = videoBtn.getAttribute('data-bs-src');
  });
}

if (videoModal !== null) {
  videoModal.addEventListener('shown.bs.modal', () => {
    video.setAttribute(
      'src',
      videoSrc + '?autoplay=1;modestbranding=1;showInfo=0'
    );
  });

  videoModal.addEventListener('hide.bs.modal', () => {
    video.setAttribute('src', videoSrc);
  });
}
