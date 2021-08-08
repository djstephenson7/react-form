export const validateName = {
  required: { value: true, message: 'This field is required.' },
};

export const validateEmail = {
  required: {
    value: true,
    message: 'This field is required.',
  },
  pattern: {
    value: /\S+@\S+\.\S+/,
    message: 'This must be a valid email address.',
  },
};

export const validatePassword = {
  required: { value: true, message: 'This field is required.' },
  pattern: {
    value: /^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[0-9])[a-zA-Z0-9]{9,}$/,
    message:
      'Password must contain a minimum of: 9 characters, 1 number, 1 uppercase letter and 1 lowercase letter.',
  },
};
