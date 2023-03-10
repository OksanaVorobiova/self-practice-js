import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

const schema = yup.object().shape({
  login: yup.string().required(),
  password: yup.string().min(6).max(38).required(),
});

const initialValues = {
  login: "",
  password: "",
};

export const LoginForm = () => {
  const handleSubmit = (values, { resetForm }) => {
    // e.preventDefault();
    console.log(values);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      <Form>
        <label>
          Login
          <Field type="text" name="login" id="11" />
          <ErrorMessage name="login" />
        </label>
        <label>
          Password
          <Field type="password" name="password" id="22" />
          <ErrorMessage name="password" />
        </label>
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};
