// const projects = Array.from(document.querySelectorAll('.project'));
// let project = {
//   name: '',
//   description: '',
//   featuredImage: '',
//   technology: '',
//   demoLive: '',
//   sourceLink: '',
// };
const projectWindow = document.createElement('section');
const projectWindowHeader = document.createElement('header');
const imageContainer = document.createElement('img');
const projectDescription = document.createElement('p');
const projectTechnology = document.createElement('ul');
const projectBtnGoLive = document.createElement('a');
const projectBtnSeeSrc = document.createElement('a');

document.body.appendChild(projectWindow);
document.body.insertBefore(
  projectWindow,
  document.querySelector('.header-container')
);

// injecting HTML

projectWindowHeader.innerHTML =
  '<h1>Multi - Post stories</h1> <img src="images/Toolbar.png" alt="cancel button">';
imageContainer.src = 'images/ImgPlaceholder.png';
imageContainer.alt = 'project image';
projectDescription.innerHTML =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting  ever since the 1500s, when an unknown printer took a galley of type veris lapoa todoe.";
projectTechnology.innerHTML = '<li>css</li><li>html</li><li>bootstrap</li>';
const projectTechnologyItems = Array.from(projectTechnology.children);
projectBtnGoLive.innerHTML =
  'See Live <img src="images/Icons/see-live.png" alt="external link icon">';
projectBtnSeeSrc.innerHTML =
  'See Source <img src="images/Icons/GitHub-icon.png" alt="external link icon">';

// styles
projectWindow.style.backgroundColor = 'rgba(255, 255, 255, 0.16)';
projectWindow.style.border = '1px solid #FFFFFF';
projectWindow.style.boxShadow = '0px 48px 48px rgba(37, 47, 137, 0.08)';
projectWindow.style.padding = '2rem';
projectWindow.style.margin = '3rem 24px 24px';
projectWindowHeader.style.display = 'flex';
projectWindowHeader.style.justifyContent = 'space-between';
projectWindowHeader.style.height = '70px';
projectWindowHeader.querySelector('img').style.height = '40px';
projectWindowHeader.querySelector('h1').style.alignSelf = 'center';
projectWindowHeader.querySelector('h1').fontSize = '20px';
projectWindowHeader.querySelector('h1').color = 'white';
imageContainer.style.width = '100%';
projectDescription.style.textAlign = 'center';
projectDescription.style.fontSize = '16px';
projectDescription.style.margin = '1.5rem 0';
projectDescription.style.fontWeight = 'normal';
projectDescription.style.lineHeight = '24px';
projectDescription.style.color = 'white';
projectTechnology.classList.add('table');
projectTechnology.style.listStyle = 'none';
projectTechnology.style.justifyContent = 'center';
projectTechnology.firstChild.style.borderLeft = '1px solid #81818C';
projectTechnologyItems.forEach((item) => {
  item.style.marginRight = '0 20px';
  item.style.padding = '0 20px';
  item.style.borderRight = '1px solid #81818C';
  item.style.color = 'white';
});
projectBtnGoLive.classList.add('btn-primary');
projectBtnGoLive.style.display = 'block';
projectBtnGoLive.style.margin = '20px auto 30px';
projectBtnGoLive.style.fontSize = '12px';
projectBtnGoLive.style.color = 'white';
projectBtnGoLive.style.display = 'flex';
projectBtnGoLive.style.justifyContent = 'center';
projectBtnGoLive.style.alignItems = 'center';
projectBtnGoLive.querySelector('img').style.marginLeft = '10px';
projectBtnSeeSrc.classList.add('btn-primary');
projectBtnSeeSrc.style.display = 'block';
projectBtnSeeSrc.style.width = '130px';
projectBtnSeeSrc.querySelector('img').style.height = '40px';
projectBtnSeeSrc.querySelector('img').style.marginLeft = '10px';
projectBtnSeeSrc.style.margin = '10px auto';
projectBtnSeeSrc.style.color = 'white';
projectBtnSeeSrc.style.display = 'flex';
projectBtnSeeSrc.style.justifyContent = 'center';
projectBtnSeeSrc.style.alignItems = 'center';
projectBtnSeeSrc.style.fontSize = '12px';

// linking items together

projectWindow.appendChild(projectWindowHeader);
projectWindow.appendChild(imageContainer);
projectWindow.appendChild(projectDescription);
projectWindow.appendChild(projectTechnology);
projectWindow.appendChild(projectBtnGoLive);
projectWindow.appendChild(projectBtnSeeSrc);
