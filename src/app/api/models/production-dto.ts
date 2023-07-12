/* tslint:disable */
/* eslint-disable */
export interface ProductionDto {
  dateCreated?: string;
  description?: string;
  farm?: number;
  id?: number;
  lastUpdated?: string;
  name: string;
  plant?: number;
  productId: string;
  qty: number;
  status?: 'AVAILABLE' | 'IN_PRODUCTION';
}
