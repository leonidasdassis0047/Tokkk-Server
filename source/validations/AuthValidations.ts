import Joi from 'joi';

export const UserRegistrationValidation = Joi.object({
  email: Joi.string().required().trim().label('Email address'),
  password: Joi.string().required().trim().label('Password')
});

export const UserSignInValidation = Joi.object({
  email: Joi.string().required().trim().label('Email address'),
  password: Joi.string().required().trim().label('Password')
});
