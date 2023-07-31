import React from 'react';
import { Text, View, Image } from 'react-native';
import { GetString } from '../../../services/localization/localizationProvider';
import { EnumStringKeys } from '../../../services/localization/stringKeys';
import { CVStyles } from '../../../Styles/cv.styles';

export function fViewExpandedArelNet() {
  return (
    <View style={CVStyles.item}>
      <View>
        <Image
          source={require('../../../assets/images/Common/ic_expand_less_white_24dp.png')}
          style={[CVStyles.buttonImageIconStyle, CVStyles.row_end]}
        />
        <Text style={CVStyles.title}>{GetString(EnumStringKeys.CV_Task_ArelNet)}</Text>
      </View>
      <Text style={CVStyles.row}>
        {GetString(EnumStringKeys.CV_ArelNet_1)}
        <Text style={CVStyles.ifax}>i</Text>
        <Text style={CVStyles.bold}>-Fax</Text>
        {GetString(EnumStringKeys.CV_ArelNet_2)}
      </Text>
      <Text style={CVStyles.rowunder}>{GetString(EnumStringKeys.CV_ArelNet_3)}</Text>
    </View>
  );
}

export function fViewCollapsedArelNet() {
  return (
    <View style={CVStyles.item}>
      <View>
        <Image
          source={require('../../../assets/images/Common/ic_expand_more_white_24dp.png')}
          style={[CVStyles.buttonImageIconStyle, CVStyles.row_end]}
        />
        <Text style={CVStyles.title}>{GetString(EnumStringKeys.CV_Task_ArelNet)}</Text>
      </View>
    </View>
  );
}
