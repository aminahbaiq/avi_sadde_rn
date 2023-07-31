/* eslint-disable no-console */
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { PermissionsAndroid, Text, View, Linking, Image } from 'react-native';
import { GetString } from '../../../services/localization/localizationProvider';
import { EnumStringKeys } from '../../../services/localization/stringKeys';
import { ContactStyles } from '../../../Styles/contact.styles';
import { EnumURLs_Links_Phones } from '../../../services/URLs_Links_Phones';
import { Colors } from '../../../res';

const requestPhonePermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CALL_PHONE, {
      title: GetString(EnumStringKeys.Phone_Permissions_Title),
      message: GetString(EnumStringKeys.Phone_Permissions_Message),
      buttonNeutral: GetString(EnumStringKeys.Phone_Permissions_ButtonNeutral),
      buttonNegative: GetString(EnumStringKeys.Phone_Permissions_ButtonNegative),
      buttonPositive: GetString(EnumStringKeys.Phone_Permissions_ButtonPositive)
    });
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('You can dial');
    } else {
      console.log('permission denied');
    }
  } catch (err) {
    console.warn(err);
  }
};

function Dial(_num: string) {
  PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.CALL_PHONE).then(response => {
    if (response === true) {
      Linking.openURL(_num);
    } else if (response === false) {
      requestPhonePermission();
    }
  });
}

export function fViewExpandedCall() {
  return (
    <View style={ContactStyles.item}>
      <View>
        <Image
          source={require('../../../assets/images/Common/ic_expand_less_white_24dp.png')}
          style={[ContactStyles.buttonImageIconStyle, ContactStyles.row_end]}
        />
        <Text style={ContactStyles.title}>{GetString(EnumStringKeys.Contact_Task_Call)}</Text>
      </View>

      <Text style={ContactStyles.rowcaption}>
        {GetString(EnumStringKeys.Contact_Cellular_Phone)}
      </Text>
      <Text
        style={[ContactStyles.row, ContactStyles.link, ContactStyles.rev]}
        onPress={() => Dial(EnumURLs_Links_Phones.cellnumlong)}>
        {GetString(EnumStringKeys.Contact_Cellular_Phone_Number)}
      </Text>

      <Text style={ContactStyles.rowcaption}>{GetString(EnumStringKeys.Contact_Home_Phone)}</Text>
      <Text
        style={[ContactStyles.row, ContactStyles.link, ContactStyles.rev]}
        onPress={() => Dial(EnumURLs_Links_Phones.homenumlong)}>
        {GetString(EnumStringKeys.Contact_Home_Phone_Number)}
      </Text>
    </View>
  );
}

export function fViewCollapsedCall() {
  return (
    <View style={ContactStyles.item}>
      <View>
        <Image
          source={require('../../../assets/images/Common/ic_expand_more_white_24dp.png')}
          style={[ContactStyles.buttonImageIconStyle, ContactStyles.row_end]}
        />
        <Text style={ContactStyles.title}>{GetString(EnumStringKeys.Contact_Task_Call)}</Text>
      </View>
      <Text style={ContactStyles.rowcaption}>
        {GetString(EnumStringKeys.Contact_Cellular_Phone)}
      </Text>

      <View>
        <Text
          style={[ContactStyles.row, ContactStyles.link, ContactStyles.rev]}
          onPress={() => Dial(EnumURLs_Links_Phones.cellnumlong)}>
          {GetString(EnumStringKeys.Contact_Cellular_Phone_Number)}
        </Text>
        <LinearGradient
          colors={[Colors.avi_almost_black_11, Colors.avi_almost_black_80]}
          style={ContactStyles.linearGradient}
        />
      </View>
    </View>
  );
}
