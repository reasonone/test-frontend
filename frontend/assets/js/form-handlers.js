import formValidator from './form-validator';

const mountFormHandlers = () => {
  const form = document.querySelector('.purchase-form');

  form.addEventListener('submit', event => {
    event.preventDefault();
    const formValid = formValidator.validateFields(form.elements);
    // formValid && sendFormData(new FormData(form))
    //   .then((feedback) => {
    //     console.log(feedback);
    //   });
  })
};

const sendFormData = (data) => fetch('/order', {
  method: "POST",
  body: JSON.stringify(data),
}).then((response) => response.json());

export default mountFormHandlers;
