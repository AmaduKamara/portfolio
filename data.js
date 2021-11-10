const projects = [
  {
    name: 'Tonic',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis deserunt nesciunt nulla tenetur ipsam dolorum placeat natus aperiam recusandae maiores.',
    featuredImage: './images/projects/Tonic-one.png',
    technologies: ['html', 'Ruby and rails', 'css', 'javascript'],
    stacks: ['canopy', 'Backend Dev', '2015'],
  },
  {
    name: 'Multi-Post Stores',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis deserunt nesciunt nulla tenetur ipsam dolorum placeat natus aperiam recusandae maiores.',
    featuredImage: './images/projects/Multi-Post-One.png',
    technologies: ['html', 'Ruby and rails', 'css', 'javascript'],
    stacks: ['canopy', 'Backend Dev', '2015'],
  },
  {
    name: 'Facebook 360',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis deserunt nesciunt nulla tenetur ipsam dolorum placeat natus aperiam recusandae maiores.',
    featuredImage: './images/projects/Facebook-360.png',
    technologies: ['html', 'Ruby and rails', 'css', 'javascript'],
    stacks: ['canopy', 'Backend Dev', '2015'],
  },
  {
    name: 'Uber Navigator',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis deserunt nesciunt nulla tenetur ipsam dolorum placeat natus aperiam recusandae maiores.',
    featuredImage: './images/projects/Uber-Navigator.png',
    technologies: ['html', 'css', 'javascript', 'Ruby and rails'],
    stacks: ['canopy', 'Backend Dev', '2015'],
  },
];

// Tonic Modal Details
const openTonicModal = document.querySelector('#open-tonic-modal');
const tonicModalContainer = document.querySelector('.tonic-modal-container');
const closeTonicModal = document.querySelector('#tonic-modal-close');

openTonicModal.addEventListener('click', () => {
  tonicModalContainer.classList.add('show');
});

closeTonicModal.addEventListener('click', () => {
  tonicModalContainer.classList.remove('show');
});

document.querySelector('.tonic-title').textContent = projects[0].name;

document.querySelector('.tonic-stack1').textContent =
  projects[0].stacks[0].toUpperCase();
document.querySelector('.tonic-stack2').textContent = projects[0].stacks[1];
document.querySelector('.tonic-stack3').textContent = projects[0].stacks[2];
document.querySelector('.tonic-description').textContent =
  projects[0].description;
document.querySelector('.tonic-image').src = projects[0].featuredImage;
document.querySelector('.tonic-html').textContent = projects[0].technologies[0];
document.querySelector('.tonic-css').textContent = projects[0].technologies[1];
document.querySelector('.tonic-javascript').textContent =
  projects[0].technologies[2];
document.querySelector('.tonic-ruby').textContent = projects[0].technologies[3];


// Multipost-Store Modal Details
const openMultipostModal = document.querySelector('#open-multipost-modal');
const multipostModalContainer = document.querySelector('.multipost-modal-container');
const closeMultipostModal = document.querySelector('#multipost-modal-close');

openMultipostModal.addEventListener('click', () => {
  multipostModalContainer.classList.add('show');
});

closeMultipostModal.addEventListener('click', () => {
  multipostModalContainer.classList.remove('show');
});

document.querySelector('.multipost-title').textContent = projects[1].name;

document.querySelector('.multipost-stack1').textContent =
  projects[1].stacks[0].toUpperCase();
document.querySelector('.multipost-stack2').textContent = projects[1].stacks[1];
document.querySelector('.multipost-stack3').textContent = projects[1].stacks[2];
document.querySelector('.multipost-description').textContent =
  projects[1].description;
document.querySelector('.multipost-image').src = projects[1].featuredImage;
document.querySelector('.multipost-html').textContent = projects[1].technologies[0];
document.querySelector('.multipost-css').textContent = projects[1].technologies[1];
document.querySelector('.multipost-javascript').textContent =
  projects[1].technologies[2];
document.querySelector('.multipost-ruby').textContent = projects[1].technologies[3];

// Facebook360-Store Modal Details
const openFacebookModal = document.querySelector('#open-facebook-modal');
const facebookModalContainer = document.querySelector('.facebook-modal-container');
const closeFacebookModal = document.querySelector('#facebook-modal-close');

openFacebookModal.addEventListener('click', () => {
  facebookModalContainer.classList.add('show');
});

closeFacebookModal.addEventListener('click', () => {
  facebookModalContainer.classList.remove('show');
});

document.querySelector('.facebook-title').textContent = projects[2].name;

document.querySelector('.facebook-stack1').textContent =
  projects[2].stacks[0].toUpperCase();
document.querySelector('.facebook-stack2').textContent = projects[2].stacks[1];
document.querySelector('.facebook-stack3').textContent = projects[2].stacks[2];
document.querySelector('.facebook-description').textContent =
  projects[2].description;
document.querySelector('.facebook-image').src = projects[2].featuredImage;
document.querySelector('.facebook-html').textContent = projects[2].technologies[0];
document.querySelector('.facebook-css').textContent = projects[2].technologies[1];
document.querySelector('.facebook-javascript').textContent =
  projects[2].technologies[2];
document.querySelector('.facebook-ruby').textContent = projects[2].technologies[3];


// Uber Modal Details
const openUberModal = document.querySelector('#open-uber-modal');
const uberModalContainer = document.querySelector('.uber-modal-container');
const closeUberModal = document.querySelector('#uber-modal-close');

openUberModal.addEventListener('click', () => {
  uberModalContainer.classList.add('show');
});

closeUberModal.addEventListener('click', () => {
  uberModalContainer.classList.remove('show');
});

document.querySelector('.uber-title').textContent = projects[3].name;

document.querySelector('.uber-stack1').textContent =
  projects[3].stacks[0].toUpperCase();
document.querySelector('.uber-stack2').textContent = projects[3].stacks[1];
document.querySelector('.uber-stack3').textContent = projects[3].stacks[2];
document.querySelector('.uber-description').textContent =
  projects[3].description;
document.querySelector('.uber-image').src = projects[3].featuredImage;
document.querySelector('.uber-html').textContent = projects[3].technologies[0];
document.querySelector('.uber-css').textContent = projects[3].technologies[1];
document.querySelector('.uber-javascript').textContent =
  projects[3].technologies[2];
document.querySelector('.uber-ruby').textContent = projects[3].technologies[3];
