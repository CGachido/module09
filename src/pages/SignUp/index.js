import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';

import * as Yup from 'yup';
import logo from '~/assets/logo.svg';

import { signUpRequest } from '~/store/modules/auth/actions';

const schema = Yup.object().shape({
  name: Yup.string().required('Name is a required field'),
  email: Yup.string()
    .email('Invalid email')
    .required('Email is a required field'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is a required field'),
});

export default function SignUp() {
  const dispatch = useDispatch();
  function handleSubmit({ name, email, password }) {
    dispatch(signUpRequest(name, email, password));
  }
  return (
    <>
      <img src={logo} alt="GoBarber" />

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="name" type="text" placeholder="Full name" />
        <Input name="email" type="email" placeholder="E-mail" />
        <Input name="password" type="password" placeholder="Password" />

        <button type="submit">Access</button>
        <Link to="/">Login</Link>
      </Form>
    </>
  );
}
