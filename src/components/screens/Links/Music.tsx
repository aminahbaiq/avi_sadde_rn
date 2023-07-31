import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { Text, View, Linking, Image } from 'react-native';
import { GetString } from '../../../services/localization/localizationProvider';
import { EnumStringKeys } from '../../../services/localization/stringKeys';
import { LinksStyles } from '../../../Styles/links.styles';
import { EnumURLs_Links_Phones } from '../../../services/URLs_Links_Phones';
import { Colors } from '../../../res';

export function fViewExpandedMusic() {
  return (
    <View style={LinksStyles.item}>
      <View>
        <Image
          source={require('../../../assets/images/Common/ic_expand_less_white_24dp.png')}
          style={[LinksStyles.buttonImageIconStyle, LinksStyles.row_end]}
        />
        <Text style={LinksStyles.title}>{GetString(EnumStringKeys.Links_Task_Music)}</Text>
      </View>

      <Text style={[LinksStyles.rowcaption, LinksStyles.rev]}>
        {GetString(EnumStringKeys.Links_Youtube_Eng)}
      </Text>
      <Text
        style={[LinksStyles.row, LinksStyles.link, LinksStyles.rev]}
        onPress={() => Linking.openURL(EnumURLs_Links_Phones.yt_eng)}>
        {GetString(EnumStringKeys.Links_Youtube_Eng_Link)}
      </Text>

      <Text style={LinksStyles.rowcaption}>{GetString(EnumStringKeys.Links_Youtube_Heb)}</Text>
      <Text
        style={[LinksStyles.row, LinksStyles.link, LinksStyles.rev]}
        onPress={() => Linking.openURL(EnumURLs_Links_Phones.yt_heb)}>
        {GetString(EnumStringKeys.Links_Youtube_Heb_Link)}
      </Text>
    </View>
  );
}

export function fViewCollapsedMusic() {
  return (
    <View style={LinksStyles.item}>
      <View>
        <Image
          source={require('../../../assets/images/Common/ic_expand_more_white_24dp.png')}
          style={[LinksStyles.buttonImageIconStyle, LinksStyles.row_end]}
        />
        <Text style={LinksStyles.title}>{GetString(EnumStringKeys.Links_Task_Music)}</Text>
      </View>

      <View>
        <Text style={[LinksStyles.rowcaption, LinksStyles.rev]}>
          {GetString(EnumStringKeys.Links_Youtube_Eng)}
        </Text>
        <Text
          style={[LinksStyles.row, LinksStyles.link, LinksStyles.rev]}
          onPress={() => Linking.openURL(EnumURLs_Links_Phones.yt_eng)}>
          {GetString(EnumStringKeys.Links_Youtube_Eng_Link)}
        </Text>
        <LinearGradient
          colors={[Colors.avi_almost_black_11, Colors.avi_almost_black_80]}
          style={LinksStyles.linearGradient}
        />
      </View>
    </View>
  );
}
