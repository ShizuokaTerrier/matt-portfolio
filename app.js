const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');

function pageTransitions() {
  // on click add active class - don't forget, no arrow functions when using a this keyword
  for (let i = 0; i < sectBtn.length; i++) {
    sectBtn[i].addEventListener('click', function () {
      let currentBtn = document.querySelectorAll('.active-btn');
      currentBtn[0].className = currentBtn[0].className.replace(
        'active-btn',
        ''
      );
      this.className += ' active-btn';
    });
  }

  //sections active class

  allSections.addEventListener('click', (e) => {
    // by adding the data- prefix you can hide the content and target the id with javascript or css.

    const id = e.target.dataset.id;
    if (id) {
      //remove selected from other btns

      sectBtns.forEach((btn) => {
        btn.classList.remove('active');
      });
      e.target.classList.add('active');
      console.log(e.target);
      //hide other sections

      sections.forEach((section) => {
        section.classList.remove('active');
      });
      const element = document.getElementById(id);
      element.classList.remove('active');
    }
  });
}

pageTransitions();
