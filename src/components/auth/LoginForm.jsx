import { useFormik } from 'formik';
import React from 'react';
import { useAuthCtx } from '../../store/AuthProvider';
import * as Yup from 'yup'

function LoginForm({ onLogin }) {
  const { isLoading } = useAuthCtx();
  const formik = useFormik({
    initialValues: {
      email: 'jonas@ponas.com',
      password: '789456',
    },
    validationSchema: Yup.object({
      email: Yup.string().email().required(),
      password: Yup.string().min(6).trim().required(),
    }),
    onSubmit: (values) => {
      //console.log('Form values ===', values);
      onLogin(values);
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          className={formik.touched.email && formik.errors.email ? 'errorMsg' : formik.values.email ? 'filled' : ''}
        />
        {formik.touched.email && formik.errors.email ? (
          <div className='error-message'>{formik.errors.email}</div>
        ) : null}
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          name="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
          className={formik.touched.password && formik.errors.password ? 'errorMsg' : formik.values.password ? 'filled' : ''}
        />
        {formik.touched.password && formik.errors.password ? (
          <div className='error-message'>{formik.errors.password}</div>
        ) : null}
      </div>
      <button disabled={isLoading} type="submit">
        Submit
      </button>
    </form>
  );
}

export default LoginForm;
