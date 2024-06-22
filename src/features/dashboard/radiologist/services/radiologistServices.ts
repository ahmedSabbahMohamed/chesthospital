import { API } from ".";
import { RADIOLOGIST_ENDPOINTS } from "./radiologistEndpoints";

const postRadiologyResults = (results: any) => {
  return API.post(RADIOLOGIST_ENDPOINTS.POST_RESULTS, results);
};

export { postRadiologyResults };
