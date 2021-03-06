const projects = [
  {
    name: 'MedBook',
    description:
      'Website that allows user to book with doctors, also allow user to add doctor to their list of doctors, and allow user to view their bookings. Authentication for this website is just by username',
    featuredImageSource:
      'https://user-images.githubusercontent.com/87689547/162473098-14c0c8fb-066c-4f94-86a7-f18f21b97958.png',
    featuredImageAlt: 'Project image',
    technology: ['Rails', 'React', 'Tailwind'],
    demoLive: 'https://your-medbook.herokuapp.com/',

    sourceLink: 'https://github.com/codepantha/medbook',
  },
  {
    name: 'Budgetly',
    description:
      'a mobile web application where you can manage your budget: you have a list of transactions associated with a category, so that you can see how much money you spent and on what.',
    featuredImageSource:
      'https://user-images.githubusercontent.com/87689547/163049550-59afe617-17a5-469e-84e0-d8561569e8ed.png',
    featuredImageAlt: 'Project image',
    technology: ['Rails', 'Bootstrap 5', 'Devise'],
    demoLive: 'https://yourbudgetly.herokuapp.com/',
    sourceLink: 'https://github.com/Amrhub/Budgetly',
    extraClass: 'mobile_project',
  },
  {
    name: 'GitBlogie',
    description:
      'This application allows you to post your blog like and comments other blogs sign up and sign in to have more privileges',
    featuredImageSource:
      'https://user-images.githubusercontent.com/87689547/162636896-028ef2d8-532d-4629-840e-74eb9433c415.png',
    featuredImageAlt: 'Project image',
    technology: ['Rails', 'Bootstrap'],
    demoLive: 'https://gitblogie.herokuapp.com/',

    sourceLink: 'https://github.com/Amrhub/blog-app/blob/dev',
  },
  {
    name: 'GitRecipe',
    description:
      'The Recipe app keeps track of all your recipes, ingredients, and inventory. It will allow you to save ingredients, keep track of what you have, create recipes, and generate a shopping list based on what you have and what you are missing from a recipe. Also, since sharing recipes is an important part of cooking the app should allow you to make them public so anyone can access them.',
    featuredImageSource:
      'https://raw.githubusercontent.com/Amrhub/dish-recipes/dev/app_screenshot.png',
    featuredImageAlt: 'Project image',
    technology: ['Rails', 'Bootstrap', 'cocoon'],
    demoLive: 'https://gitrecipe.herokuapp.com/',
    sourceLink: 'https://github.com/Amrhub/dish-recipes',
  },
  {
    name: "Space Travelers' Hub",
    description:
      'Single-page application that displays SpaceX rockets and missions, allows you to book a rocket or join a mission and see all your booked rockets and your joined mission in your profile page',
    featuredImageSource:
      'https://raw.githubusercontent.com/Amrhub/space-travelers-hub/dev/app_screenshot.png',
    featuredImageAlt: 'Project image',
    technology: ['React', 'Redux', 'SpaceX API'],
    demoLive: 'https://space-travelers-hub-pa.netlify.app/',
    sourceLink: 'https://github.com/Amrhub/space-travelers-hub',
  },
  {
    name: 'Covid19-tracker',
    description:
      'This is a mobile app that allows you to search by date and get all stats of each country (today confirmed, open, deaths,and recovered cases), you could also search by country name with a certain date to get all country stats and regions stats (if exists). These stats are based on since Jan. 23rd, 2020 till that chosen date',
    featuredImageSource:
      'https://user-images.githubusercontent.com/87689547/163050012-03f63ce4-8918-4fbd-b47b-09e42de54d32.png',
    featuredImageAlt: 'Project image',
    technology: ['React', 'Redux', 'Narrativa API'],
    demoLive: 'https://covid-19-tracker-amrhub.netlify.app/',
    sourceLink: 'https://github.com/Amrhub/COVID19-tracker',
  },
  {
    name: 'Bookstore',
    description:
      'Book store allows you to save your progress work on reading your favorite books, you could also have a list of books at once :)',
    featuredImageSource:
      'https://raw.githubusercontent.com/Amrhub/Bookstore/development/app_screenshot.png',
    featuredImageAlt: 'Project image',
    technology: ['React', 'Redux', 'Bookstore API'],
    demoLive: 'https://bookstore-react-app.netlify.app/',
    sourceLink: 'https://github.com/Amrhub/Bookstore',
  },
  {
    name: 'Math Magicians',
    description:
      'This is just a simple calculator user interface that I built using the React framework.',
    featuredImageSource:
      'https://raw.githubusercontent.com/Amrhub/math-magicians/development/app_screenshot.png',
    featuredImageAlt: 'Project image',
    technology: ['React', 'Jest'],
    demoLive: 'https://math-magician-react.netlify.app/',
    sourceLink: 'https://github.com/Amrhub/math-magicians',
  },
  {
    name: 'TODO list',
    description:
      'In this app, you can add, delete, submit and edit items. To edit items, simply double click on it. Once you are done, press the enter key to resubmit. This app will persist your data in the browser local storage. So whether you reload, close your app or reopened it, you still have access to your to-dos items.',
    featuredImageSource:
      'https://raw.githubusercontent.com/Amrhub/react-todo-app/development/app_screenshot.png',
    featuredImageAlt: 'Project image',
    technology: ['React'],
    demoLive: 'https://amrhub.github.io/react-todo-app/',
    sourceLink: 'https://github.com/Amrhub/react-todo-app',
  },
  {
    name: 'Leaderboard',
    description: 'This project allows you to add to a leaderboard for your chess world cup 2021.',
    featuredImageSource:
      'https://raw.githubusercontent.com/Amrhub/Leaderboard/dev/app_screenshot.png',
    featuredImageAlt: 'Project image',
    technology: ['React', 'API'],
    demoLive: 'https://amrhub.github.io/Leaderboard/',
    sourceLink: 'https://github.com/Amrhub/Leaderboard',
  },
  {
    name: 'Microverse Program',
    description:
      'A program to get you started on Full-Stack web development with Technical and Soft skills required, This program create positive changes on their alumni, You can join the course wherever you are.',
    featuredImageSource: 'images/projectsScreenshot/project1.png',
    featuredImageAlt: 'Project image',
    technology: ['CSS', 'HTML', 'JavaScript'],
    demoLive: 'https://amrhub.github.io/Module1-Capstone-Web-development-course/',
    sourceLink: 'https://github.com/Amrhub/Module1-Capstone-Web-development-course',
  },
  {
    name: 'Awesome Books',
    description:
      "A website where you can save your favorite books, you can add books by entering the book title and it's author also you could remove a book from the list",
    featuredImageSource: 'images/projectsScreenshot/project2.png',
    featuredImageAlt: 'Project image',
    technology: ['css', 'html', 'JavaScript'],
    demoLive: 'https://amrhub.github.io/Awesome-Books/',
    sourceLink: 'https://github.com/Amrhub/Awesome-Books',
  },
  {
    name: 'Simple to do list',
    description:
      "this webpage allows you to manage your todo list, you could add a task mark it as completed when it's done also you could edit it, remove a specific task, and could remove all completed tasks",
    featuredImageSource: 'images/projectsScreenshot/project3.png',
    featuredImageAlt: 'Project image',
    technology: ['css', 'html', 'JavaScript'],
    demoLive: 'https://amrhub.github.io/To-Do-list/dist/',
    sourceLink: 'https://github.com/Amrhub/To-Do-list/',
  },
];

