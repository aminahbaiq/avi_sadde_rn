import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { Text, View, Linking, Image } from 'react-native';
import { GetString } from '../../../services/localization/localizationProvider';
import { EnumStringKeys } from '../../../services/localization/stringKeys';
import { LinksStyles } from '../../../Styles/links.styles';
import { EnumURLs_Links_Phones } from '../../../services/URLs_Links_Phones';
import { Colors } from '../../../res';

export function fViewExpandedDownloads() {
  return (
    <View style={LinksStyles.item}>
      <View>
        <Image
          source={require('../../../assets/images/Common/ic_expand_less_white_24dp.png')}
          style={[LinksStyles.buttonImageIconStyle, LinksStyles.row_end]}
        />
        <Text style={LinksStyles.title}>{GetString(EnumStringKeys.Links_Task_Downloads)}</Text>
      </View>

      <Text style={LinksStyles.rowcaption}>{GetString(EnumStringKeys.Links_CV_Hebrew)}</Text>
      <Text style={[LinksStyles.row, LinksStyles.rev]}>
        <Text
          style={LinksStyles.link}
          onPress={() => Linking.openURL(EnumURLs_Links_Phones.hebdoc)}>
          {GetString(EnumStringKeys.Links_CV_Doc)}
        </Text>
        {'  '}
        <Text
          style={LinksStyles.link}
          onPress={() => Linking.openURL(EnumURLs_Links_Phones.hebpdf)}>
          {GetString(EnumStringKeys.Links_CV_Pdf)}
        </Text>
      </Text>

      <Text style={LinksStyles.rowcaption}>{GetString(EnumStringKeys.Links_CV_English)}</Text>
      <Text style={[LinksStyles.row, LinksStyles.rev]}>
        <Text
          style={LinksStyles.link}
          onPress={() => Linking.openURL(EnumURLs_Links_Phones.engdoc)}>
          {GetString(EnumStringKeys.Links_CV_Doc)}
        </Text>
        {'  '}
        <Text
          style={LinksStyles.link}
          onPress={() => Linking.openURL(EnumURLs_Links_Phones.engpdf)}>
          {GetString(EnumStringKeys.Links_CV_Pdf)}
        </Text>
      </Text>

      <Text style={LinksStyles.rowcaption}>{GetString(EnumStringKeys.Links_Andorid_App)}</Text>
      <Text
        style={[LinksStyles.row, LinksStyles.link, LinksStyles.rev]}
        onPress={() => Linking.openURL(EnumURLs_Links_Phones.avisaddernandoridlong)}>
        {EnumURLs_Links_Phones.avisaddernandoridshort}
      </Text>
    </View>
  );
}

export function fViewCollapsedDownloads() {
  return (
    <View style={LinksStyles.item}>
      <View>
        <Image
          source={require('../../../assets/images/Common/ic_expand_more_white_24dp.png')}
          style={[LinksStyles.buttonImageIconStyle, LinksStyles.row_end]}
        />
        <Text style={LinksStyles.title}>{GetString(EnumStringKeys.Links_Task_Downloads)}</Text>
      </View>

      <View>
        <Text style={LinksStyles.rowcaption}>{GetString(EnumStringKeys.Links_CV_Hebrew)}</Text>
        <Text style={[LinksStyles.row, LinksStyles.rev]}>
          <Text
            style={LinksStyles.link}
            onPress={() => Linking.openURL(EnumURLs_Links_Phones.hebdoc)}>
            {GetString(EnumStringKeys.Links_CV_Doc)}
          </Text>
          {'  '}
          <Text
            style={LinksStyles.link}
            onPress={() => Linking.openURL(EnumURLs_Links_Phones.hebpdf)}>
            {GetString(EnumStringKeys.Links_CV_Pdf)}
          </Text>
        </Text>
        <LinearGradient
          colors={[Colors.avi_almost_black_11, Colors.avi_almost_black_80]}
          style={LinksStyles.linearGradient}
        />
      </View>
    </View>
  );
}
