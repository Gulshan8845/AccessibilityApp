import React, { useEffect } from 'react';
import { View, Text, Button, AppState } from 'react-native';

function PopupScreen({ navigation }) {
  const handleAppStateChange = (nextAppState) => {
    if (nextAppState === 'active') {
      navigation.navigate('Home');
    }
  };

  useEffect(() => {
    AppState.addEventListener('change', handleAppStateChange);

    return () => {
      AppState.removeEventListener('change', handleAppStateChange);
    };
  }, []);

  return (
    <View>
      <Text>Accessibility Popup</Text>
      <Text>Click here to do something</Text>
    </View>
  );
}

export default PopupScreen;
