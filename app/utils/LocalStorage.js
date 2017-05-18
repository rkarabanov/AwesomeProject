import { AsyncStorage } from 'react-native';

class LocalStorage {

    async getItem(key) {
        let value;
        try {
            value = await AsyncStorage.getItem(key);
            if (value) {
                value = JSON.parse(value);
            }
        } catch (e) {
            // eslint-disable-next-line no-console
            console.log('Storage getItem error', e);
        }
        return value;
    }

    // eslint-disable-next-line consistent-return
    async setItem(key, data) {
        try {
            return await AsyncStorage.setItem(key, JSON.stringify(data));
        } catch (e) {
            // eslint-disable-next-line no-console
            console.log('Storage setItem error', e);
        }
    }

    // eslint-disable-next-line consistent-return
    async removeItem(key) {
        try {
            return await AsyncStorage.removeItem(key);
        } catch (e) {
            // eslint-disable-next-line no-console
            console.log('Storage removeItem error', e);
        }
    }

    async hasItem(key) {
        let isExists = false;
        // eslint-disable-next-line no-unused-vars
        let item;
        try {
            if (item = await AsyncStorage.getItem(key)) {
                isExists = true;
            }
        } catch (e) {
            isExists = false;
        }
        return isExists;
    }
}

export default new LocalStorage();