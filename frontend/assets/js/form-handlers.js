import formValidator from './form-validator';

const mountFormHandlers = () => {
  const form = document.querySelector('#purchase-form');

  form.addEventListener('submit', event => {
    event.preventDefault();
    const formValid = formValidator.validateFields(form.elements);

    if (formValid) {
      const data = {},
        formData = new FormData(form);

      formData.forEach((value, key) => data[key] = value);

      sendFormData(data)
        .then((feedback) => {
          document.querySelector('body').classList.remove('success', 'error');

          if (feedback.message) {
            document.querySelector('body').classList.add('success');
          } else {
            document.querySelector('body').classList.add('error');
          }
        })
      .catch(() => {
        document.querySelector('body').classList.add('error');
      });
    }

  })
};

const sendFormData = (data) => window.fetch('/order', {
  method: "POST",
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
}).then((response) => response.json());

export default mountFormHandlers;