const workContainer = document.getElementById('portfolio');
workContainer.style.gridTemplateRows = `80px repeat(${projects.length},fr)`;

// eslint-disable-next-line no-unused-vars
function hideProject() {
  document.getElementById('projectWindow').remove();
  document.querySelector('body').style.overflow = 'auto';
}

// eslint-disable-next-line no-unused-vars
function displayProject(projectIndex) {
  const body = document.querySelector('body');

  body.style.overflow = 'hidden';
  const screen = window.matchMedia('(min-width: 1024px)');
  const projectWindowWrapper = document.createElement('main');
  const projectWindow = document.createElement('section');
  const projectWindowHeader = document.createElement('header');
  const imageContainer = document.createElement('img');
  const projectDescription = document.createElement('p');
  const projectTechnology = document.createElement('ul');
  const projectBtnGoLive = document.createElement('a');
  const projectBtnSeeSrc = document.createElement('a');
  const projectBtnWrapper = document.createElement('div');
  const currentProject = document.getElementById(`p${projectIndex + 1}`);
  const projectTechnologies = currentProject.querySelector('.project-body .technologies');
  function mediaQuery(screen) {
    projectWindowWrapper.style.backgroundColor = '#100F45';
    projectWindowWrapper.style.backgroundImage = "url('images/headline_section_bg.svg')";
    projectWindow.classList.add('project-window');
    if (screen.matches) {
      projectWindowWrapper.style.backgroundRepeat = 'no-repeat';
      projectWindowWrapper.style.backgroundSize = ' 100% 100%';
      projectWindowWrapper.style.width = '100%';
      projectWindowWrapper.style.height = '100vh';
      projectWindowWrapper.style.padding = '0';
      projectDescription.style.maxWidth = '700px';
      imageContainer.style.maxWidth = '1108px';
      imageContainer.style.height = '405px';
      projectWindowHeader.style.maxWidth = '1108px';
      projectWindowHeader.style.marginBottom = '20px';
      projectBtnWrapper.style.flexDirection = 'row';
    } else {
      projectWindowWrapper.style.padding = '0';
      projectDescription.style.maxWidth = 'unset';
      projectWindowHeader.style.width = '100%';
      imageContainer.style.width = '100%';
      imageContainer.style.height = '30%';
      projectBtnWrapper.style.flexDirection = 'column';
    }
  }

  projectWindowHeader.innerHTML = `<h1>${projects[projectIndex].name}</h1><img src="images/Toolbar.png" alt="cancel button" onmouseover="" style="cursor: pointer;">`;
  imageContainer.src = `${projects[projectIndex].featuredImageSource}`;
  imageContainer.alt = `${projects[projectIndex].featuredImageAlt}`;
  projectDescription.textContent = `${projects[projectIndex].description}`;
  projectTechnology.innerHTML = `${projectTechnologies.innerHTML}`;
  const projectTechnologyItems = Array.from(projectTechnology.children);
  projectBtnGoLive.innerHTML = 'See Live <img src="images/Icons/see-live.png" alt="external link icon">';
  projectBtnGoLive.href = `${projects[projectIndex].demoLive}`;
  projectBtnSeeSrc.innerHTML = 'See Source <img src="images/Icons/GitHub-icon.png" alt="external link icon">';
  projectBtnSeeSrc.href = `${projects[projectIndex].sourceLink}`;
  projectBtnSeeSrc.setAttribute('target', '_blank');
  projectBtnSeeSrc.setAttribute('rel', 'noopener noreferrer');
  projectBtnGoLive.setAttribute('target', '_blank');
  projectBtnGoLive.setAttribute('rel', 'noopener noreferrer');
  projectBtnSeeSrc.style.textDecoration = 'none';
  projectBtnGoLive.style.textDecoration = 'none';
  projectWindowWrapper.id = 'projectWindow';
  projectWindowHeader
    .querySelector('img')
    .setAttribute('onClick', `hideProject(p${projectIndex + 1})`);

  projectWindow.style.backgroundColor = 'inherit';
  projectWindow.style.border = '1px solid #FFFFFF';
  projectWindow.style.boxShadow = '0px 48px 48px rgba(37, 47, 137, 0.08)';
  projectWindow.style.padding = '2rem';
  projectWindowWrapper.style.position = 'fixed';
  projectWindowWrapper.style.zIndex = '999999';
  projectWindowWrapper.style.display = 'flex';
  projectWindowWrapper.style.justifyContent = 'center';
  projectWindowWrapper.style.alignItems = 'center';
  projectWindowWrapper.style.top = '0';
  projectWindowWrapper.style.height = '100vh';
  projectWindowWrapper.style.backgroundImage = 'none';
  projectWindow.style.height = 'max-content';
  projectWindow.style.display = 'flex';
  projectWindow.style.flexDirection = 'column';
  projectWindow.style.alignItems = 'center';

  projectWindowHeader.style.display = 'flex';
  projectWindowHeader.style.justifyContent = 'space-between';
  projectWindowHeader.style.height = '60px';
  projectWindowHeader.style.width = '95%';
  projectWindowHeader.querySelector('img').style.height = '40px';
  projectWindowHeader.querySelector('img').style.width = '40px';
  projectWindowHeader.querySelector('h1').style.alignSelf = 'center';
  projectWindowHeader.querySelector('h1').style.color = 'white';
  projectWindowHeader.querySelector('h1').style.fontSize = '20px';

  imageContainer.style.height = '30%';
  imageContainer.style.margin = '0 auto';

  projectDescription.style.textAlign = 'center';
  projectDescription.style.fontSize = '16px';
  projectDescription.style.margin = '1.5rem 0';
  projectDescription.style.fontWeight = 'normal';
  projectDescription.style.lineHeight = '24px';
  projectDescription.style.color = 'white';

  projectTechnology.classList.add('technologies');
  projectTechnology.style.listStyle = 'none';
  projectTechnology.style.justifyContent = 'center';
  projectTechnology.firstChild.style.borderLeft = '1px solid #81818C';
  projectTechnology.lastChild.style.borderRight = 'visible';
  projectTechnologyItems.forEach((item) => {
    item.style.marginRight = '0 20px';
    item.style.padding = '0 20px';
    item.style.borderRight = '1px solid #81818C';
    item.style.color = 'white';
  });
  projectBtnGoLive.classList.add('btn-primary');
  projectBtnGoLive.style.display = 'block';
  projectBtnGoLive.style.marginTop = '10px';
  projectBtnGoLive.style.marginBottom = '10px';
  projectBtnGoLive.style.alignSelf = 'center';
  projectBtnGoLive.style.fontSize = '12px';
  projectBtnGoLive.style.color = 'white';
  projectBtnGoLive.style.display = 'flex';
  projectBtnGoLive.style.justifyContent = 'center';
  projectBtnGoLive.style.alignItems = 'center';
  projectBtnGoLive.querySelector('img').style.marginLeft = '10px';
  projectBtnGoLive.querySelector('img').style.height = '20px';
  projectBtnGoLive.querySelector('img').style.width = '20px';
  projectBtnSeeSrc.classList.add('btn-primary');
  projectBtnSeeSrc.style.display = 'block';
  projectBtnSeeSrc.style.width = '130px';
  projectBtnSeeSrc.querySelector('img').style.height = '40px';
  projectBtnSeeSrc.querySelector('img').style.width = '40px';
  projectBtnSeeSrc.querySelector('img').style.marginLeft = '10px';
  projectBtnSeeSrc.style.margin = '10px';
  projectBtnSeeSrc.style.alignSelf = 'center';
  projectBtnSeeSrc.style.color = 'white';
  projectBtnSeeSrc.style.display = 'flex';
  projectBtnSeeSrc.style.justifyContent = 'center';
  projectBtnSeeSrc.style.alignItems = 'center';
  projectBtnSeeSrc.style.fontSize = '12px';
  projectBtnWrapper.style.display = 'flex';
  projectBtnWrapper.style.flexDirection = 'column';
  projectBtnWrapper.style.flexWrap = 'wrap';
  projectBtnWrapper.style.justifyContent = 'space-between';
  projectBtnWrapper.style.position = 'relative';
  projectBtnWrapper.style.width = '316px';

  projectBtnWrapper.appendChild(projectBtnGoLive);
  projectBtnWrapper.appendChild(projectBtnSeeSrc);
  projectWindow.appendChild(projectWindowHeader);
  projectWindow.appendChild(imageContainer);
  projectWindow.appendChild(projectDescription);
  projectWindow.appendChild(projectTechnology);
  projectWindow.appendChild(projectBtnWrapper);
  projectWindowWrapper.appendChild(projectWindow);
  currentProject.appendChild(projectWindowWrapper);
  currentProject.insertBefore(
    projectWindowWrapper,
    currentProject.querySelector('.header-container'),
  );

  mediaQuery(screen);
  screen.addEventListener(mediaQuery);
}

