document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.menu-toggle');
  const mobileNav = document.querySelector('.mobile__nav');

  menuToggle.addEventListener('click', function() {
    // Переключение видимости навигационного меню
    mobileNav.classList.toggle('show');
  });

  // Добавление слушателя события клика на весь документ для скрытия меню при клике за его пределами
  document.addEventListener('click', function(event) {
    if (!menuToggle.contains(event.target) && !mobileNav.contains(event.target)) {
      mobileNav.classList.remove('show');
    }
  });
});

document.querySelector('.menu-toggle').addEventListener('click', function() {
  this.classList.toggle('active');
});

// const mySlider = new Splide ('#mySlider',{
//   type: 'loop',
//   perPage: 2,
//   gap: '30px',
//   pagination: true,
// })
// mySlider.mount()

// const progressBar = document.querySelector('.progress-bar');
// mySlider.on('mounted move', function () {
//   var end = splide.Components.Controller.getEnd() + 1;
//   var rate = Math.min((splide.index + 1) / end, 1);
//   progressBar.style.width = String(100 * rate) + '%';
// });



document.addEventListener('DOMContentLoaded', function () {
  const splide = new Splide('#mySlider', {
      type      : 'loop',
      perPage   : 1,
      padding: '5rem',
      pagination: true,
  }).mount();

  // var progressBar = document.querySelector('.progress-bar');

  // splide.on('mounted move', function () {
  //     const end = splide.Components.Controller.getEnd() + 1;
  //     const rate = Math.min((splide.index + 1) / end, 1);
  //     progressBar.style.width = String(100 * rate) + '%';
  // });
});