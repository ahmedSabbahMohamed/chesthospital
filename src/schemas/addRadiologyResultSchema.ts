import * as Yup from "yup";

const initialValues = {
  name: "",
  result: "",
  patientId: "",
};

const validationSchema = Yup.object({
  name: Yup.string()
    .min(2, "Lab name is to short")
    .required("Name is required"),
  result: Yup.array().min(1, "No files uploaded").required("File is required"),
  patientId: Yup.string().required("patient ID is required"),
});

export { initialValues, validationSchema };
