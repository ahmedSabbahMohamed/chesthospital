import React, { useState } from "react";
import { Form, Formik, FormikHelpers } from "formik";
import Input from "../../../../../components/form/Input";
import SubmitBtn from "../../../../../components/form/SubmitBtn";
import {
  initialValues,
  validationSchema,
} from "../../../../../schemas/addPatientValidationSchema";
import Loading from "../../../../../components/ui/Loading";
import { usePostPatient } from "../../services/receptionQueries";
import { PatientValues } from "../../utils/types";

const AddPatientForm: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const { mutateAsync } = usePostPatient();

  const handleSubmit = async (
    values: PatientValues,
    { setSubmitting }: FormikHelpers<PatientValues>
  ) => {
    setLoading(true);
    try {
      await mutateAsync(values);
    } catch (error) {
      console.log("Failed to add patient file");
    } finally {
      setLoading(false);
      setSubmitting(false);
    }
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form
            className={`flex sm:flex-row flex-wrap items-end justify-center gap-4`}
          >
            <Input
              label="اسم المريض"
              name="name"
              placeholder="e.g. Ahmed Sabbah Mohamed"
            />
            <Input
              label="الرقم القومي"
              name="id"
              placeholder="e.g. 12345678934567"
            />
            <Input
              label="رقم التليفون"
              name="phone"
              placeholder="e.g.01557551293"
            />
            <Input
              label="عنوان البريد الإلكتروني"
              name="email"
              placeholder="e.g.01557551293"
            />
            <Input
              label="تاريخ الميلاد"
              name="dateOfBirth"
              type="date"
              placeholder="12/31/1990"
            />
            <Input label="العنوان" name="address" placeholder="" />
            <SubmitBtn
              BtnTxt="إضافة المريض"
              disabled={loading || isSubmitting}
            />
          </Form>
        )}
      </Formik>

      {loading && (
        <div className="w-screen h-screen bg-[#caccce9c] z-50 fixed top-0 left-0 flex justify-center items-center">
          <Loading />
        </div>
      )}
    </>
  );
};

export default AddPatientForm;
