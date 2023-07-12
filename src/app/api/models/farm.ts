/* tslint:disable */
/* eslint-disable */
import { Employee } from './employee';
export interface Farm {
  dateCreated?: string;
  description?: string;
  employees?: Array<Employee>;
  id?: number;
  lastUpdated?: string;
  location?: string;
  name?: string;
  status?: 'ACTIVE' | 'PENDING' | 'CLOSED';
}
