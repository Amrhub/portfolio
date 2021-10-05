const hamburger = document.querySelector('.fa-bars');
const linksWrapper = document.getElementById('linksWrapper');
const cancelBtn = document.getElementById("cancel-btn");
const links = Array.from(document.querySelectorAll("#linksWrapper ul li a"));

function displayMenu() {
  hamburger.style.display = "none";
  linksWrapper.style.display = 'block';
  document.body.style.overflow = 'hidden';
  
}

function closeMenu(){
  linksWrapper.style.display = "none";
  document.body.style.overflow = 'auto';
  hamburger.style.display = "block"; 
}


hamburger.addEventListener('click', displayMenu);
cancelBtn.addEventListener("click",closeMenu);

links.map(function clickLinkHandler(x){
   x.addEventListener("click",closeMenu)});