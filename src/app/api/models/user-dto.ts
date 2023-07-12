/* tslint:disable */
/* eslint-disable */
import { GrantedAuthority } from './granted-authority';
export interface UserDto {
  accountNonExpired?: boolean;
  accountNonLocked?: boolean;
  address?: string;
  authorities?: Array<GrantedAuthority>;
  credentialsNonExpired?: boolean;
  email?: string;
  employee?: number;
  enabled?: boolean;
  firstName?: string;
  id?: number;
  isApproved?: boolean;
  isBanned?: boolean;
  isEmailVerified?: boolean;
  isMfaEnabled?: boolean;
  isPhoneVerified?: boolean;
  isTempPassword?: boolean;
  isTotpVerified?: boolean;
  lastName?: string;
  password: string;
  phone?: string;
  role?: 'ADMIN' | 'MODERATOR' | 'SUPER_ADMIN' | 'EMPLOYEE' | 'CUSTOMER' | 'SUPPLIER';
  username: string;
}
