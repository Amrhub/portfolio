/* eslint-disable operator-linebreak */
const form = document.getElementById('fs-frm');

// const form =
form.addEventListener('submit', (e) => {
  const fullName = form.elements['full-name'];
  const email = form.elements['email-address'];
  const fullNameError = fullName.nextElementSibling;
  const emailError = email.nextElementSibling;
  const emailRegex =
    // eslint-disable-next-line no-useless-escape
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const numRegex = /['1''2''0''3''4''5''6''7''8''9'\W]+/;
  const fullNameTest = fullName.value.split(' ');

  // VALIDATION CHECK
  if (fullNameTest.length === 1) {
    fullNameError.textContent =
      'Enter your FULL name separated with whitespace';
  } else {
    for (let i = 0; i < fullNameTest.length; i += 1) {
      if (numRegex.test(fullNameTest[i])) {
        fullNameError.textContent =
          'Name field must consists of alphabets and space only';
        break;
      } else {
        fullNameError.textContent = '';
      }
    }
  }
  if (!emailRegex.test(email.value)) {
    emailError.textContent = 'Invalid Email address format ';
  } else if (email.value !== email.value.toLowerCase()) {
    emailError.textContent = 'Email address should be in lowercase';
  } else {
    emailError.textContent = '';
  }
  // HERE

  if (fullNameError.textContent || emailError.textContent) {
    e.preventDefault();
    if (fullNameError.textContent && emailError.textContent) {
      fullNameError.style.display = 'block';
      emailError.style.display = 'block';
    } else if (emailError.textContent) {
      emailError.style.display = 'block';
    } else {
      fullNameError.style.display = 'block';
    }
  } else {
    e.submit();
  }
});
