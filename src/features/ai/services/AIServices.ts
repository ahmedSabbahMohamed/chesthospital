import { API } from ".";
import { AI_ENDPOINTS } from "./AIEndpoints";

const xrayService = (req: any) => {
  return API.post(AI_ENDPOINTS.X_RAY, req);
};

const ctScanService = (req: any) => {
  return API.post(AI_ENDPOINTS.CT_SCAN, req);
};

export { xrayService, ctScanService };
