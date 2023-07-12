/* tslint:disable */
/* eslint-disable */
export interface CustomerDto {
  address: string;
  email?: string;
  firstName: string;
  id?: number;
  lastName: string;
  phone?: string;
  status?: 'ACTIVE' | 'INACTIVE' | 'REMOVED';
}
