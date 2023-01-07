import React, {useEffect, useState} from 'react';
import {ActionSheetIOS, Keyboard, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import {themeColors} from '../assets/color/colors';
import DiaryBox from '../components/DiaryBox';
import {KeyboardAvoidingView} from 'react-native';
import HeaderRight from '../components/HeaderRight';
import {useDataActionsContext, useDataContext} from '../contexts/useContext';
import {useNavigation} from '@react-navigation/native';

export default function DiaryScreen({route, navigation}) {
  const data = useDataContext();
  const [isViewMode, setIsViewMode] = useState(
    data.map(item => item.id).includes(route.params.id) ? true : false,
  );
  const [content, setContent] = useState(route.params?.content ?? '');
  const [title, setTitle] = useState(route.params?.title ?? '');
  const actions = useDataActionsContext();

  const onSubmit = (id, title, content) => {
    if (data.length === 0) {
      actions.diaryCreateHandler(id, title, content);
      setIsViewMode(true);
      navigation.goBack();
      console.log(data, '1');
    } else if (!data.map(item => item.id).includes(id)) {
      actions.diaryCreateHandler(id, title, content);
      setIsViewMode(true);
      navigation.goBack();
      console.log(data, '2');
    } else {
      actions.diaryModifyHandler(id, title, content);
      setIsViewMode(true);
      navigation.goBack();
      Keyboard.dismiss();
      console.log(data, '3');
    }
  };

  const onchangeTitle = t => {
    setTitle(t);
  };

  const onChangeText = t => {
    setContent(t);
  };

  useEffect(() => {
    navigation.setOptions(
      {
        headerRight: () => (
          <HeaderRight
            mode={isViewMode}
            setIsViewMode={setIsViewMode}
            params={route.params}
          />
        ),
      },
      [navigation],
    );
  });

  return (
    <KeyboardAvoidingView style={styles.keyboardAvoiding}>
      <View style={styles.block}>
        <DiaryBox
          content={content}
          title={title}
          mode={isViewMode}
          onChangeText={onChangeText}
          onchangeTitle={onchangeTitle}
        />
      </View>
      {isViewMode !== true && (
        <View style={styles.wrapper}>
          <Pressable
            onPress={() => console.log(route.params)}
            android_ripple={{color: 'gray'}}>
            <Icon
              onPress={() => onSubmit(route.params.id, title, content)}
              name="enter-outline"
              size={40}
              color={themeColors.diaryButtonColor}
            />
          </Pressable>
        </View>
      )}
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  keyboardAvoiding: {
    flex: 1,
  },
  block: {flex: 1, backgroundColor: themeColors.diaryScreenBackgroundColor},
  wrapper: {
    width: 40,
    height: 40,
    overflow: 'hidden',
    position: 'absolute',
    right: 15,
    bottom: 15,
    borderRadius: 5,
  },
});
