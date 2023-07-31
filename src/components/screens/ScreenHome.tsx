import React, { useState } from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  ColorValue,
  Image,
  ImageSourcePropType,
  Dimensions,
  ViewStyle
} from 'react-native';
import type { PropsWithChildren } from 'react';
import { NavigationProp, ParamListBase } from '@react-navigation/native';
import { Routes } from '../Definitions/screens';
import { Colors } from '../../res';
import { GetString } from '../../services/localization/localizationProvider';
import { isLandscape } from '../../services/Orientation';
import { EnumStringKeys } from '../../services/localization/stringKeys';
import { HomeStyles } from '../../Styles/home.styles';

export interface ScreenHomeProps {
  navigation: NavigationProp<ParamListBase>;
}

const ScreenHome: React.FC<ScreenHomeProps> = ({ navigation }) => {
  const [landscape, setLandscape] = useState(isLandscape());
  Dimensions.addEventListener('change', () => {
    setLandscape(isLandscape());
  });
  return (
    <PreviewLayout
      _navigation={navigation}
      l_p_style={landscape ? HomeStyles.button_l : HomeStyles.button_p}
      label=""
      values={[
        [
          GetString(EnumStringKeys.Home_CV),
          Colors.cv_tint,
          Routes.CV,
          require('../../assets/images/CV/cv.jpg')
        ],
        [
          GetString(EnumStringKeys.Home_Contact),
          Colors.contact_tint,
          Routes.Contact,
          require('../../assets/images/Contact/contact.jpg')
        ],
        [
          GetString(EnumStringKeys.Home_Links),
          Colors.links_tint,
          Routes.Links,
          require('../../assets/images/Links/links.jpg')
        ],
        [
          GetString(EnumStringKeys.Home_Gallery),
          Colors.gallery_tint,
          Routes.Gallery,
          require('../../assets/images/Gallery/gallery.jpg')
        ]
      ]}
    />
  );
};

type PreviewLayoutProps = PropsWithChildren<{
  _navigation: NavigationProp<ParamListBase>;
  l_p_style: ViewStyle;
  label: string;
  values: [string, ColorValue, Routes, ImageSourcePropType][];
}>;

const PreviewLayout = ({ _navigation, l_p_style, label, children, values }: PreviewLayoutProps) => (
  <View style={HomeStyles.maincontainer}>
    <Text style={HomeStyles.label}>{label}</Text>
    <View style={HomeStyles.mainrow}>
      {values.map(value => (
        <TouchableOpacity
          key={value[0]}
          onPress={() => _navigation.navigate(value[2])}
          style={[l_p_style, { backgroundColor: value[1] }]}>
          <View style={HomeStyles.buttonImageViewStyle}>
            <Image source={value[3]} style={HomeStyles.buttonImageIconStyle} />
            <Text style={[HomeStyles.buttonLabel, { color: value[1] }]}>{value[0]}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
    <View style={[HomeStyles.childrencontainer]}>{children}</View>
  </View>
);

export default ScreenHome;
