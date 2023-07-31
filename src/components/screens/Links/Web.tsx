import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { Text, View, Linking, Image } from 'react-native';
import { GetString } from '../../../services/localization/localizationProvider';
import { EnumStringKeys } from '../../../services/localization/stringKeys';
import { LinksStyles } from '../../../Styles/links.styles';
import { EnumURLs_Links_Phones } from '../../../services/URLs_Links_Phones';
import { Colors } from '../../../res';

export function fViewExpandedWeb() {
  return (
    <View style={LinksStyles.item}>
      <View>
        <Image
          source={require('../../../assets/images/Common/ic_expand_less_white_24dp.png')}
          style={[LinksStyles.buttonImageIconStyle, LinksStyles.row_end]}
        />
        <Text style={LinksStyles.title}>{GetString(EnumStringKeys.Links_Task_Web)}</Text>
      </View>

      <Text style={LinksStyles.rowcaption}>{GetString(EnumStringKeys.Links_Github)}</Text>
      <Text
        style={[LinksStyles.row, LinksStyles.link, LinksStyles.rev]}
        onPress={() => Linking.openURL(EnumURLs_Links_Phones.githublong)}>
        {EnumURLs_Links_Phones.githubshort}
      </Text>

      <Text style={LinksStyles.rowcaption}>{GetString(EnumStringKeys.Links_Linkedin)}</Text>
      <Text
        style={[LinksStyles.row, LinksStyles.link, LinksStyles.rev]}
        onPress={() => Linking.openURL(EnumURLs_Links_Phones.linkedinlong)}>
        {EnumURLs_Links_Phones.linkedinshort}
      </Text>

      <Text style={LinksStyles.rowcaption}>{GetString(EnumStringKeys.Links_WEB)}</Text>
      <Text
        style={[LinksStyles.row, LinksStyles.link, LinksStyles.rev]}
        onPress={() => Linking.openURL(EnumURLs_Links_Phones.weburllong)}>
        {EnumURLs_Links_Phones.weburlshort}
      </Text>
    </View>
  );
}

export function fViewCollapsedWeb() {
  return (
    <View style={LinksStyles.item}>
      <View>
        <Image
          source={require('../../../assets/images/Common/ic_expand_more_white_24dp.png')}
          style={[LinksStyles.buttonImageIconStyle, LinksStyles.row_end]}
        />
        <Text style={LinksStyles.title}>{GetString(EnumStringKeys.Links_Task_Web)}</Text>
      </View>

      <View>
        <Text style={LinksStyles.rowcaption}>{GetString(EnumStringKeys.Links_Github)}</Text>
        <Text
          style={[LinksStyles.row, LinksStyles.link, LinksStyles.rev]}
          onPress={() => Linking.openURL(EnumURLs_Links_Phones.githublong)}>
          {EnumURLs_Links_Phones.githubshort}
        </Text>
        <LinearGradient
          colors={[Colors.avi_almost_black_11, Colors.avi_almost_black_80]}
          style={LinksStyles.linearGradient}
        />
      </View>
    </View>
  );
}
