import React from 'react';
import { View, Image } from 'react-native';
import { NavigationProp, ParamListBase } from '@react-navigation/native';
import { Animations } from '../../res';
import { SplashStyles } from '../../Styles/splash.styles';
import { Routes } from '../Definitions/screens';
import { isLandscape } from '../../services/Orientation';

export interface ScreenSplashProps {
  navigation: NavigationProp<ParamListBase>;
}

const ScreenSplash: React.FC<ScreenSplashProps> = ({ navigation }) => {
  setTimeout(() => {
    navigation.navigate(Routes.Home);
    navigation.reset({
      index: 0,
      routes: [{ name: Routes.Home }]
    });
  }, 3000);

  return (
    <View style={SplashStyles.splashView}>
      <Image
        style={SplashStyles.splashAnimationGif}
        source={isLandscape() ? Animations.splashgif_l : Animations.splashgif_p}
      />
    </View>
  );
};

export default ScreenSplash;
