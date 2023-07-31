/* eslint-disable no-console */
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { PermissionsAndroid, Text, View, Linking, Image } from 'react-native';
import { GetString } from '../../../services/localization/localizationProvider';
import { EnumStringKeys } from '../../../services/localization/stringKeys';
import { EnumURLs_Links_Phones } from '../../../services/URLs_Links_Phones';
import { CVStyles } from '../../../Styles/cv.styles';
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

function Dial() {
  PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.CALL_PHONE).then(response => {
    if (response === true) {
      Linking.openURL(EnumURLs_Links_Phones.cellnumlong);
    } else if (response === false) {
      requestPhonePermission();
    }
  });
}

export function fViewExpandedPersonalDetails() {
  return (
    <View style={CVStyles.item}>
      <View>
        <Image
          source={require('../../../assets/images/Common/ic_expand_less_white_24dp.png')}
          style={[CVStyles.buttonImageIconStyle, CVStyles.row_end]}
        />
        <Text style={CVStyles.title}>{GetString(EnumStringKeys.CV_Task_PersonalDetails)}</Text>
      </View>

      <Text style={CVStyles.rowcaption}>
        {GetString(EnumStringKeys.CV_Personal_Address_Caption)}
      </Text>
      <Text style={CVStyles.row}>{GetString(EnumStringKeys.CV_Personal_Address)}</Text>

      <Text style={CVStyles.rowcaption}>{GetString(EnumStringKeys.CV_Personal_Phone)}</Text>
      <Text style={[CVStyles.row, CVStyles.link, CVStyles.rev]} onPress={() => Dial()}>
        {GetString(EnumStringKeys.CV_Personal_Phone_Number)}
      </Text>

      <Text style={CVStyles.rowcaption}>{GetString(EnumStringKeys.CV_Personal_Email)}</Text>
      <Text
        style={[CVStyles.row, CVStyles.link, CVStyles.rev]}
        onPress={() => Linking.openURL(EnumURLs_Links_Phones.emailurllong)}>
        {EnumURLs_Links_Phones.emailurlshort}
      </Text>

      <Text style={CVStyles.rowcaption}>{GetString(EnumStringKeys.CV_Personal_WEB)}</Text>
      <Text
        style={[CVStyles.row, CVStyles.link, CVStyles.rev]}
        onPress={() => Linking.openURL(EnumURLs_Links_Phones.weburllong)}>
        {EnumURLs_Links_Phones.weburlshort}
      </Text>
    </View>
  );
}

export function fViewCollapsedPersonalDetails() {
  return (
    <View style={CVStyles.item}>
      <View>
        <Image
          source={require('../../../assets/images/Common/ic_expand_more_white_24dp.png')}
          style={[CVStyles.buttonImageIconStyle, CVStyles.row_end]}
        />
        <Text style={CVStyles.title}>{GetString(EnumStringKeys.CV_Task_PersonalDetails)}</Text>
      </View>

      <View>
        <Text style={CVStyles.rowcaption}>
          {GetString(EnumStringKeys.CV_Personal_Address_Caption)}
        </Text>
        <Text style={CVStyles.row}>{GetString(EnumStringKeys.CV_Personal_Address)}</Text>
        <LinearGradient
          colors={[Colors.avi_almost_black_11, Colors.avi_almost_black_80]}
          style={CVStyles.linearGradient}
        />
      </View>
    </View>
  );
}
