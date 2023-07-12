/* tslint:disable */
/* eslint-disable */
import { PageableObject } from './pageable-object';
import { SalaryDto } from './salary-dto';
import { SortObject } from './sort-object';
export interface PageSalaryDto {
  content?: Array<SalaryDto>;
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
