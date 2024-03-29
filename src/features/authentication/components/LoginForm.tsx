import React from 'react'
import { Form, Formik } from 'formik'
import Input from '../../../components/form/Input'
import SubmitBtn from '../../../components/form/SubmitBtn';
import { loginSchema, initialValues } from '../../../schemas/loginValidationSchema';
import { useTranslation } from 'react-i18next';

const LoginForm: React.FC = () => {
  const { t } = useTranslation()

  return (
    <Formik initialValues={initialValues} validationSchema={loginSchema} onSubmit={(values) => console.log(values)}>
      {(formikProps) => (
        <Form className="max-w-[350px] flex flex-col gap-3">
          <Input
            label={t("email")}
            name="email"
            id="email"
            type="email"
            placeholder="ahmed@gamil.com"
          />
          <Input
            label={t("password")}
            name="password"
            id="password"
            type="password"
            placeholder="ahme*2laSlskdk"
          />
          <SubmitBtn disabled={formikProps.isSubmitting} BtnTxt={t("signin")} />
        </Form>
      )}
    </Formik>
  );
}

export default LoginForm