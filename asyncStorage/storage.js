import AsyncStorage from '@react-native-async-storage/async-storage';

export const getMyData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('data');
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {}

  console.log('Done.');
};
