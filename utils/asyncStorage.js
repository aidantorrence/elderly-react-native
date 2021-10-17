import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (key, value) => {
    try {
        const jsonValue = JSON.stringify(value)
        await AsyncStorage.setItem(key, value)
    } catch (e) {
      // saving error
    }
  }

export const getData = async (key) => {
try {
    const value = await AsyncStorage.getItem(key)
    if(value !== null) {
        console.log(value)
    // value previously stored
    }
} catch(e) {
    // error reading value
}
}


export const storeList = async (key, value) => {
    const data = getData(key)
    try {
        const jsonValue = JSON.stringify(data)
        await AsyncStorage.setItem(key, value)
    } catch (e) {
      // saving error
    }
  }