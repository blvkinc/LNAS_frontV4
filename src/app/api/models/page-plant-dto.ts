/* tslint:disable */
/* eslint-disable */
import { PageableObject } from './pageable-object';
import { PlantDto } from './plant-dto';
import { SortObject } from './sort-object';
export interface PagePlantDto {
  content?: Array<PlantDto>;
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
