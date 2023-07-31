import { Dimensions } from 'react-native';

export const isLandscape = () => {
  const dim = Dimensions.get('screen');
  return dim.height <= dim.width;
};
