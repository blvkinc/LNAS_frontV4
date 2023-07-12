/* tslint:disable */
/* eslint-disable */
import { PageableObject } from './pageable-object';
import { SortObject } from './sort-object';
import { TransactionDto } from './transaction-dto';
export interface PageTransactionDto {
  content?: Array<TransactionDto>;
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
