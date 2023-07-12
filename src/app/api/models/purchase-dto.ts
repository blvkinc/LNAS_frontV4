/* tslint:disable */
/* eslint-disable */
import { PurchaseItemDto } from './purchase-item-dto';
export interface PurchaseDto {
  discount?: number;
  documentId: string;
  id?: number;
  items?: Array<PurchaseItemDto>;
  shipping?: number;
  status?: 'ACTIVE' | 'CLOSED';
  subTotal?: number;
  tax?: number;
  total?: number;
  type?: string;
}
