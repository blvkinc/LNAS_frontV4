/* tslint:disable */
/* eslint-disable */
export interface SalaryDto {
  amount: string;
  description: string;
  employee?: number;
  id?: number;
  paidOn: string;
  status: 'PAID' | 'PENDING' | 'CANCELLED';
}
