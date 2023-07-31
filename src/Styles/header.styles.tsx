import { StyleSheet, StatusBar } from 'react-native';
import { Colors, Fonts } from '../res';

export const HeaderStyles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1
  },
  backBtn: {
    resizeMode: 'contain',
    tintColor: Colors.gallery_tint,
    marginHorizontal: 12
  },
  headerStyle: {
    backgroundColor: 'black'
  },
  headerFontStyle: {
    fontSize: 24,
    fontFamily: Fonts.simplerBold
  },
  textsize: {
    fontSize: 24
  },
  textsizesmaller: {
    fontSize: 14,
    margin: 0,
    justifyContent: 'center',
    alignContent: 'center',
    alignSelf: 'center'
  },
  text: {
    color: Colors.gallery_tint,
    marginHorizontal: 0,
    fontFamily: Fonts.simplerBold
  },
  safeAreaContainerY: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: StatusBar.currentHeight
  },
  footercontainer: {
    alignItems: 'center',
    flexDirection: 'row',
    height: 52,
    justifyContent: 'flex-start',
    paddingHorizontal: 24
  },
  footertext: {
    color: Colors.gallery_tint
  }
});
