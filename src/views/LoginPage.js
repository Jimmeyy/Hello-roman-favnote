import React from 'react';
import { Formik, Form, Field } from 'formik';
import axios from 'axios';

const handleLogin = values => {
  axios
    .post('http://localhost:9000/api/user/login', {
      username: values.username,
      password: values.password,
    })
    .then(res => console.log(res.data.username))
    .catch(err => console.log(err));
};

const LoginPage = () => (
  <div>
    <Formik initialValues={{ username: '', password: '' }} onSubmit={values => handleLogin(values)}>
      {() => (
        <Form>
          <Field name="username" type="text" />
          <Field name="password" type="password" />
          <button type="submit">Sign in</button>
        </Form>
      )}
    </Formik>
  </div>
);

export default LoginPage;
