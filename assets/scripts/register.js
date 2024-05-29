
  (function () {
    'use strict';
    window.addEventListener('load', function () {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName('needs-validation');
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function (form) {
        form.addEventListener('submit', function (event) {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add('was-validated');
        }, false);
      });
    }, false);
  })();

  // Password match validation
  document.getElementById('register-btn').addEventListener('click', function(event) {
    var form = document.getElementById('registrationForm');
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;

    if (form.checkValidity() === false || password !== confirmPassword) {
      event.preventDefault();
      event.stopPropagation();
      form.classList.add('was-validated');
      if (password !== confirmPassword) {
        document.getElementById('confirmPassword').setCustomValidity('Passwords do not match');
        document.getElementById('confirmPassword').classList.add('is-invalid');
      }
    } else {
      form.submit();
    }
  });

  document.getElementById('confirmPassword').addEventListener('input', function() {
    var confirmPassword = document.getElementById('confirmPassword');
    confirmPassword.setCustomValidity('');
    confirmPassword.classList.remove('is-invalid');
  });