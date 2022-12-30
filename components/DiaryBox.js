import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {themeColors} from '../assets/color/colors';

export default function DiaryBox({
  title,
  content,
  mode,
  onChangeText,
  onchangeTitle,
}) {
  return (
    <View style={styles.block}>
      {mode === true ? (
        <>
          <View style={styles.titleContainer}>
            <Text numberOfLines={1} style={styles.title}>
              {title}
            </Text>
          </View>
          <View style={styles.contentContainer}>
            <Text style={styles.content}>{content}</Text>
          </View>
        </>
      ) : (
        <>
          <View style={styles.textInputTitleContainer}>
            <TextInput
              style={styles.textInputTitle}
              value={title}
              autoFocus
              onChangeText={onchangeTitle}
              numberOfLines={1}
            />
          </View>
          <View style={styles.textInputContentContainer}>
            <TextInput
              multiline
              style={styles.textInputContent}
              value={content}
              onChangeText={onChangeText}
            />
          </View>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
    padding: 5,
    margin: 5,
    borderWidth: 0.5,
    borderColor: 'gray',
    borderRadius: 5,
  },

  titleContainer: {
    height: 60,
    borderBottomWidth: 0.2,
    padding: 5,
    borderColor: 'gray',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    color: themeColors.diaryContentColor,
  },
  contentContainer: {flex: 1, padding: 5},
  content: {
    fontSize: 15,
    color: themeColors.diaryContentColor,
    padding: 0,
  },

  textInputTitleContainer: {
    height: 60,
    borderBottomWidth: 0.2,
    padding: 1,
    borderColor: 'gray',
    justifyContent: 'center',
  },
  textInputTitle: {fontSize: 20, color: themeColors.diaryContentColor},
  textInputContentContainer: {flex: 1, paddingLeft: 5, paddingTop: 1},
  textInputContent: {
    fontSize: 15,
    color: themeColors.diaryContentColor,
    padding: 0,
  },
});
