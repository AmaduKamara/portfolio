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
