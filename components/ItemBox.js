import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, useWindowDimensions, View} from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import {themeColors} from '../assets/color/colors';
import {format, formatDistanceToNow} from 'date-fns';
import {ko} from 'date-fns/locale';

export default function ItemBox({id, title, content, date}) {
  const navigation = useNavigation();

  function formatDate(date_) {
    const d = new Date(date_);
    const now = Date.now();
    const diff = (now - d.getTime()) / 1000; // 현재 시간과의 차이(초)
    if (diff < 60 * 1) {
      // 1분 미만일땐 방금 전 표기
      return '방금 전';
    }
    if (diff < 60 * 60 * 24 * 3) {
      // 3일 미만일땐 시간차이 출력(몇시간 전, 몇일 전)
      return formatDistanceToNow(d, {addSuffix: true, locale: ko});
    }
    return format(d, 'P', {locale: ko}); // 날짜 포맷
  }

  const onPress = () => {
    navigation.navigate('DiaryScreen', {
      id: id,
      title: title,
      content: content,
      date: date,
    });
  };

  return (
    <Pressable
      style={styles.block}
      android_ripple={{color: themeColors.feedAndroidRippleColor}}
      onPress={onPress}>
      <View style={styles.textBox}>
        <Text numberOfLines={1} ellipsizeMode="tail" style={styles.title}>
          {title}
        </Text>
        <Text numberOfLines={1} style={styles.content}>
          {content}
        </Text>
      </View>
      <View style={styles.dateBox}>
        <Text style={styles.date}>{formatDate(date)}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
    height: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: themeColors.feedBackgroundColor,
    borderRadius: 6,
    margin: 3,
    borderColor: themeColors.feedBorderColor,
  },
  textBox: {flex: 7},
  title: {color: themeColors.feedTitleTextColor, fontSize: 16},
  content: {color: themeColors.feedContentTextColor, fontSize: 13},
  dateBox: {flex: 1.2, alignItems: 'flex-end'},
  date: {color: themeColors.feedDateTextColor, fontSize: 10},
});
