import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import BottomMarkingButton from './BottomMarkingButton';
import CalendarBottomSubmitButton from './CalendarBottomSubmitButton';

export default function CalendarBottomButtons({
  onNewSubmit,
  isMarkingsVisible,
  setIsMarkingVisible,
}) {
  const navigation = useNavigation();

  return (
    <View style={styles.block}>
      <View style={styles.space}></View>
      <View style={styles.submitContainer}>
        <CalendarBottomSubmitButton onNewSubmit={onNewSubmit} />
      </View>
      <View style={styles.markingContainer}>
        {isMarkingsVisible ? (
          <BottomMarkingButton
            isMarkingsVisible={isMarkingsVisible}
            setIsMarkingVisible={setIsMarkingVisible}
          />
        ) : (
          <BottomMarkingButton
            isMarkingsVisible={isMarkingsVisible}
            setIsMarkingVisible={setIsMarkingVisible}
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    flexDirection: 'row',
    padding: 5,
  },
  space: {flex: 1, justifyContent: 'center'},
  submitContainer: {marginRight: 10},
  markingContainer: {},
});
