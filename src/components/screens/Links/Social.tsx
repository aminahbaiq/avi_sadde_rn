import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { Text, View, Linking, Image } from 'react-native';
import { GetString } from '../../../services/localization/localizationProvider';
import { EnumStringKeys } from '../../../services/localization/stringKeys';
import { LinksStyles } from '../../../Styles/links.styles';
import { EnumURLs_Links_Phones } from '../../../services/URLs_Links_Phones';
import { Colors } from '../../../res';

export function fViewExpandedSocial() {
  return (
    <View style={LinksStyles.item}>
      <View>
        <Image
          source={require('../../../assets/images/Common/ic_expand_less_white_24dp.png')}
          style={[LinksStyles.buttonImageIconStyle, LinksStyles.row_end]}
        />
        <Text style={LinksStyles.title}>{GetString(EnumStringKeys.Links_Task_Social)}</Text>
      </View>

      <Text style={[LinksStyles.rowcaption, LinksStyles.rev]}>
        {GetString(EnumStringKeys.Links_Facebook)}
      </Text>
      <Text
        style={[LinksStyles.row, LinksStyles.link, LinksStyles.rev]}
        onPress={() => Linking.openURL(EnumURLs_Links_Phones.facebooklong)}>
        {EnumURLs_Links_Phones.facebookshort}
      </Text>

      <Text style={LinksStyles.rowcaption}>{GetString(EnumStringKeys.Links_Instagram)}</Text>
      <Text
        style={[LinksStyles.row, LinksStyles.link, LinksStyles.rev]}
        onPress={() => Linking.openURL(EnumURLs_Links_Phones.instagramlong)}>
        {EnumURLs_Links_Phones.instagramshort}
      </Text>

      <Text style={LinksStyles.rowcaption}>{GetString(EnumStringKeys.Links_Tripadvisor)}</Text>
      <Text
        style={[LinksStyles.row, LinksStyles.link, LinksStyles.rev]}
        onPress={() => Linking.openURL(EnumURLs_Links_Phones.tripadvisorlong)}>
        {EnumURLs_Links_Phones.tripadvisorshort}
      </Text>
    </View>
  );
}

export function fViewCollapsedSocial() {
  return (
    <View style={LinksStyles.item}>
      <View>
        <Image
          source={require('../../../assets/images/Common/ic_expand_more_white_24dp.png')}
          style={[LinksStyles.buttonImageIconStyle, LinksStyles.row_end]}
        />
        <Text style={LinksStyles.title}>{GetString(EnumStringKeys.Links_Task_Social)}</Text>
      </View>

      <View>
        <Text style={[LinksStyles.rowcaption, LinksStyles.rev]}>
          {GetString(EnumStringKeys.Links_Facebook)}
        </Text>
        <Text
          style={[LinksStyles.row, LinksStyles.link, LinksStyles.rev]}
          onPress={() => Linking.openURL(EnumURLs_Links_Phones.facebooklong)}>
          {EnumURLs_Links_Phones.facebookshort}
        </Text>
        <LinearGradient
          colors={[Colors.avi_almost_black_11, Colors.avi_almost_black_80]}
          style={LinksStyles.linearGradient}
        />
      </View>
    </View>
  );
}
