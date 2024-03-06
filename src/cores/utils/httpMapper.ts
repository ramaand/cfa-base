import { AxiosResponse } from 'axios';

export const httpAxiosMapper = (res: unknown) =>
  JSON.parse((res as AxiosResponse).data);
