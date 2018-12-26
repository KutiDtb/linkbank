import { AsyncStorage } from "react-native"
const KEY_ACCOUNT = 'account';

/**
 * Is using for 
 */
export async function checkAccountSync() {
    return await AsyncStorage.getItem(KEY_ACCOUNT);
}

/**
 * 
 * Is using for 
 *
 * @param {*} account is JSON string. Example {"pin": "123456", "name": "TRANVANA"}
 */
export function saveAccount(account) {
    AsyncStorage.setItem(KEY_ACCOUNT, account);
}