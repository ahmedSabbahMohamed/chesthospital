import React from "react";
import { MedicalRecordProps } from "../../utils/types";
import { Case, Default, Switch } from "react-if";
import noData from "../../../../assets/images/no-data.gif";
import { IoMdEye } from "react-icons/io";

const MedicalRecord: React.FC<MedicalRecordProps> = ({
  patientName,
  reports,
  labs,
  radiologies,
}) => {
  const showAllReports = (key: string, value: string) => {
    return (
      <div className="border border-slate-200 rounded-lg p-2 flex gap-2">
        <span className="inline-block text-semiDark font-bold">{key}</span>
        <span>{value}</span>
      </div>
    );
  };

  const PreviewResult = ({
    file,
    modalId,
  }: {
    file: string;
    modalId: string;
  }) => {
    return (
      <>
        <button
          className="bg-primary w-6 h-6 flex items-center justify-center rounded-full text-white"
          onClick={() =>
            (document.getElementById(modalId) as HTMLDialogElement)?.showModal()
          }
        >
          <IoMdEye />
        </button>
        <dialog id={modalId} className="modal">
          <div className="modal-box rounded-lg p-0 flex items-center justify-center">
            <form method="dialog">
              <button className="text-2xl text-white bg-slate-400 btn btn-circle absolute right-2 top-2">
                ✕
              </button>
            </form>
            <img className="w-full h-auto rounded-lg" src={file} />
          </div>
        </dialog>
      </>
    );
  };

  const noDataAvailable = (
    <Default>
      <img className=" w-1/6 h-auto" src={noData} alt="no-data" />
    </Default>
  );

  return (
    <div>
      <h2 className="text-dark font-bold text-2xl text-center mb-5">
        Medical record for:
        <br />
        <span className="inline-block text-semiDark">{patientName}</span>
      </h2>
      <div role="tablist" className="tabs tabs-lifted">
        <input
          type="radio"
          name="my_tabs"
          className="tab text-lg"
          aria-label="Diagnoses"
          defaultChecked
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 rounded-box p-6 shadow-md"
        >
          <div className="flex gap-3 flex-wrap">
            <Switch>
              <Case condition={reports.length > 0}>
                {reports?.map(
                  (report: {
                    id: number;
                    prescription: string;
                    diagnose: string;
                    createdAt: string;
                  }) => {
                    return (
                      <div
                        key={report.id}
                        className="border border-slate-200 rounded-lg p-2 flex gap-2 flex-row flex-wrap items-end bg-slate-50"
                      >
                        {showAllReports("preperciption:", report?.prescription)}
                        {showAllReports("diagnose:", report?.diagnose)}
                        <span className="text-slate-500 text-xs">
                          {report.createdAt}
                        </span>
                      </div>
                    );
                  }
                )}
              </Case>
              {noDataAvailable}
            </Switch>
          </div>
        </div>

        <input
          type="radio"
          name="my_tabs"
          className="tab text-lg"
          aria-label="Lab"
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 rounded-box p-6 shadow-md"
        >
          <div className="flex flex-row flex-wrap gap-2">
            <Switch>
              <Case condition={labs.length > 0}>
                {labs?.map(
                  (lab: {
                    id: number;
                    name: string;
                    createdAt: string;
                    result: [];
                  }) => {
                    return (
                      <div
                        key={lab.id}
                        className="border border-slate-200 w-full max-w-xs rounded-lg p-2 flex gap-2 flex-col bg-slate-50"
                      >
                        <h3 className="text-primary">{lab.name}</h3>
                        <div className="border-2 border-dashed border-primary rounded-md p-2 flex flex-wrap flow-row gap-3">
                          {lab?.result?.map((result, index) => {
                            return (
                              <div
                                key={index}
                                className="w-24 h-32 rounded-lg shadow-lg bg-white"
                              >
                                <img
                                  className="w-full h-24 rounded-lg"
                                  src={`https://chesthospital-backend.onrender.com/uploads/${result}`}
                                  alt={result}
                                />
                                <div className="flex items-center justify-center mt-1">
                                  <PreviewResult
                                    file={`https://chesthospital-backend.onrender.com/uploads/${result}`}
                                    modalId={result}
                                  />
                                </div>
                              </div>
                            );
                          })}
                        </div>
                        <span className="text-slate-500 text-xs">
                          {lab.createdAt}
                        </span>
                      </div>
                    );
                  }
                )}
              </Case>
              {noDataAvailable}
            </Switch>
          </div>
        </div>

        <input
          type="radio"
          name="my_tabs"
          className="tab text-lg"
          aria-label="Radiolgy"
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 rounded-box p-6 shadow-md"
        >
          <Switch>
            <Case condition={radiologies.length > 0}>
              {radiologies?.map(
                (radiology: {
                  id: number;
                  name: string;
                  createdAt: string;
                  result: [];
                  notes: string;
                }) => {
                  return (
                    <div
                      key={radiology.id}
                      className="border border-slate-200 w-full max-w-xs rounded-lg p-2 flex gap-2 flex-col bg-slate-50"
                    >
                      <h3 className="text-primary">{radiology.name}</h3>
                      <div className="border-2 border-dashed border-primary rounded-md p-2 flex flex-wrap flow-row gap-3">
                        {radiology?.result?.map((result, index) => {
                          return (
                            <div
                              key={index}
                              className="w-24 h-32 rounded-lg shadow-lg bg-white"
                            >
                              <img
                                className="w-full h-24 rounded-lg"
                                src={`https://chesthospital-backend.onrender.com/uploads/${result}`}
                                alt={result}
                              />
                              <div className="flex items-center justify-center mt-1">
                                <PreviewResult
                                  file={`https://chesthospital-backend.onrender.com/uploads/${result}`}
                                  modalId={result}
                                />
                              </div>
                            </div>
                          );
                        })}
                      </div>
                      <span className="text-slate-500 text-xs">
                        {radiology.createdAt}
                      </span>
                    </div>
                  );
                }
              )}
            </Case>
            {noDataAvailable}
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default MedicalRecord;
