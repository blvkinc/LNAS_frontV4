/* tslint:disable */
/* eslint-disable */
import { UserDto } from './user-dto';
export interface EmployeeDto {
  address: string;
  email?: string;
  farms?: Array<number>;
  firstName: string;
  id?: number;
  lastName: string;
  phone?: string;
  status?: 'ACTIVE' | 'INACTIVE' | 'REMOVED';
  userAccount?: UserDto;
}
