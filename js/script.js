// for menu 

document.querySelector('.navbar-toggler').addEventListener('click', () => {
  document.querySelector('.navbar-collapse').classList.toggle('show');
});

document.querySelectorAll('.nav-link, .menuBtn').forEach((el) => {
  el.addEventListener('click', () => {
    document.querySelector('.navbar-collapse').classList.remove('show');
  });
});