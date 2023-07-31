import { I18nManager, StyleSheet } from 'react-native';
import { Colors, Fonts } from '../res';

export const LinksStyles = StyleSheet.create({
  linksContainer: {
    flex: 1,
    backgroundColor: Colors.avi_almost_black
  },
  container1: {
    paddingHorizontal: 12,
    paddingBottom: 4,
    height: '100%'
  },
  item: {
    padding: 15,
    marginVertical: 2
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.avi_almost_white,
    marginTop: 8,
    marginLeft: 1,
    marginRight: 1,
    marginBottom: 1
  },
  rev: { textAlign: 'left' },
  rtl: { flexDirection: 'row' },
  header: {
    marginTop: 10,
    fontSize: 32,
    color: Colors.links_tint
  },
  row: {
    marginTop: 6,
    marginLeft: 7,
    fontSize: 22,
    color: Colors.avi_almost_white_darker,
    flex: 1
  },
  rowrtl: {
    marginTop: 6,
    marginLeft: 7,
    fontSize: 22,
    color: Colors.avi_almost_white_darker
  },
  mainrow: {
    marginTop: 7,
    marginLeft: 7,
    fontSize: 23,
    color: Colors.avi_almost_white_darker,
    fontWeight: 'bold',
    flex: 1
  },
  rowunder: {
    marginTop: 10,
    marginLeft: 7,
    fontSize: 22,
    color: Colors.avi_almost_white_darker,
    flex: 1
  },
  rowcaption: {
    marginTop: 20,
    marginLeft: 7,
    fontSize: 22,
    fontWeight: '700',
    color: Colors.avi_almost_white_darker,
    flex: 1
  },
  myrecord: {
    color: Colors.caribbeanGreen
  },
  bold: {
    fontWeight: 'bold'
  },
  buttonImageIconStyle: {
    height: '100%'
  },
  row_end: {
    position: 'absolute',
    end: 0
  },
  link: {
    color: Colors.link_text,
    textDecorationLine: 'underline'
  },
  underline: {
    textDecorationLine: 'underline'
  },
  italic: {
    fontStyle: 'italic'
  },
  ifax: {
    color: Colors.avi_red,
    fontFamily: Fonts.TimesNewRomanBoldItalic
  },
  imgBGR: {
    opacity: 0.06
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: '#F194FF'
  },
  buttonClose: {
    backgroundColor: '#2196F3'
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center'
  },
  linearGradient: {
    position: 'absolute',
    top: '25%',
    height: '75%',
    width: '100%'
  }
});
