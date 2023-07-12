/* tslint:disable */
/* eslint-disable */
export interface FarmDto {
  description?: string;
  id?: number;
  location: string;
  name: string;
  status: 'ACTIVE' | 'PENDING' | 'CLOSED';
}
