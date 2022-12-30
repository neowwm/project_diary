import AsyncStorage from '@react-native-async-storage/async-storage';
import {format, sub} from 'date-fns';
import {ko} from 'date-fns/locale';
import React, {createContext, useEffect, useMemo, useState} from 'react';
import {LogBox} from 'react-native';

LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);

const today = new Date();

const DummyData = Array.from({length: 30}, (v, i) => ({
  id: i + 1,
  title: `${i + 1}번째제목입니다.`,
  content: `log${i + 1} 내용입니다.`,
  date: sub(today, {days: i}),
}));

export const DataContext = createContext();
export const DataActionsContext = createContext();

export default function DataProvider({children}) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getMyData = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem('data');

        if (jsonValue != null) {
          const rawData = JSON.parse(jsonValue);
          const nextData = rawData.map(item => {
            return {...item, date: new Date(item.date)};
          });
          setData(nextData);
        } else {
          return null;
        }
      } catch (e) {
        throw Error('어쩌고');
      }
    };
    getMyData();
  }, []);

  useEffect(() => {
    const setMyData = async value => {
      try {
        const jsonValue = JSON.stringify(value);
        await AsyncStorage.setItem('data', jsonValue);
      } catch (e) {}
    };
    setMyData(data);
  }, [data]);

  const actions = useMemo(
    () => ({
      diaryRemoveHandler(id) {
        const nextData = data.filter(item => item.id !== id);
        setData(nextData);
      },
      diaryModifyHandler(id, title, content) {
        const nextData = data.map(item =>
          item.id === id
            ? {...item, title: title, content: content, date: new Date()}
            : item,
        );
        setData(nextData);
      },
      diaryCreateHandler(id, title, content) {
        const nextData = data.concat([
          {
            id: id,
            title: title,
            content: content,
            date: new Date(),
          },
        ]);
        setData(nextData);
      },
    }),
    [data],
  );

  return (
    <DataActionsContext.Provider value={actions}>
      <DataContext.Provider value={data}>{children}</DataContext.Provider>
    </DataActionsContext.Provider>
  );
}
