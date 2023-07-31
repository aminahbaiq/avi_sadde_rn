import React from 'react';
import { Text, View, Image } from 'react-native';
import { GetString } from '../../../services/localization/localizationProvider';
import { EnumStringKeys } from '../../../services/localization/stringKeys';
import { CVStyles } from '../../../Styles/cv.styles';

export function fViewExpandedMyRecord() {
  return (
    <View style={CVStyles.item}>
      <View>
        <Image
          source={require('../../../assets/images/Common/ic_expand_less_white_24dp.png')}
          style={[CVStyles.buttonImageIconStyle, CVStyles.row_end]}
        />
        <Text style={CVStyles.title}>{GetString(EnumStringKeys.CV_Task_MyRecord)}</Text>
      </View>
      <Text style={CVStyles.mainrow}>{GetString(EnumStringKeys.CV_MyRecord_MVP_1x)}</Text>
      <Text style={CVStyles.row}>
        <Text>{GetString(EnumStringKeys.CV_MyRecord_MVP_1x_1)}</Text>
      </Text>
      <Text style={CVStyles.rowunder}>{GetString(EnumStringKeys.CV_MyRecord_MVP_1x_2)}</Text>
      <Text style={CVStyles.row}>
        <Text style={CVStyles.mainrow}>{GetString(EnumStringKeys.CV_MyRecord_MVP_0x)}</Text>
      </Text>
      <Text style={[CVStyles.row, CVStyles.myrecord]}>
        {GetString(EnumStringKeys.CV_MyRecord_MVP_0x_Development)}
      </Text>
      <Text style={CVStyles.rowunder}>{GetString(EnumStringKeys.CV_MyRecord_MVP_0x_1)}</Text>
      <Text style={CVStyles.rowunder}>{GetString(EnumStringKeys.CV_MyRecord_MVP_0x_2)}</Text>
    </View>
  );
}

export function fViewCollapsedMyRecord() {
  return (
    <View style={CVStyles.item}>
      <View>
        <Image
          source={require('../../../assets/images/Common/ic_expand_more_white_24dp.png')}
          style={[CVStyles.buttonImageIconStyle, CVStyles.row_end]}
        />
        <Text style={CVStyles.title}>{GetString(EnumStringKeys.CV_Task_MyRecord)}</Text>
      </View>
    </View>
  );
}