function createProjectStructure(projNo) {
  const projectContainer = document.createElement('section');
  const projectPicture = document.createElement('div');
  const projectPictureImage = document.createElement('img');
  const projectBody = document.createElement('div');
  const projectTitle = document.createElement('h2');
  const projectDescription = document.createElement('p');
  const projectTechnologies = document.createElement('ul');
  const projectBtnWrapper = document.createElement('div');
  const projectBtn = document.createElement('button');
  const projectExtraClasses = projects[projNo - 1].extraClass || '';

  projectBtn.textContent = 'See Project';
  projectContainer.className = `project p${projNo} ${projectExtraClasses}`;
  projectContainer.id = `p${projNo}`;
  projectPicture.className = 'project-picture';
  projectBody.className = 'project-body';
  projectTitle.className = 'Project-title';
  projectTechnologies.className = 'technologies';
  projectBtnWrapper.className = 'See-Project';
  projectBtn.className = 'btn-primary';

  projectBtnWrapper.appendChild(projectBtn);
  projectBody.appendChild(projectTitle);
  projectBody.appendChild(projectDescription);
  projectBody.appendChild(projectTechnologies);
  projectBody.appendChild(projectBtnWrapper);
  projectPicture.appendChild(projectPictureImage);
  projectContainer.appendChild(projectPicture);
  projectContainer.appendChild(projectBody);
  workContainer.appendChild(projectContainer);
}

function projectInit(projValues, projNo) {
  const projectContainer = document.getElementById(`p${projNo}`);
  const projectPictureImage = projectContainer.querySelector('.project-picture img');
  const projectTitle = projectContainer.querySelector('.Project-title');
  const projectDescription = projectContainer.querySelector('.project-body p');
  const projectTechnologies = projectContainer.querySelector('.technologies');
  const projectBtn = projectContainer.querySelector('.btn-primary');

  projectPictureImage.src = projValues.featuredImageSource;
  projectPictureImage.alt = projValues.featuredImageAlt;
  projectTitle.textContent = projValues.name;
  projectDescription.textContent = projValues.description;
  for (let i = 0; i < projValues.technology.length; i += 1) {
    const listItem = document.createElement('li');
    listItem.textContent = projValues.technology[i];
    projectTechnologies.appendChild(listItem);
  }
  projectBtn.setAttribute('onClick', `displayProject(${projNo - 1})`);
}

// Build the dynamic project section

for (let index = 0; index < projects.length; index += 1) {
  createProjectStructure(index + 1);
  projectInit(projects[index], index + 1);
}
