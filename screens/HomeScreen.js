import React from 'react';
import { View, Text, Button } from 'react-native';

function HomeScreen({ navigation }) {
  return (
    <View>
      <Text>Home Screen</Text>
      <Button
        title="Open Popup"
        onPress={() => navigation.navigate('Popup')}
      />
    </View>
  );
}

export default HomeScreen;
