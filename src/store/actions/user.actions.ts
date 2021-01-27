import { User } from 'generated/graphql';

export const USER_PROFILE = '@BSB/user/userProfile';
export const USER_LOG_OUT = '@BSB/user/userLogout';

export function userProfile(payload: User) {
  return { type: USER_PROFILE, payload };
}

export function userLogout() {
  return { type: USER_LOG_OUT };
}
