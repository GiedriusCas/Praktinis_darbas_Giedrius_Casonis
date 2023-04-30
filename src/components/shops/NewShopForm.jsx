import React from 'react';
import { useAuthCtx } from '../../store/AuthProvider';
import { useFormik } from 'formik';
import './newShopForm.scss';
import * as Yup from 'yup';

const NewShopForm = ({ onNewShop }) => {
  const { user } = useAuthCtx();
  //console.log('user ===', user);
  const formik = useFormik({
    initialValues: {
      shopName: '',
      town: '',
      startYear: '',
      description: '',
      imageUrl: '',
    },
    validationSchema: Yup.object({
      shopName: Yup.string().min(4).required(),
      town: Yup.string().min(4).required(),
      startYear: Yup.number().min(1970).max(2022).required(),
      description: Yup.string().min(6).required(),
      imageUrl: Yup.string().min(5).required(),
    }),
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
          className={formik.touched.shopName && formik.errors.shopName ? 'errorMsg' : formik.values.shopName ? 'filled' : ''}
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
          className={formik.touched.town && formik.errors.town ? 'errorMsg' : formik.values.town ? 'filled' : ''}
        />
        {formik.touched.town && formik.errors.town ? (
          <div className="error-message">{formik.errors.town}</div>
        ) : null}
        <label htmlFor="startYear">Start Year</label>
        <input
          type="number"
          id="startYear"
          name="startYear"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.startYear}
          className={formik.touched.startYear && formik.errors.startYear ? 'errorMsg' : formik.values.startYear ? 'filled' : ''}
        />
        {formik.touched.startYear && formik.errors.startYear ? (
          <div className="error-message">{formik.errors.startYear}</div>
        ) : null}
        <label htmlFor="description">Description</label>
        <input
          type="text"
          id="description"
          name="description"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.description}
          className={formik.touched.description && formik.errors.description ? 'errorMsg' : formik.values.description ? 'filled' : ''}
        />
        {formik.touched.description && formik.errors.description ? (
          <div className="error-message">{formik.errors.description}</div>
        ) : null}
        <label htmlFor="imageUrl">Image url</label>
        <input
          type="text"
          id="imageUrl"
          name="imageUrl"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.imageUrl}
          className={formik.touched.imageUrl && formik.errors.imageUrl ? 'errorMsg' : formik.values.imageUrl ? 'filled' : ''}
        />
        {formik.touched.imageUrl && formik.errors.imageUrl ? (
          <div className="error-message">{formik.errors.imageUrl}</div>
        ) : null}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default NewShopForm;
