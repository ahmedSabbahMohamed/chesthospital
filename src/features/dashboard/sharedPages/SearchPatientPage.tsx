import React, { useState } from "react";
import SearchPatientForm from "../components/form/SearchPatientForm";
import { Case, Switch } from "react-if";
import Loading from "../../../components/ui/Loading";
import { getErrorWithResponse } from "../../../utils/apiError";
import MedicalRecord from "../components/ui/MedicalRecord";
import Modal from "../components/ui/Modal";
import {
  ConsultationRequest,
  DoctorReport,
  LabRequest,
  MedicineRequest,
  OxygenRequest,
  RadiologyRequest,
} from "../index";
import { useGetPatient } from "./services/sharedQueries";

const REQUESTS_CONFIG = [
  {
    id: 1,
    btnTxt: "Add Report",
    btnColor: "btn-neutral",
    component: DoctorReport,
  },
  {
    id: 2,
    btnTxt: "Lab Request",
    btnColor: "bg-primary",
    component: LabRequest,
  },
  {
    id: 6,
    btnTxt: "Consultation Request",
    btnColor: "bg-green-500",
    component: ConsultationRequest,
  },
  {
    id: 3,
    btnTxt: "Medicine Request",
    btnColor: "btn-warning",
    component: MedicineRequest,
  },
  {
    id: 4,
    btnTxt: "Oxygen Request",
    btnColor: "btn-error",
    component: OxygenRequest,
  },
  {
    id: 5,
    btnTxt: "Radiology Request",
    btnColor: "bg-semiDark",
    component: RadiologyRequest,
  },
];

const SearchPatientPage: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const { data, refetch, error, isLoading } = useGetPatient();

  const handleSubmit = async () => {
    setLoading(true);
    try {
      await refetch();
    } catch (err) {
      console.error("Error while searching for patient:", err);
    } finally {
      setLoading(false);
    }
  };

  const errorWithResponse = getErrorWithResponse(error);
  const patientData = data?.data?.data;

  return (
    <div className="flex flex-col items-center justify-center w-full py-5 container mx-auto">
      <SearchPatientForm
        BtnTxt="Search"
        label="Patient ID"
        disabled={isLoading || loading}
        handleSubmit={handleSubmit}
      />
      <div className="flex flex-col items-center mt-5 w-full px-2 lg:px-5">
        <Switch>
          <Case condition={isLoading || loading}>
            <Loading />
          </Case>
          <Case condition={!!errorWithResponse}>
            <h3 className="text-error">
              {errorWithResponse?.response?.data?.message ||
                "An error occurred"}
            </h3>
          </Case>
          <Case condition={data && data.data.status === "success"}>
            <div className="w-full">
              <MedicalRecord
                patientName={patientData?.patient.name}
                reports={patientData?.reports}
                labs={patientData?.labs}
                radiologies={patientData?.radiologies}
              />
              <div className="flex flex-wrap items-center justify-start gap-2 my-4 px-2">
                {REQUESTS_CONFIG.map(
                  ({ id, btnTxt, btnColor, component: Component }) => (
                    <Modal
                      key={id}
                      id={`modal-${id}`}
                      heading={btnTxt}
                      openButton={btnTxt}
                      styles={btnColor}
                    >
                      <Component id={`modal-${id}`} />
                    </Modal>
                  )
                )}
              </div>
            </div>
          </Case>
        </Switch>
      </div>
    </div>
  );
};

export default SearchPatientPage;
