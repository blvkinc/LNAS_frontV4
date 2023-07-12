/* tslint:disable */
/* eslint-disable */
import { SortObject } from './sort-object';
export interface PageableObject {
  offset?: number;
  pageNumber?: number;
  pageSize?: number;
  paged?: boolean;
  sort?: SortObject;
  unpaged?: boolean;
}
