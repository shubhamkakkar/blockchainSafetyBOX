import { ReturnedUser } from 'generated/graphql';
import AsyncStorage from '@react-native-async-storage/async-storage';
// @ts-ignore
import { ASYNC_STORAGE_KEYS } from 'constants';

export const USER_PROFILE = '@BSB/user/userProfile';
export const USER_LOG_OUT = '@BSB/user/userLogout';

export function userProfile(payload: ReturnedUser) {
  AsyncStorage.setItem(ASYNC_STORAGE_KEYS.AUTH_TOKEN, payload.token);
  return { type: USER_PROFILE, payload };
}

export function userLogout() {
  return { type: USER_LOG_OUT };
}
