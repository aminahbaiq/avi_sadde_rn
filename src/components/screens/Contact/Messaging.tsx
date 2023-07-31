import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { Text, View, Linking, Image } from 'react-native';
import { GetString } from '../../../services/localization/localizationProvider';
import { EnumStringKeys } from '../../../services/localization/stringKeys';
import { ContactStyles } from '../../../Styles/contact.styles';
import { EnumURLs_Links_Phones } from '../../../services/URLs_Links_Phones';
import { Colors } from '../../../res';

export function fViewExpandedMessaging() {
  return (
    <View style={ContactStyles.item}>
      <View>
        <Image
          source={require('../../../assets/images/Common/ic_expand_less_white_24dp.png')}
          style={[ContactStyles.buttonImageIconStyle, ContactStyles.row_end]}
        />
        <Text style={ContactStyles.title}>{GetString(EnumStringKeys.Contact_Task_Messaging)}</Text>
      </View>

      <Text style={ContactStyles.rowcaption}>{GetString(EnumStringKeys.Contact_Email)}</Text>
      <Text
        style={[ContactStyles.row, ContactStyles.link, ContactStyles.rev]}
        onPress={() => Linking.openURL(EnumURLs_Links_Phones.emailurllong)}>
        {EnumURLs_Links_Phones.emailurlshort}
      </Text>

      <Text style={ContactStyles.rowcaption}>{GetString(EnumStringKeys.Contact_Whatsapp)}</Text>
      <Text
        style={[ContactStyles.row, ContactStyles.link, ContactStyles.rev]}
        onPress={() => Linking.openURL(EnumURLs_Links_Phones.whatsapplong)}>
        {GetString(EnumStringKeys.Contact_Cellular_Phone_Number)}
      </Text>
    </View>
  );
}

export function fViewCollapsedMessaging() {
  return (
    <View style={ContactStyles.item}>
      <View>
        <Image
          source={require('../../../assets/images/Common/ic_expand_more_white_24dp.png')}
          style={[ContactStyles.buttonImageIconStyle, ContactStyles.row_end]}
        />
        <Text style={ContactStyles.title}>{GetString(EnumStringKeys.Contact_Task_Messaging)}</Text>
      </View>

      <View>
        <Text style={ContactStyles.rowcaption}>{GetString(EnumStringKeys.Contact_Email)}</Text>
        <Text
          style={[ContactStyles.row, ContactStyles.link, ContactStyles.rev]}
          onPress={() => Linking.openURL(EnumURLs_Links_Phones.emailurllong)}>
          {EnumURLs_Links_Phones.emailurlshort}
        </Text>
        <LinearGradient
          colors={[Colors.avi_almost_black_11, Colors.avi_almost_black_80]}
          style={ContactStyles.linearGradient}
        />
      </View>
    </View>
  );
}
