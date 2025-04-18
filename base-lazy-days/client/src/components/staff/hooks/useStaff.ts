import type { Staff } from "@shared/types";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

import { axiosInstance } from "@/axiosInstance";
import { queryKeys } from "@/react-query/constants";

async function getStaff(): Promise<Staff[]> {
  try {
    const { data } = await axiosInstance.get<Staff[]>("/staff");
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export function useStaff() {
  // for filtering staff by treatment
  const [filter, setFilter] = useState("all");

  const fallback: Staff[] = [];

  const { data: staff = fallback } = useQuery({
    queryKey: [queryKeys.staff],
    queryFn: getStaff,
  });

  return { staff, filter, setFilter };
}
