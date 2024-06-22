import { Form, Formik } from "formik";
import React from "react";
import Input from "../../../../../components/form/Input";
import SubmitBtn from "../../../../../components/form/SubmitBtn";
import FileInput from "../../../../../components/form/FileInput";
import { usePostRadiologyResults } from "../../services/radiologistQueries";
import useEmployeeId from "../../../../../hooks/EmployeeId";
import { convertToFormData } from "../../../../../utils/helpers";
import {
  initialValues,
  validationSchema,
} from "../../../../../schemas/addRadiologyResultSchema";

const ResultForm: React.FC = () => {
  const { mutateAsync } = usePostRadiologyResults();
  const docotrId = useEmployeeId();
  const handleSubmit = async (
    values: typeof initialValues,
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }
  ) => {
    const labResults = {
      ...values,
      doctorId: docotrId,
    };
    try {
      const formData = convertToFormData(labResults);
      await mutateAsync(formData);
    } catch (err) {
      console.log(err);
    } finally {
      setSubmitting(false);
    }
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => {
        return (
          <Form className="flex flex-col gap-2">
            <Input label="Patient ID:" name="patientId" />
            <Input label="Lab Name:" name="name" />
            <Input label="Notes:" name="notes" />
            <FileInput name="result" />
            <SubmitBtn BtnTxt="Send Results" disabled={isSubmitting} />
          </Form>
        );
      }}
    </Formik>
  );
};

export default ResultForm;
