import * as yup from 'yup';

export const signUpSchema = yup.object({
  name: yup
    .string()
    .trim()
    .required('Full name is required'),

  email: yup
    .string()
    .trim()
    .email('Enter a valid email')
    .required('Email is required'),

  role: yup
    .string()
    .required('Please select a role'),

  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),

  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Passwords do not match')
    .required('Confirm password is required'),
});