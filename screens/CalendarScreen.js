import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {themeColors} from '../assets/color/colors';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import ItemsList from '../components/ItemsList';
import {useDataContext} from '../contexts/useContext';

import defineLocale from '../config/defineLocale';
import CalendarBottomButtons from '../components/CalendarBottomButtons';
import uuid from 'react-uuid';
import {format} from 'date-fns';

defineLocale();

export default function CalendarScreen({navigation}) {
  const data = useDataContext();
  console.log(data);

  const [selectedDate, setSelectedDate] = useState({
    dateString: format(new Date(), 'yyyy-MM-dd'),
  });
  const [isMarkingsVisible, setIsMarkingsVisible] = useState(true);
  const [markedDates, setMarkedDates] = useState({});
  const filteredData = data.filter(
    item => format(item.date, 'yyyy-MM-dd') === selectedDate,
  );

  const onNewSubmit = () => {
    navigation.navigate('DiaryScreen', {id: uuid(), date: new Date()});
  };

  useEffect(() => {
    function updateMarkedDates() {
      const nextMarkedDates = {};
      data.forEach(
        element =>
          (nextMarkedDates[format(element.date, 'yyyy-MM-dd')] = {
            marked: isMarkingsVisible,
          }),
      );
      nextMarkedDates[selectedDate] = {
        selected: true,
        marked: nextMarkedDates[selectedDate]?.marked,
      };
      setMarkedDates(nextMarkedDates);
    }
    updateMarkedDates();
  }, [data, isMarkingsVisible, selectedDate]);

  return (
    <View style={styles.block}>
      <ItemsList
        data={filteredData}
        header={
          <Calendar
            markedDates={markedDates}
            onDayPress={day => {
              setSelectedDate(day.dateString);
            }}
          />
        }
        footer={
          <CalendarBottomButtons
            isMarkingsVisible={isMarkingsVisible}
            setIsMarkingVisible={setIsMarkingsVisible}
            onNewSubmit={onNewSubmit}
          />
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  block: {flex: 1, backgroundColor: themeColors.calendarScreenBackgroundColor},
});
