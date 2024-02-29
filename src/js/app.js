const form = document.getElementById('contact-form');
form.addEventListener('submit', handleFormSubmit);

function handleFormSubmit(event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  if (!name || !email || !message) {
    alert('Please fill out all fields before submitting.');
    return;
  }

  if (!validateEmail(email)) {
    alert('Please enter a valid email address.');
    return;
  }

  saveFormData(name, email, message);
}

function validateEmail(email) {
  const re = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
  return re.test(email);
}

function saveFormData(name, email, message) {
  const formData = { name, email, message };

  // Send the form data to a mock server using the fetch library
  fetch('/api/submit-form', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  })
  .then((response) => {
    if (response.ok) {
      alert('Form submitted successfully!');
    } else {
      alert('Failed to submit form. Please try again.');
    }
  })
  .catch((error) => {
    console.error('Error:', error);
    alert('An error occurred while submitting the form. Please try again.');
  });
}