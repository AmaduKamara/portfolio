const form = document.querySelector('.contact-form');
const message = 'Email address must be in lowercase';

const showMessage = (message) => {
  const msg = document.querySelector('.form-submission-error');
  msg.innerHTML = `<p class="error">${message}</p>`;
};

const validateEmail = (value) => {
  const emailText = value.toLowerCase();
  if (emailText.localeCompare(value) === 0) {
    return true;
  }
  return false;
};

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const messsageText = document.querySelector('.form-submission-error');
  const emailInput = form.elements[1];
  const email = validateEmail(emailInput.value);

  // Object to be stored to LocalStorage
  const userData = {
    name: document.getElementById('user-name').value,
    email: document.getElementById('user-email').value,
    message: document.getElementById('user-message').value,
  };

  if (email) {
    messsageText.remove();
    form.submit();
    
    // Storing to local storage
    localStorage.setItem('userData', JSON.stringify(userData));

    form.reset();
  } else {
    showMessage(message, false);
  }
});
