import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import {themeColors} from '../assets/color/colors';

export default function BottomMarkingButton({
  isMarkingsVisible,
  setIsMarkingVisible,
}) {
  return (
    <View style={styles.markingWrapper}>
      <Pressable
        style={styles.markingButton}
        onPress={() => setIsMarkingVisible(!isMarkingsVisible)}
        android_ripple={{color: 'gray'}}>
        <View style={styles.markingContainer}>
          <View style={styles.markingIcon}>
            <Icon
              name="bookmarks"
              size={20}
              color={
                isMarkingsVisible
                  ? themeColors.markingsVisibleColor
                  : themeColors.markingsNotVisibleColor
              }
            />
          </View>
          <View style={styles.markingTextView}>
            {isMarkingsVisible ? (
              <Text style={styles.markingText}>일기표시</Text>
            ) : (
              <Text style={styles.markingTextFaint}>일기표시</Text>
            )}
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
    backgroundColor: themeColors.calendarScreenMarkingButtonBackgroundColor,
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
  markingTextFaint: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 15,
    letterSpacing: 1,
    opacity: 0.5,
  },
});
