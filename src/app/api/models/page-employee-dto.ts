/* tslint:disable */
/* eslint-disable */
import { EmployeeDto } from './employee-dto';
import { PageableObject } from './pageable-object';
import { SortObject } from './sort-object';
export interface PageEmployeeDto {
  content?: Array<EmployeeDto>;
  empty?: boolean;
  first?: boolean;
  last?: boolean;
  number?: number;
  numberOfElements?: number;
  pageable?: PageableObject;
  size?: number;
  sort?: SortObject;
  totalElements?: number;
  totalPages?: number;
}
