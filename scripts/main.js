const hamburger = document.getElementById('hamburger-menu');

function displayMenu() {
  const linksWrapper = document.getElementById('linksWrapper');

  linksWrapper.style.display = 'block';
  document.body.style.overflow = 'hidden';
}

hamburger.addEventListener('click', displayMenu);
