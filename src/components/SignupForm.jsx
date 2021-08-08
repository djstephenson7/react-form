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

  const onSubmit = (data) => getData(data);

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <h5>
        name:<sup>*</sup>
      </h5>

      <input className="form-input" {...register('name', validateName)} />
      {errors.name && <span>{errors.name.message}</span>}

      <h5>role:</h5>
      <input className="form-input" {...register('role')} />

      <h5>
        email:<sup>*</sup>
      </h5>
      <input
        className="form-input"
        {...register('email', validateEmail)}
        type="email"
      />
      {errors.email && <span>{errors.email.message}</span>}

      <h5>
        password:<sup>*</sup>
      </h5>
      <input
        className="form-input"
        {...register('password', validatePassword)}
        type="password"
      />
      {errors.password && <span>{errors.password.message}</span>}
      <input className="submit" type="submit" />
    </form>
  );
};

export default SignupForm;
