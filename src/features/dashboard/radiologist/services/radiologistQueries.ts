import { useMutation, useQueryClient } from "@tanstack/react-query";
import * as SERVICES from "./radiologistServices";
import { getErrorWithResponse } from "../../../../utils/apiError";
import { toast } from "react-toastify";

const usePostRadiologyResults = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: SERVICES.postRadiologyResults,
    onSuccess: () => {
      queryClient.invalidateQueries();
      toast.success("Added results successfully!");
    },
    onError: (err) => {
      const error = getErrorWithResponse(err)?.response?.data.message;
      toast.error(error || "Failed to send the results");
    },
  });
};

export { usePostRadiologyResults };
