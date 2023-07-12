/* tslint:disable */
/* eslint-disable */
import { FarmDto } from './farm-dto';
import { PageableObject } from './pageable-object';
import { SortObject } from './sort-object';
export interface PageFarmDto {
  content?: Array<FarmDto>;
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
