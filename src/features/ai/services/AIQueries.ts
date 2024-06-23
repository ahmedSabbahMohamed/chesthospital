import { useMutation } from "@tanstack/react-query";
import * as SERVICES from "./AIServices";

const useXrayService = () => {
  return useMutation({
    mutationFn: (req: any) => SERVICES.xrayService(req),
  });
};

const useCtScanService = () => {
  return useMutation({
    mutationFn: (req: any) => SERVICES.ctScanService(req),
  });
};

export { useCtScanService, useXrayService };
