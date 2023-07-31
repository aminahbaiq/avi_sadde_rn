import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  FlatList,
  TouchableOpacity,
  ImageURISource,
  I18nManager
} from 'react-native';
import { NavigationProp, ParamListBase } from '@react-navigation/native';
import Carousel from 'react-native-snap-carousel';
import { GetString } from '../../../services/localization/localizationProvider';
import { EnumStringKeys } from '../../../services/localization/stringKeys';
import { THUMB_SIZE, GalleryStyles } from '../../../Styles/gallery.styles';
import { HeaderStyles } from '../../../Styles/header.styles';
import { Routes } from '../../Definitions/screens';

interface ImageProps {
  id: number;
  image: ImageURISource;
  desc: string;
}
const theimages: Array<ImageProps> = [
  {
    id: 0,
    image: require('../../../assets/images/Gallery/tongariki.jpg'),
    desc: GetString(EnumStringKeys.Gallery_AhuTongariki)
  },
  {
    id: 1,
    image: require('../../../assets/images/Gallery/londontunnel.jpg'),
    desc: GetString(EnumStringKeys.Gallery_LondonLightTunnel)
  },
  {
    id: 2,
    image: require('../../../assets/images/Gallery/vienna.jpg'),
    desc: GetString(EnumStringKeys.Gallery_ViennaChristmasMarket)
  },
  {
    id: 3,
    image: require('../../../assets/images/Gallery/londontube.jpg'),
    desc: GetString(EnumStringKeys.Gallery_LondonTubeTunnel)
  },
  {
    id: 4,
    image: require('../../../assets/images/Gallery/meteora.jpg'),
    desc: GetString(EnumStringKeys.Gallery_MeteoraLightning)
  },
  {
    id: 5,
    image: require('../../../assets/images/Gallery/lighthouse.jpg'),
    desc: GetString(EnumStringKeys.Gallery_TrwynDuLighthouse)
  },
  {
    id: 6,
    image: require('../../../assets/images/Gallery/bigben.jpg'),
    desc: GetString(EnumStringKeys.Gallery_BigBen)
  },
  {
    id: 7,
    image: require('../../../assets/images/Gallery/jump.jpg'),
    desc: GetString(EnumStringKeys.Gallery_Jump)
  },
  {
    id: 8,
    image: require('../../../assets/images/Gallery/bachbach.jpg'),
    desc: GetString(EnumStringKeys.Gallery_BachBach)
  },
  {
    id: 9,
    image: require('../../../assets/images/Gallery/train.jpg'),
    desc: GetString(EnumStringKeys.Gallery_Train)
  },
  {
    id: 10,
    image: require('../../../assets/images/Gallery/haifalightning.jpg'),
    desc: GetString(EnumStringKeys.Gallery_HaifaLightning)
  },
  {
    id: 11,
    image: require('../../../assets/images/Gallery/laplagne.jpg'),
    desc: GetString(EnumStringKeys.Gallery_LaPlagne)
  },
  {
    id: 12,
    image: require('../../../assets/images/Gallery/anemones.jpg'),
    desc: GetString(EnumStringKeys.Gallery_Anemones)
  }
];

const deviceWidth = Dimensions.get('window').width;

export interface ScreenGallerySnapCarouselProps {
  navigation: NavigationProp<ParamListBase>;
}
const ScreenGallerySnapCarousel: React.FC<ScreenGallerySnapCarouselProps> = ({ navigation }) => {
  const [indexSelected, setIndexSelected] = useState(0);
  console.log('@@@' + deviceWidth);

  const len = theimages.length - 1;

  const onSelect = (index: number) => {
    setIndexSelected(index);

    flatListRef?.current?.scrollToOffset({
      offset: (I18nManager.isRTL ? len - index : index) * THUMB_SIZE,
      animated: true
    });
  };

  const carouselRef = useRef<Carousel<ImageProps>>(null);
  const flatListRef = useRef<FlatList>(null);

  const onTouchThumbnail = (touched: number) => {
    if (touched === indexSelected) return;

    carouselRef?.current?.snapToItem(touched);
  };
  return (
    <View style={GalleryStyles.carouselView}>
      <Text style={[HeaderStyles.text, HeaderStyles.textsizesmaller]}>
        {GetString(EnumStringKeys.Gallery_SubTitle)}
      </Text>
      <View style={GalleryStyles.carouselView}>
        <View>
          <Carousel<ImageProps>
            layout="default"
            ref={carouselRef}
            data={theimages}
            sliderWidth={deviceWidth}
            itemWidth={deviceWidth}
            onSnapToItem={(index: number) => onSelect(index)}
            renderItem={({ item, index }) => (
              <Image
                key={index}
                style={GalleryStyles.carouselImage}
                resizeMode="contain"
                source={item.image}
              />
            )}
          />
        </View>
      </View>
      <View style={GalleryStyles.carouselThumbsView}>
        <View style={GalleryStyles.carouselFooterView}>
          <Text style={GalleryStyles.carouselFooterText}>
            {theimages[I18nManager.isRTL ? len - indexSelected : indexSelected].desc}
          </Text>
        </View>
        <FlatList
          ref={flatListRef}
          horizontal={true}
          data={theimages}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={GalleryStyles.carouselThumbsStyle}
          keyExtractor={item => item.id}
          renderItem={({ item, index }) => (
            <TouchableOpacity activeOpacity={0.9} onPress={() => onTouchThumbnail(index)}>
              <Image
                style={[
                  GalleryStyles.carouselThumbImage,
                  index !== indexSelected && GalleryStyles.carouselThumbNotSelected,
                  index === indexSelected && GalleryStyles.carouselThumbSelected
                ]}
                source={theimages[I18nManager.isRTL ? len - item.id : item.id].image}
              />
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};

export default ScreenGallerySnapCarousel;
