/* tslint:disable */
/* eslint-disable */
import { CustomerDto } from './customer-dto';
import { PageableObject } from './pageable-object';
import { SortObject } from './sort-object';
export interface PageCustomerDto {
  content?: Array<CustomerDto>;
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
