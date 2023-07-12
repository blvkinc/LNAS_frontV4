/* tslint:disable */
/* eslint-disable */
import { Employee } from './employee';
export interface Salary {
  amount?: number;
  dateCreated?: string;
  description?: string;
  employee?: Employee;
  id?: number;
  lastUpdated?: string;
  paidOn?: string;
  status?: 'PAID' | 'PENDING' | 'CANCELLED';
}
