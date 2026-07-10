import { api } from "@/lib/api";

export interface DashboardCountData {
  presentToday: number;
  totalEmployees: number;
  onLeave: number;
  avgWorkingHours: any;
}

export interface DashboardCountResponse {
  code: string;
  message: string;
  responseData: {
    data: DashboardCountData;
  };
}

export const dashboardCount = async (): Promise<DashboardCountResponse> => {
  return api({
    endpoint: "/users/dashboardCount",
  });
};
