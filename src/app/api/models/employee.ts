/* tslint:disable */
/* eslint-disable */
import { Farm } from './farm';
import { Salary } from './salary';
export interface Employee {
  address?: string;
  dateCreated?: string;
  email?: string;
  farms?: Array<Farm>;
  firstName?: string;
  id?: number;
  lastName?: string;
  lastUpdated?: string;
  phone?: string;
  salary?: Salary;
  status?: 'ACTIVE' | 'INACTIVE' | 'REMOVED';
}
