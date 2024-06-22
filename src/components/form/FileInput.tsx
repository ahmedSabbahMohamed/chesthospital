import React, { useCallback, useState, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoMdEye } from "react-icons/io";
import { useField, useFormikContext } from "formik";
import { FileInputProps } from "../../utils/types";

const FileInput: React.FC<FileInputProps> = ({ name }) => {
  const { setFieldValue, touched, errors } = useFormikContext<any>();
  const [field] = useField(name);
  const [files, setFiles] = useState<File[]>(field.value || []);

  useEffect(() => {
    setFieldValue(name, files);
  }, [files, setFieldValue, name]);

  const { getRootProps, getInputProps, open } = useDropzone({
    noClick: true,
    noKeyboard: true,
    onDrop: (acceptedFiles) => {
      setFiles((prevFiles) => [...prevFiles, ...acceptedFiles]);
    },
  });

  const handleAddFiles = useCallback(() => {
    open();
  }, [open]);

  const handleDeleteFile = useCallback((fileToDelete: File) => {
    setFiles((prevFiles) => prevFiles.filter((file) => file !== fileToDelete));
  }, []);

  const PreviewFile = ({ file, modalId }: { file: File; modalId: string }) => {
    return (
      <>
        <button
          type="button"
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
            <img
              className="w-full h-auto rounded-lg"
              src={URL.createObjectURL(file)}
            />
          </div>
        </dialog>
      </>
    );
  };

  const DeleteFile = ({ file }: { file: File }) => {
    return (
      <button
        className="bg-error text-white w-6 h-6 rounded-full flex items-center justify-center"
        onClick={() => handleDeleteFile(file)}
      >
        <RiDeleteBin6Line />
      </button>
    );
  };

  const hasError = errors[name] && touched[name];

  return (
    <section className="container mx-auto">
      <div {...getRootProps({ className: "dropzone" })}>
        <label
          htmlFor={name}
          className={`block mb-2 ${hasError ? "text-error" : "text-semiDark"}`}
        >
          {hasError ? errors[name]?.toString() : "Upload File:"}
        </label>
        <input name={name} {...getInputProps()} />
        <div className="flex items-center justify-start flex-row flex-wrap gap-2 border-2 border-dashed border-primary rounded-md p-2 w-full max-w-xs overflow-x-auto">
          {files.map((file, index) => (
            <div
              key={file.name}
              className={`w-24 h-32 rounded-lg shadow-lg bg-white`}
            >
              <img
                className="w-full h-24 rounded-lg"
                src={URL.createObjectURL(file)}
                alt={file.name}
              />
              <div className="flex flex-row justify-center items-center gap-1 mt-1">
                <DeleteFile file={file} />
                <PreviewFile file={file} modalId={index.toString()} />
              </div>
            </div>
          ))}

          <div className="w-24 h-32 bg-white rounded-lg shadow-md flex place-content-center border-2 border-slate-400 border-dashed">
            <button
              type="button"
              onClick={handleAddFiles}
              className="text-2xl w-full h-full"
            >
              +
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FileInput;
