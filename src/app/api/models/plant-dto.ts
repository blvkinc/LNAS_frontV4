/* tslint:disable */
/* eslint-disable */
export interface PlantDto {
  description?: string;
  id?: number;
  name: string;
  productId: string;
  purchasePrice?: string;
  qtyAtHand: number;
  qtyPotential: number;
  salesPrice?: string;
  scientificName?: string;
  status: 'AVAILABLE' | 'UNAVAILABLE';
}
