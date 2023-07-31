import React from 'react';
import { View, Button } from 'react-native';
import { NavigationProp, ParamListBase } from '@react-navigation/native';
import { Routes } from '../Definitions/screens';

export interface ScreenLinksProps {
  navigation: NavigationProp<ParamListBase>;
}

const ScreenLinks: React.FC<ScreenLinksProps> = ({ navigation }) => {
  return (
    <View>
      <Button
        title={'To111 ' + Routes.Settings1}
        onPress={() => navigation.navigate(Routes.Settings1)}
      />
    </View>
  );
};

export default ScreenLinks;
