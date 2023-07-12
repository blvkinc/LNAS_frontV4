/* tslint:disable */
/* eslint-disable */
export interface TransactionDto {
  amount?: string;
  date?: string;
  id?: number;
  method?: 'CASH' | 'BANK_TRANSFER' | 'CHEQUE' | 'CREDIT' | 'PAYPAL';
}
