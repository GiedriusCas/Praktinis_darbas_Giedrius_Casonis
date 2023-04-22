import React from 'react';
import { useAuthCtx } from '../../store/AuthProvider';
import { useFormik } from 'formik';

const NewShopForm = ({ onNewShop }) => {
  const { user } = useAuthCtx();
  console.log('user ===', user);
  const formik = useFormik({
    initialValues: {
      shopName: '',
      town: '',
      startYear: '',
      description: '',
      imageUrl: '',
    },
    validate: (values) => {
      const errors = {};
      if (!values.shopName) errors.shopName = 'Shop name is required';
      if (!values.town) errors.town = 'Town is required';
      if (!values.startYear) errors.startYear = 'Est. Year is required';
      if (!values.description) errors.description = 'Description is required';
      return errors;
    },
    onSubmit: (values) => {
      onNewShop(values);
    },
  });

  return (
    <div className="new-post-form">
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="shopName">Shop name</label>
        <input
          type="text"
          id="shopName"
          name="shopName"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.shopName}
        />
        {formik.touched.shopName && formik.errors.shopName ? (
          <div className="error-message">{formik.errors.shopName}</div>
        ) : null}
        <label htmlFor="town">Town</label>
        <input
          type="text"
          id="town"
          name="town"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.town}
        />
        {formik.touched.town && formik.errors.town ? (
          <div className="error-message">{formik.errors.town}</div>
        ) : null}
        <label htmlFor="startYear">Start Year</label>
        <input
          type="text"
          id="startYear"
          name="startYear"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.startYear}
        />
        {formik.touched.startYear && formik.errors.startYear ? (
          <div className="error-message">{formik.errors.startYear}</div>
        ) : null}
      </form>
    </div>
  );
};

export default NewShopForm;
