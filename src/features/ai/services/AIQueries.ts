import { useMutation } from "@tanstack/react-query";
import * as SERVICES from "./AIServices";

const useXrayService = () => {
  return useMutation({
    mutationFn: SERVICES.xrayService,
    onSuccess: (data) => {
      return data?.data;
    }
  });
};

const useCtScanService = () => {
  return useMutation({
    mutationFn: SERVICES.ctScanService,
    onSuccess: (data) => {
      return data?.data;
    }
  });
};

export { useCtScanService, useXrayService };
