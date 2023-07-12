/* tslint:disable */
/* eslint-disable */
import { FieldError } from './field-error';
export interface ErrorResponse {
  exception?: string;
  fieldErrors?: Array<FieldError>;
  httpStatus?: number;
  message?: string;
}
