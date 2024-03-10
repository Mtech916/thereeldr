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

// Form Switcher
const contactFrmBtn = document.querySelector('#contact-frm-btn');
const reviewFrmBtn = document.querySelector('#review-frm-btn');
const inquireButtons = document.querySelectorAll('.inquire');
const contactFrmLink = document.querySelector('.contact-frm-link');

function switchForm(e) {
  const contactSection = document.querySelector('#contact');
  const reviewSection = document.querySelector('#review');

  contactFrmBtn.classList.toggle('opacity-25');
  reviewFrmBtn.classList.toggle('opacity-25');
  contactSection.classList.toggle('d-none');
  reviewSection.classList.toggle('d-none');

  if (!reviewSection.classList.contains('d-none')) {
    insertForm();
  }
}

function insertForm() {
  const reviewForm = document.getElementById('review-form');

  reviewForm.innerHTML = `
      <form action="https://formsubmit.co/thereeldr@yahoo.com" method="POST">
        <div class="mb-4">
          <input type="text" name="name" class="form-control text-bg-secondary" placeholder="Enter name" required>
        </div>
        <div class="mb-4">
          <input type="email" name="email" class="form-control text-bg-secondary" placeholder="Enter email" required>
          <input type="hidden" name="_next" value="https://thereeldr.com/pages/thank-you.html">
          <input type="hidden" name="_subject" value="New Contact Form Submission!">
          <input type="hidden" name="_template" value="table">
        </div>
        <div class="mb-4">
          <input type="text" name="reciept" class="form-control text-bg-secondary" placeholder="Enter Reciept Number" required>
        </div>
        <textarea name="customer-review" id="customer-review" class="form-control text-bg-secondary" rows="10" placeholder="Enter your review here..." required></textarea>
        <div class="d-grid gap-2 pt-4">
          <input type="submit" value="Submit" class="btn btn-lg btn-primary text-white">
        </div>
      </form>
    `;
}

function clickContactFrmBtn() {
  if (document.querySelector('#contact').classList.contains('d-none')) {
    contactFrmBtn.click();
    return;
  }
  return;
}

inquireButtons.forEach((button) => {
  button.addEventListener('click', clickContactFrmBtn);
});
contactFrmLink.addEventListener('click', clickContactFrmBtn);
contactFrmBtn.addEventListener('click', switchForm);
reviewFrmBtn.addEventListener('click', switchForm);

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

// Project Panels effect
const panels = document.querySelectorAll('.panel');
const removeActiveClasses = () => {
  panels.forEach((panel) => {
    panel.classList.remove('active');
  });
};

panels.forEach((panel) => {
  panel.addEventListener('click', () => {
    removeActiveClasses();
    panel.classList.add('active');
  });
});
