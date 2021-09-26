const invariant = (validator, errorMessage) => (value) => [validator(value), errorMessage];

const stringValidator = (value) => {
  const sameType = typeof value === "string",
    notEmpty = value !== "";

  return sameType && notEmpty;
};

const emailValidator = (value) => {
  return /^[\w.]+@[a-z\d-]+(\.[a-z]+)*\.[a-z]+$/i.test(value);
};

const numberValidator = (minmaxCount) => (value) => {
  const regex = `^[\\d]{${minmaxCount}}$`;
  return value.match(regex);
};

const expDateValidator = (value) => {
  return /^[0-9]{2}\/[0-9]{2}$/i.test(value);
};

const validationMap = {
  firstName: invariant(stringValidator, 'must not be empty!'),
  lastName: invariant(stringValidator, 'must not be empty!'),
  email: invariant(emailValidator, 'has invalid format!'),
  postalCode: invariant(numberValidator(5), 'has invalid format!'),
  phone: invariant(numberValidator(9), 'has invalid format!'),
  creditCard: invariant(numberValidator(16), 'is missing some digits!'),
  CVV: invariant(numberValidator(3), 'requires 3 digits!'),
  expDate: invariant(expDateValidator, 'wrong format!'),
};

const validateFields = (formElements) => {
  let validForm = true;

  for (const [key, validator] of Object.entries(validationMap)) {
    const [isValid, errorMessage] = validator(formElements[key].value.trim()),
      parentNode = formElements[key].parentNode,
      hasError = parentNode.classList.contains('error');

    if (!isValid) {
      validForm = false;
    }

    if (!isValid && !hasError) {
      const errorElement = document.createElement('span');
      errorElement.innerHTML = errorMessage;
      errorElement.classList.add('label-error');

      parentNode.querySelector('label').appendChild(errorElement);
      parentNode.classList.add('error');
    } else if (isValid && hasError) {
      parentNode.classList.remove('error');
      parentNode.querySelector('label span.label-error').remove();
    }
  }

  return validForm;
};

export default {
  validateFields
}
