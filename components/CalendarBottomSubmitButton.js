import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import uuid from 'react-uuid';
import {themeColors} from '../assets/color/colors';

export default function CalendarBottomSubmitButton({onNewSubmit}) {
  return (
    <View style={styles.markingWrapper}>
      <Pressable
        onPress={onNewSubmit}
        style={styles.markingButton}
        android_ripple={{color: 'gray'}}>
        <View style={styles.markingContainer}>
          <View style={styles.markingIcon}>
            <Icon
              name="tooltip-edit"
              size={20}
              color={themeColors.calendarScreenSubmitButtonColor}
            />
          </View>
          <View style={styles.markingTextView}>
            <Text style={styles.markingText}>일기추가</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  markingWrapper: {
    height: 25,
    width: 100,

    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: themeColors.calendarScreenSubmitButtonBackgroundColor,
  },
  markingButton: {
    flex: 1,
    margin: -1,
    justifyContent: 'center',
  },
  markingContainer: {flexDirection: 'row', marginLeft: 5},
  markingIcon: {flex: 1},
  markingTextView: {flex: 2.5, marginRight: 4},
  markingText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 15,
    letterSpacing: 1,
  },
});
