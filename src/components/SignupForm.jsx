import React from 'react';
import { useForm } from 'react-hook-form';
import {
  validateEmail,
  validateName,
  validatePassword,
} from '../utils/validators';

const SignupForm = ({ getData }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    getData(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h4>name:</h4>
      <input {...register('name', validateName)} />
      {errors.name && <span>{errors.name.message}</span>}
      <h4>role:</h4>
      <input {...register('role')} />
      <h4>email:</h4>
      <input {...register('email', validateEmail)} type="email" />
      {errors.email && <span>{errors.email.message}</span>}
      <h4>password:</h4>
      <input {...register('password', validatePassword)} type="password" />
      {errors.password && <span>{errors.password.message}</span>}
      <input type="submit" />
    </form>
  );
};

export default SignupForm;
