import { Form, Formik } from "formik";
import React from "react";
import FileInput from "../../../components/form/FileInput";
import SubmitBtn from "../../../components/form/SubmitBtn";
import { useCtScanService } from "../services/AIQueries";
import { getErrorWithResponse } from "../../../utils/apiError";
import { toast } from "react-toastify";

const CTScan: React.FC = () => {
  const { mutateAsync, data } = useCtScanService();

  const handleSubmit = async (
    values: any,
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }
  ) => {
    const formData = new FormData();
    formData.append("image", values.image[0]);
    try {
      await mutateAsync(formData);
    } catch (err) {
      const error = getErrorWithResponse(err)?.response?.data?.message;
      toast.error(error || "Failed to upload file");
    } finally {
      setSubmitting(false);
    }
  };
  return (
    <div>
      <Formik initialValues={{}} onSubmit={handleSubmit}>
        {({ isSubmitting }) => {
          return (
            <Form className="flex flex-col gap-2">
              <FileInput name="image" />
              <SubmitBtn disabled={isSubmitting} BtnTxt="Get Help!" />
              {data && <div>{data?.data?.data}</div>}
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default CTScan;
