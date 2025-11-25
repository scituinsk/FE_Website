export interface TechStack {
  id: number;
  name: string;
  logoUrl: string;
  createdAt: string;
  updatedAt: string;
}

export interface TechStackApiResponse {
  statusCode: number;
  message: string;
  data: TechStack[];
}
