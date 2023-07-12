/* tslint:disable */
/* eslint-disable */
import { PageableObject } from './pageable-object';
import { PurchaseDto } from './purchase-dto';
import { SortObject } from './sort-object';
export interface PagePurchaseDto {
  content?: Array<PurchaseDto>;
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
