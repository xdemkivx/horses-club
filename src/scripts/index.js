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