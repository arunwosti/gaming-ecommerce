function validateAndJoinList() {
   
    resetErrorMessages();

    let hasError = false;


    const email = document.getElementById('email').value;
    const reEmail = document.getElementById('reEmail').value;

    if (email !== reEmail) {
      showError('reEmail', 'Email addresses must match.');
      hasError = true;
    }

    const formInputs = document.querySelectorAll('.form-group input[required]');
    formInputs.forEach(input => {
      const fieldName = input.name;
      if (!input.value.trim()) {
        showError(fieldName, 'This field is required.');
        hasError = true;
      }

      else if ((fieldName === 'firstName' || fieldName === 'lastName') && !/^[A-Za-z]+$/.test(input.value)) {
              showError(fieldName, 'Only letters are allowed.');
              hasError = true;
          }
          else if (fieldName === 'stateCode') {
            if (!/^[A-Za-z]{2}$/.test(input.value)) {
                showError(fieldName, 'Only should contain letters.');
                hasError = true;
            }
  }
  else if (fieldName === 'zipcode' && !/^[A-Za-z]\d[A-Za-z]\d[A-Za-z]$/.test(input.value)) {
        showError(fieldName, 'Invalid zip code pattern.');
        hasError = true;}
  else if (fieldName === 'email' && !input.value.includes('@')) {
    showError(fieldName, 'Invalid email format.');
    hasError = true;
  }
    });

   
    if (hasError) {
      return;
    }

    alert('Form submitted successfully!');
    window.location.href = "/index.html";
    

document.getElementById('subscription-form').reset();
resetErrorMessages();
  }

  function loginForm() {
    document.getElementById('subscription-form').reset();
    resetErrorMessages();
    window.location.href = "/index.html";
  }
  function resetErrorMessages() {
    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(message => message.innerText = '');
  }

  function showError(fieldName, message) {
    const errorField = document.querySelector(`.form-group input[name="${fieldName}"] + .error-message`);
    if (errorField) {
      errorField.innerText = message;
    }
  }
  function login(){
    window.location.href = "/login.html";
  }