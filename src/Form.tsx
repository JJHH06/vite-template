import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

function MyForm() {
    // Inicialización de Formik
    const formik = useFormik({
      initialValues: {
        name: '',
        email: '',
        birthdate: null,
      },
      validationSchema: Yup.object({
        name: Yup.string()
          .max(15, 'Debe tener 15 caracteres o menos')
          .required('Requerido'),
        email: Yup.string()
          .email('Correo electrónico inválido')
          .required('Requerido'),
        birthdate: Yup.date()
          .nullable()
          .required('Requerido')
          .max(new Date(), 'La fecha de nacimiento no puede ser en el futuro'),
      }),
      onSubmit: values => {
        alert(JSON.stringify(values, null, 2));
      },
    });
  
    return (
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="name">Nombre:</label>
        <input
          id="name"
          name="name"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
        />
        {formik.touched.name && formik.errors.name ? <div>{formik.errors.name}</div> : null}
  
        <label htmlFor="email">Correo electrónico:</label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? <div>{formik.errors.email}</div> : null}
  
        <label htmlFor="birthdate">Fecha de Nacimiento:</label>
        <DatePicker
          id="birthdate"
          name="birthdate"
          selected={formik.values.birthdate}
          onChange={date => formik.setFieldValue('birthdate', date)}
          dateFormat="dd/MM/yyyy"
          maxDate={new Date()}
          showYearDropdown
          dropdownMode="select"
        />
        {formik.touched.birthdate && formik.errors.birthdate ? <div>{formik.errors.birthdate}</div> : null}
  
        <button type="submit">Enviar</button>
      </form>
    );
  }
  
  export default MyForm;
  