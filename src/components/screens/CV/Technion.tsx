import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { Text, View, Image } from 'react-native';
import { GetString } from '../../../services/localization/localizationProvider';
import { EnumStringKeys } from '../../../services/localization/stringKeys';
import { CVStyles } from '../../../Styles/cv.styles';
import { Colors } from '../../../res';

export function fViewExpandedTechnion() {
  return (
    <View style={CVStyles.item}>
      <View>
        <Image
          source={require('../../../assets/images/Common/ic_expand_less_white_24dp.png')}
          style={[CVStyles.buttonImageIconStyle, CVStyles.row_end]}
        />
        <Text style={CVStyles.title}>{GetString(EnumStringKeys.CV_Task_Technion)}</Text>
      </View>
      <Text style={[CVStyles.rowunder, CVStyles.bold]}>
        {GetString(EnumStringKeys.CV_Technion_BSc)}
      </Text>
      <Text style={CVStyles.row}>{GetString(EnumStringKeys.CV_Technion_Specialization)}</Text>
      <Text style={CVStyles.rowunder}>{GetString(EnumStringKeys.CV_Technion_Grade)}</Text>
      <Text style={[CVStyles.rowunder, CVStyles.underline]}>
        {GetString(EnumStringKeys.CV_Technion_Faculty)}
      </Text>
      <Text style={CVStyles.rowunder}>{GetString(EnumStringKeys.CV_Technion_Courses)}</Text>
      <Text style={[CVStyles.rowunder, CVStyles.underline]}>
        {GetString(EnumStringKeys.CV_Technion_Project)}
      </Text>
      <Text style={[CVStyles.rowunder, CVStyles.rev]}>
        {GetString(EnumStringKeys.CV_Technion_Project_Spooler)}
      </Text>
      <Text style={CVStyles.rowunder}>{GetString(EnumStringKeys.CV_Technion_Project_Desc)}</Text>
      <Text style={CVStyles.rowunder}>{GetString(EnumStringKeys.CV_Technion_Project_Grade)}</Text>
    </View>
  );
}

export function fViewCollapsedTechnion() {
  return (
    <View style={CVStyles.item}>
      <View>
        <Image
          source={require('../../../assets/images/Common/ic_expand_more_white_24dp.png')}
          style={[CVStyles.buttonImageIconStyle, CVStyles.row_end]}
        />
        <Text style={CVStyles.title}>{GetString(EnumStringKeys.CV_Task_Technion)}</Text>
      </View>

      <View>
        <Text style={CVStyles.row}>{GetString(EnumStringKeys.CV_Technion_Specialization)}</Text>
        <LinearGradient
          colors={[Colors.avi_almost_black_11, Colors.avi_almost_black_80]}
          style={CVStyles.linearGradient}
        />
      </View>
    </View>
  );
}
