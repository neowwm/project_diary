import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {themeColors} from '../assets/color/colors';
import ItemsList from '../components/ItemsList';
import {useDataContext} from '../contexts/useContext';

export default function SearchScreen() {
  const [text, setText] = useState('');
  const data = useDataContext();

  const re = /\s+/;
  const text_Search = text.replace(re, '');

  const filteredData = data.filter(
    item =>
      item.title.includes(text_Search) || item.content.includes(text_Search),
  );

  const onChangeText = t => {
    setText(t);
    console.log(text);
  };

  return (
    <View style={styles.block}>
      <TextInput
        placeholder="검색을 해보세요."
        onChangeText={onChangeText}
        value={text}
      />
      <ItemsList data={filteredData} />
    </View>
  );
}

const styles = StyleSheet.create({
  block: {flex: 1, backgroundColor: themeColors.searchScreenBackgroundColor},
});
