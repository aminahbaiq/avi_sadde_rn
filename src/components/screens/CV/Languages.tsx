import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { Text, View, Image } from 'react-native';
import { GetString } from '../../../services/localization/localizationProvider';
import { EnumStringKeys } from '../../../services/localization/stringKeys';
import { CVStyles } from '../../../Styles/cv.styles';
import { Colors } from '../../../res';

export function fViewExpandedLanguages() {
  return (
    <View style={CVStyles.item}>
      <View>
        <Image
          source={require('../../../assets/images/Common/ic_expand_less_white_24dp.png')}
          style={[CVStyles.buttonImageIconStyle, CVStyles.row_end]}
        />
        <Text style={CVStyles.title}>{GetString(EnumStringKeys.CV_Task_Languages)}</Text>
      </View>
      <Text style={CVStyles.rowcaption}>
        {GetString(EnumStringKeys.CV_Languages_Hebrew_Caption)}
      </Text>
      <Text style={CVStyles.row}>{GetString(EnumStringKeys.CV_Languages_Hebrew)}</Text>

      <Text style={CVStyles.rowcaption}>
        {GetString(EnumStringKeys.CV_Languages_English_Caption)}
      </Text>
      <Text style={CVStyles.row}>{GetString(EnumStringKeys.CV_Languages_English)}</Text>
    </View>
  );
}

export function fViewCollapsedLanguages() {
  return (
    <View style={CVStyles.item}>
      <View>
        <Image
          source={require('../../../assets/images/Common/ic_expand_more_white_24dp.png')}
          style={[CVStyles.buttonImageIconStyle, CVStyles.row_end]}
        />
        <Text style={CVStyles.title}>{GetString(EnumStringKeys.CV_Task_Languages)}</Text>
      </View>

      <View>
        <Text style={CVStyles.rowcaption}>
          {GetString(EnumStringKeys.CV_Languages_Hebrew_Caption)}
        </Text>
        <Text style={CVStyles.row}>{GetString(EnumStringKeys.CV_Languages_Hebrew)}</Text>
        <LinearGradient
          colors={[Colors.avi_almost_black_11, Colors.avi_almost_black_80]}
          style={CVStyles.linearGradient}
        />
      </View>
    </View>
  );
}
