import React from "react";

type DoctorCardProps = {
  img: any;
  docName: string;
  docSpeciality: string;
};

type doc = {
    id: number;
    img: string;
    name: string;
    speciality: string;
}

type TitleProps = {
    firstHalf: string;
    secondHalf: string;
}

type ServiceCardProps = {
  img: string;
  title: string;
  desc: string;
}

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  type?: string;
}

type SubmitBtnProps = {
  BtnTxt: string;
  disabled: boolean;
}

type FormContainerProps = {
  children: React.ReactNode
}

type SearchPatientFormProps = {
  handleSubmit: any;
  label: string;
  BtnTxt: string;
  disabled: boolean;
}

type sidebarProps = {
  dir: string;
  sidebarContent: React.ReactNode;
}

type patientInfoProps = {
  loading: boolean;
  error: any;
  data: any;
  results: React.ReactNode;
  notFound: React.ReactNode;
}

type patientDataProps = {
  id: string,
  name: string,
  phone: string,
}

type NotFoundPatientProps = {
  message: string | undefined;
}

export type {
  DoctorCardProps,
  doc,
  TitleProps,
  ServiceCardProps,
  InputProps,
  SubmitBtnProps,
  FormContainerProps,
  SearchPatientFormProps,
  sidebarProps,
  patientInfoProps,
  patientDataProps,
  NotFoundPatientProps,
};
