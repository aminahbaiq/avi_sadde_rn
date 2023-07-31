import { Dimensions, StyleSheet } from 'react-native';
import { Colors } from '../res/colors';

const { height: deviceHeight, width: deviceWidth } = Dimensions.get('window');
const SPACING = 10;

export const THUMB_SIZE = 80;

export const GalleryStyles = StyleSheet.create({
  galleryContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
  },
  customImageContainer: {
    alignItems: 'center',
    borderRadius: 12,
    height: '100%',
    justifyContent: 'center',
    paddingHorizontal: 10,
    width: '100%'
  },
  activeThumb: {
    borderWidth: 3
  },
  thumb: {
    borderRadius: 12,
    marginRight: 10
  },
  container: {
    alignItems: 'center',
    backgroundColor: 'black',
    flex: 1,
    height: deviceHeight,
    justifyContent: 'center',
    width: deviceWidth
  },

  header: {
    position: 'absolute',
    top: 0,
    width: '100%'
  },
  footer: {
    bottom: 0,
    position: 'absolute',
    width: '100%'
  },
  thumbnailListContainer: {
    paddingHorizontal: 10
  },
  bottomFlatlist: {
    position: 'absolute'
  },
  containerStyle: {
    height: deviceHeight,
    width: deviceWidth
  },
  image: {
    height: '100%',
    width: '100%'
  },
  carouselView: {
    flex: 1,
    backgroundColor: Colors.avi_almost_black,
    alignItems: 'center'
  },
  carouselImage: {
    width: '100%',
    height: '100%'
  },
  carouselThumbsView: {
    position: 'absolute',
    bottom: SPACING
  },
  carouselThumbImage: {
    width: THUMB_SIZE,
    height: THUMB_SIZE,
    marginRight: SPACING,
    borderRadius: 16
  },
  carouselThumbsStyle: {
    paddingHorizontal: SPACING
  },
  carouselThumbNotSelected: {
    borderWidth: 0.75,
    borderColor: Colors.gallery_selected
  },
  carouselThumbSelected: {
    borderWidth: 4,
    borderColor: Colors.gallery_tint
  },
  carouselFooterView: {
    marginBottom: SPACING,
    marginHorizontal: SPACING
  },
  carouselFooterText: {
    color: Colors.gallery_tint,
    fontSize: 22,
    textShadowColor: 'rgba(20, 10, 40, 0.98)',
    textShadowOffset: { width: -2, height: 2 },
    textShadowRadius: 4
  }
});
