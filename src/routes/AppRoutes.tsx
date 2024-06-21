import React, { useEffect, useState } from 'react';
import { Switch, Case, Default } from 'react-if';
import DoctorRoutes from './DoctorRoutes';
import ReceptionRoutes from './ReceptionRoutes';
import PublicRoutes from './PublicRoutes';
import ManagerRoutes from './ManagerRoutes';
import PharmacistRoutes from './PharmacistRoutes';
import NursingAdminRoutes from './NursingAdminRoutes';
import LabAdminRoutes from './LabAdminRoutes';
import RadiologistAdminRoutes from './RadiologistAdminRoutes';

const AppRoutes: React.FC = () => {
  const [specialization, setSpecialization] = useState<string | null>(null);

  useEffect(() => {
    const fetchedSpecialization = localStorage.getItem("specialization");
    setSpecialization(fetchedSpecialization);
    }, []);

  return (
    <Switch>
      <Default>
        <PublicRoutes />
      </Default>
      <Case condition={specialization === "DOCTOR"}>
        <DoctorRoutes />
      </Case>
      <Case condition={specialization === "RECEPTIONIST"}>
        <ReceptionRoutes />
      </Case>
      <Case condition={specialization === "MANAGER"}>
        <ManagerRoutes />
      </Case>
      <Case condition={specialization === "PHARMACY"}>
        <PharmacistRoutes />
      </Case>
      <Case condition={specialization === "NURSE"}>
        <NursingAdminRoutes />
      </Case>
      <Case condition={specialization === "LAB"}>
        <LabAdminRoutes />
      </Case>
      <Case condition={specialization === "RADIOLOGIST"}>
        <RadiologistAdminRoutes />
      </Case>
    </Switch>
  );
}

export default AppRoutes