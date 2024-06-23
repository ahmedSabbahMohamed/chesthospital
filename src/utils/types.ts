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
  specialization: string;
};

type TitleProps = {
  firstHalf: string;
  secondHalf: string;
};

type ServiceCardProps = {
  img: string;
  title: string;
  desc: string;
};

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  type?: string;
}

type SubmitBtnProps = {
  BtnTxt: string;
  disabled: boolean;
};

type FormContainerProps = {
  children: React.ReactNode;
};

type patientInfoProps = {
  loading: boolean;
  error: any;
  data: any;
  results: React.ReactNode;
  notFound: React.ReactNode;
};

type OptionType = {
  name: string;
  id: string | number;
};

type SelectInputProps = {
  label: string;
  name: string;
  options: OptionType[];
  isMulti?: boolean;
};

type LoginFormValues = {
  email: string;
  password: string;
};

type FileInputProps = {
  name: string;
};

export type {
  DoctorCardProps,
  doc,
  TitleProps,
  ServiceCardProps,
  InputProps,
  SubmitBtnProps,
  FormContainerProps,
  patientInfoProps,
  OptionType,
  SelectInputProps,
  LoginFormValues,
  FileInputProps,
};
