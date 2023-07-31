import { StyleSheet } from 'react-native';
import { Colors } from '../res';

export const SplashStyles = StyleSheet.create({
  splashView: {
    position: 'absolute',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: Colors.black
  },
  splashAnimationGif: {
    resizeMode: 'cover',
    height: '100%',
    width: '100%'
  }
});
