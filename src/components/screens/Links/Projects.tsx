import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { Text, View, Linking, Image } from 'react-native';
import { GetString } from '../../../services/localization/localizationProvider';
import { EnumStringKeys } from '../../../services/localization/stringKeys';
import { LinksStyles } from '../../../Styles/links.styles';
import { EnumURLs_Links_Phones } from '../../../services/URLs_Links_Phones';
import { Colors } from '../../../res';

export function fViewExpandedProjects() {
  return (
    <View style={LinksStyles.item}>
      <View>
        <Image
          source={require('../../../assets/images/Common/ic_expand_less_white_24dp.png')}
          style={[LinksStyles.buttonImageIconStyle, LinksStyles.row_end]}
        />
        <Text style={LinksStyles.title}>{GetString(EnumStringKeys.Links_Task_Projects)}</Text>
      </View>

      <Text style={[LinksStyles.rowcaption, LinksStyles.rev]}>
        {GetString(EnumStringKeys.Links_Vanaga)}
      </Text>
      <Text
        style={[LinksStyles.row, LinksStyles.link, LinksStyles.rev]}
        onPress={() => Linking.openURL(EnumURLs_Links_Phones.vanagalong)}>
        {EnumURLs_Links_Phones.vanagashort}
      </Text>

      <Text style={LinksStyles.rowcaption}>{GetString(EnumStringKeys.Links_MyRecord_0x)}</Text>
      <Text
        style={[LinksStyles.row, LinksStyles.link, LinksStyles.rev]}
        onPress={() => Linking.openURL(EnumURLs_Links_Phones.mr0xlong)}>
        {EnumURLs_Links_Phones.mr0xshort}
      </Text>

      <Text style={LinksStyles.rowcaption}>{GetString(EnumStringKeys.Links_MyRecord_1x)}</Text>
      <Text
        style={[LinksStyles.row, LinksStyles.link, LinksStyles.rev]}
        onPress={() => Linking.openURL(EnumURLs_Links_Phones.mr1xAndroid)}>
        {GetString(EnumStringKeys.Links_MyRecord_1x_Android_Link)}
      </Text>

      <Text style={[LinksStyles.rowcaption, LinksStyles.rev]}>
        {GetString(EnumStringKeys.Links_Hive)}
      </Text>
      <Text
        style={[LinksStyles.row, LinksStyles.link, LinksStyles.rev]}
        onPress={() => Linking.openURL(EnumURLs_Links_Phones.hivelong)}>
        {EnumURLs_Links_Phones.hiveshort}
      </Text>
    </View>
  );
}

export function fViewCollapsedProjects() {
  return (
    <View style={LinksStyles.item}>
      <View>
        <Image
          source={require('../../../assets/images/Common/ic_expand_more_white_24dp.png')}
          style={[LinksStyles.buttonImageIconStyle, LinksStyles.row_end]}
        />
        <Text style={LinksStyles.title}>{GetString(EnumStringKeys.Links_Task_Projects)}</Text>
      </View>

      <View>
        <Text style={[LinksStyles.rowcaption, LinksStyles.rev]}>
          {GetString(EnumStringKeys.Links_Vanaga)}
        </Text>
        <Text
          style={[LinksStyles.row, LinksStyles.link, LinksStyles.rev]}
          onPress={() => Linking.openURL(EnumURLs_Links_Phones.vanagalong)}>
          {EnumURLs_Links_Phones.vanagashort}
        </Text>
        <LinearGradient
          colors={[Colors.avi_almost_black_11, Colors.avi_almost_black_80]}
          style={LinksStyles.linearGradient}
        />
      </View>
    </View>
  );
}
