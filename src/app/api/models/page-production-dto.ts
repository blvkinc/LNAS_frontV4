/* tslint:disable */
/* eslint-disable */
import { PageableObject } from './pageable-object';
import { ProductionDto } from './production-dto';
import { SortObject } from './sort-object';
export interface PageProductionDto {
  content?: Array<ProductionDto>;
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
