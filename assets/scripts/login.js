document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('signInButton').addEventListener('click', function() {
      const emailInput = document.getElementById('email');
      const passwordInput = document.getElementById('password');

      const emailValue = emailInput.value.trim();
      const passwordValue = passwordInput.value.trim();

      if (emailValue === '') {
        emailInput.classList.add('is-invalid');
        emailInput.nextElementSibling.textContent = 'Please enter a valid email address.';
        return;
      } else {
        emailInput.classList.remove('is-invalid');
      }

      if (passwordValue === '') {
        passwordInput.classList.add('is-invalid');
        passwordInput.nextElementSibling.textContent = 'Please enter your password.';
        return;
      } else {
        passwordInput.classList.remove('is-invalid');
      }

      // If all fields are valid, you can proceed with form submission
      // For example, you can submit the form using AJAX or any other method
      alert('Form submitted successfully!');
      // Here you can add your code to submit the form
    });
  });