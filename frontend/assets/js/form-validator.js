const stringValidator = (value) => {
  const sameType = typeof value === typeof String,
    notEmpty = value !== "";

  return sameType && notEmpty;
};

const emailValidator = (value) => {
  return /^[\w+\-.]+@[a-z\d-]+(\.[a-z]+)*\.[a-z]+$/i.test(value.trim());
};

const dateValidator = (value) => {
  const sameType = typeof value === typeof String,
    notEmpty = value !== "";

  return sameType && notEmpty;
};
const numberValidator = (value) => {
  const sameType = typeof Number(value) === typeof Number,
    notEmpty = value !== "";

  return sameType && notEmpty;
};
const phoneValidator = (value) => {
  const sameType = typeof Number(value) === typeof Number,
    notEmpty = value !== "";

  return sameType && notEmpty;
};

const validationMap = {
  firstName: stringValidator,
  lastName: stringValidator,
  email: emailValidator,
  country: stringValidator,
  postalCode: numberValidator,
  phoneNumber: phoneValidator,
  cardNumber: numberValidator,
  cardCvv: numberValidator,
  cardExpireDate: numberValidator,
};

const validateFields = (formElements) => {
  let validForm = false;

  for (const [key, validator] of Object.entries(validationMap)) {
    validForm = validator(formElements[key].value);
    console.log(key, formElements[key].value);
  }

  // validation should run all fields and after return value and if
  // invalid display warning message to the fields
  return validForm;
};

export default {
  validateFields
}
