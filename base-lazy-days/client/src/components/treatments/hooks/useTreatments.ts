import type { Treatment } from "@shared/types";
import { useQuery } from "@tanstack/react-query";

import { axiosInstance } from "@/axiosInstance";
import { queryKeys } from "@/react-query/constants";

async function getTreatments(): Promise<Treatment[]> {
  try {
    const { data } = await axiosInstance.get<Treatment[]>("/treatments");
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export function useTreatments(): Treatment[] {
  const fallback: Treatment[] = [];
  const { data = fallback } = useQuery({
    queryKey: [queryKeys.treatments],
    queryFn: getTreatments,
  });

  return data;
}
