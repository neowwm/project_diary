import {parseISO} from 'date-fns';
import React, {useEffect, useRef, useState} from 'react';
import {
  Animated,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import {themeColors} from '../assets/color/colors';
import CalendarBottomSubmitButton from '../components/CalendarBottomSubmitButton';
import ItemsList from '../components/ItemsList';
import {useDataContext} from '../contexts/useContext';

export default function FeedsScreen({navigation}) {
  const data = useDataContext();
  const [hidden, setHidden] = useState(false);

  const animation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.spring(animation, {
      toValue: hidden ? 1 : 0,
      useNativeDriver: true,
      tension: 45,
      friction: 5,
    }).start();
  }, [animation, hidden]);

  const onScrolledToBottom = isBottom => {
    if (isBottom !== hidden) {
      setHidden(isBottom);
      console.log(hidden);
    }
  };

  return (
    <View style={styles.block}>
      <ItemsList data={data} onScrolledToBottom={onScrolledToBottom} />
      <Animated.View
        style={[
          styles.submit,
          {
            transform: [
              {
                translateY: animation.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 88],
                }),
              },
            ],
            opacity: animation.interpolate({
              inputRange: [0, 1],
              outputRange: [1, 0],
            }),
          },
        ]}>
        {!hidden && <CalendarBottomSubmitButton hidden={hidden} />}
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: themeColors.feedsScreenBackgroundColor,
  },
  submit: {position: 'absolute', right: 10, bottom: 30},
});
