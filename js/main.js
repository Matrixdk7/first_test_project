const themeBtn = document.querySelector('.header-theme');

function changeAttribute(name, value) {
  document.documentElement.setAttribute(name, value);
}

const savedTheme = localStorage.getItem('data-theme');
if (savedTheme) {
  changeAttribute('data-theme', savedTheme);
}

themeBtn.addEventListener('click', () => {
  const currentTheme = document.documentElement.getAttribute('data-theme');

  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

  changeAttribute('data-theme', newTheme);

  localStorage.setItem('data-theme', newTheme);
});
