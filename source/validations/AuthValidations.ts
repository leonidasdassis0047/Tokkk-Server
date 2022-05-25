import Joi from 'joi';

export const UserRegistrationValidation = Joi.object({
  email: Joi.string().required().trim().label('Email address'),
  first_name: Joi.string().required().trim().label('First name'),
  last_name: Joi.string().required().trim().label('Last name'),
  username: Joi.string().required().trim().label('Username'),
  password: Joi.string().required().trim().label('Password')
});

export const UserSignInValidation = Joi.object({
  email: Joi.string().required().trim().label('Email address'),
  password: Joi.string().required().trim().label('Password')
});
