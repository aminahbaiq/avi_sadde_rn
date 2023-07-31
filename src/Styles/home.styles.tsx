import { StyleSheet } from 'react-native';
import { Colors } from '../res';

export const HomeStyles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    backgroundColor: Colors.avi_almost_black,
    alignContent: 'center'
  },
  mainrow: {
    flexDirection: 'row',
    alignContent: 'center',
    margin: 8,
    backgroundColor: Colors.avi_almost_black,
    justifyContent: 'center',
    flex: 1,
    flexWrap: 'wrap'
  },
  childrencontainer: {
    flex: 1,
    marginTop: 8,
    backgroundColor: Colors.avi_almost_black,
    alignContent: 'center'
  },
  box: {
    width: 50,
    height: 50
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  button_p: {
    paddingHorizontal: 5,
    paddingVertical: 5,
    borderRadius: 3,
    alignSelf: 'center',
    margin: '3%',
    maxWidth: '50%',
    minWidth: '34%',
    maxHeight: '50%',
    aspectRatio: 1,
    flex: 1
  },
  button_l: {
    paddingHorizontal: 5,
    paddingVertical: 5,
    borderRadius: 3,
    alignSelf: 'center',
    margin: '3%',
    aspectRatio: 1,
    flex: 1
  },
  buttonImageViewStyle: {
    height: '100%',
    width: '100%'
  },
  buttonImageIconStyle: {
    height: '100%',
    width: '100%'
  },
  selected: {
    borderColor: 'white',
    borderWidth: 8
  },
  buttonLabel: {
    fontSize: 30,
    margin: 3,
    padding: 3,
    fontWeight: 'bold',
    alignSelf: 'center',
    position: 'absolute',
    textShadowColor: Colors.text_shadow,
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 3
  },
  selectedLabel: {
    borderColor: 'white',
    color: 'white'
  },
  label: {
    textAlign: 'center',
    marginBottom: 10,
    fontSize: 26,
    color: 'white'
  },
  backBtn: {
    resizeMode: 'cover'
  }
});
