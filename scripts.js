document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('demo-request-form');

  form.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent the default form submission

      // Select form elements by their IDs and store their values in variables
      const name = document.getElementById('name').value;
      const phone = document.getElementById('number').value;
      const email = document.getElementById('mail').value;
      const query = document.getElementById('textarea').value;

      // Validate form data
      if (!name || !phone || !email || !query) {
          alert('Please fill in all fields.');
          return;
      }

      // Create an object with the form data
      const userData = {
          name: name,
          phone: phone,
          email: email,
          query: query
      };

      // Save the data to window.localStorage or window.sessionStorage (optional)
      window.localStorage.setItem('formData', JSON.stringify(userData));

      // Use Axios to send a POST request to the backend API
      axios.post('http://localhost:8000/contact-form', userData)
          .then(response => {
              console.log('Success:', response.data);
              window.location.href = 'form.html'; // Redirect to form.html on success
          })
          .catch(error => {
              console.error('Error:', error);
              // Display an error message to the user
              alert('There was an error submitting the form. Please try again.');
          });
  });
});
