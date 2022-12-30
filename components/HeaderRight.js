import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Alert, Keyboard, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import {themeColors} from '../assets/color/colors';
import {useDataActionsContext} from '../contexts/useContext';

export default function HeaderRight({params, mode, setIsViewMode}) {
  const navigation = useNavigation();
  const actions = useDataActionsContext();

  const diaryRemoveHandler = id => {
    Alert.alert('정말 삭제하시겠습니까?', '', [
      {text: '취소', onPress: () => {}, style: 'cancel'},
      {
        text: 'ok',
        onPress: () => {
          actions.diaryRemoveHandler(id);
          navigation.goBack();
          Keyboard.dismiss();
        },
      },
    ]);
  };

  return (
    <View style={styles.block}>
      {mode === true && (
        <View style={styles.modifyBlock}>
          <Pressable
            onPress={() => setIsViewMode(false)}
            android_ripple={{color: 'gray'}}>
            <FontAwesomeIcon
              name="pencil-square-o"
              size={26}
              color={themeColors.diaryScreenModifyButtonColor}
            />
          </Pressable>
        </View>
      )}
      <View style={styles.removeBlock}>
        <Pressable
          onPress={() => diaryRemoveHandler(params.id)}
          android_ripple={{color: 'gray'}}>
          <Icon
            name="md-trash-bin-sharp"
            size={24}
            color={themeColors.diaryScreenRemoveButtonColor}
          />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  block: {flexDirection: 'row'},
  modifyBlock: {
    marginTop: 10,
    overflow: 'hidden',
    borderRadius: 5,
    padding: -5,
  },
  removeBlock: {
    marginTop: 10,
    overflow: 'hidden',
    borderRadius: 30,
    marginLeft: 10,
    padding: -5,
  },
});
