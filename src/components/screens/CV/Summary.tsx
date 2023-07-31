import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { Text, View, Image } from 'react-native';
import { GetString } from '../../../services/localization/localizationProvider';
import { EnumStringKeys } from '../../../services/localization/stringKeys';
import { CVStyles } from '../../../Styles/cv.styles';
import { Colors } from '../../../res';

export function fViewExpandedSummary() {
  return (
    <View style={CVStyles.item}>
      <View>
        <Image
          source={require('../../../assets/images/Common/ic_expand_less_white_24dp.png')}
          style={[CVStyles.buttonImageIconStyle, CVStyles.row_end]}
        />
        <Text style={CVStyles.title}>{GetString(EnumStringKeys.CV_Task_Summary)}</Text>
      </View>
      <Text style={CVStyles.row}>{GetString(EnumStringKeys.CV_Summary_27_Years_Long)}</Text>
      <Text style={CVStyles.row}>{GetString(EnumStringKeys.CV_Summary_Self_Study)}</Text>
      <Text style={CVStyles.row}>{GetString(EnumStringKeys.CV_Summary_Human_Debugger)}</Text>
      <Text style={CVStyles.row}>{GetString(EnumStringKeys.CV_Summary_Appreciated)}</Text>
    </View>
  );
}

export function fViewCollapsedSummary() {
  return (
    <View style={CVStyles.item}>
      <View>
        <Image
          source={require('../../../assets/images/Common/ic_expand_more_white_24dp.png')}
          style={[CVStyles.buttonImageIconStyle, CVStyles.row_end]}
        />
        <Text style={CVStyles.title}>{GetString(EnumStringKeys.CV_Task_Summary)}</Text>
      </View>

      <View>
        <Text style={CVStyles.row}>{GetString(EnumStringKeys.CV_Summary_27_Years_Short)}</Text>
        <LinearGradient
          colors={[Colors.avi_almost_black_11, Colors.avi_almost_black_80]}
          style={CVStyles.linearGradient}
        />
      </View>
    </View>
  );
}
