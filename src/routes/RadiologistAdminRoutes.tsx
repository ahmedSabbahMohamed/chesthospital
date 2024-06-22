import React from "react";
import RadiologistAdmin from "../pages/RadiologistAdmin";
import RadiologyRequests from "../features/dashboard/sharedPages/RadiologyRequests";
import { useRoutes } from "react-router-dom";
import NotFoundPage from "../components/ui/NotFoundPage";
import { UploadRadiologyResult } from "../features/dashboard/radiologist/admin";

const RadiologistAdminRoutes: React.FC = () => {
  const existingPaths = [
    {
      path: "",
      element: <RadiologistAdmin />,
      children: [
        { index: true, element: <RadiologyRequests /> },
        { path: "/upload-result", element: <UploadRadiologyResult /> },
      ],
    },
  ];

  const routes = useRoutes(existingPaths);

  return (
    <>
      {!routes && <NotFoundPage />}
      {routes}
    </>
  );
};

export default RadiologistAdminRoutes;
