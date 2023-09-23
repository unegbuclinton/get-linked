import * as yup from 'yup'
export const contactSchema = yup.object().shape({
  email: yup
    .string()
    .email('Invalid email')
    .required('Email is required')
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      'Invalid email format'
    ),
  name: yup.string().required('Name is required'),
  topic: yup.string().required('Lets hear you'),
  message: yup.string().required('Message is required'),
})

export const registerSchema = yup.object().shape({
  email: yup
    .string()
    .email('Invalid email')
    .required('Email is required')
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      'Invalid email format'
    ),
  name: yup.string().required('Name is required'),
  topic: yup.string().required('Lets hear you'),
  message: yup.string().required('Message is required'),
  category: yup.string().required('choose a category'),
  size: yup.string().required('choose a size'),
  phone: yup.number().required('Phone number is required'),
})