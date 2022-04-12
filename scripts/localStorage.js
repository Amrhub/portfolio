(() => {
  const fullName = document.getElementById('full-name');
  const email = document.getElementById('email-address');
  const textArea = document.getElementById('message');
  const stringifiedFormValues = localStorage.getItem('form');
  const formValues = JSON.parse(stringifiedFormValues || '{}');
  let formStored;

  function storeValue(key, input) {
    input.addEventListener('input', () => {
      formValues[key] = input.value;
      formStored = JSON.stringify(formValues);
      localStorage.setItem('form', formStored);
    });
  }

  window.onload = () => {
    if (stringifiedFormValues) {
      fullName.value = formValues.fullName;
      email.value = formValues.email;
      textArea.value = formValues.textArea;
    }

    storeValue('fullName', fullName);
    storeValue('email', email);
    storeValue('textArea', textArea);
  };
})();
