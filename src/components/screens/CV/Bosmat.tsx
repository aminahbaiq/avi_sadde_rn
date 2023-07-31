import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { Text, View, Image } from 'react-native';
import { GetString } from '../../../services/localization/localizationProvider';
import { EnumStringKeys } from '../../../services/localization/stringKeys';
import { CVStyles } from '../../../Styles/cv.styles';
import { Colors } from '../../../res';

export function fViewExpandedBosmat() {
  return (
    <View style={CVStyles.item}>
      <View>
        <Image
          source={require('../../../assets/images/Common/ic_expand_less_white_24dp.png')}
          style={[CVStyles.buttonImageIconStyle, CVStyles.row_end]}
        />
        <Text style={CVStyles.title}>{GetString(EnumStringKeys.CV_Task_Bosmat)}</Text>
      </View>
      <Text style={CVStyles.rowunder}>
        <Text style={CVStyles.bold}>
          {GetString(EnumStringKeys.CV_Bosmat_Practical_Electrical_Engineering)}
        </Text>
        {GetString(EnumStringKeys.CV_Bosmat_Excellent_Student)}
      </Text>
      <Text style={CVStyles.rowunder}>
        <Text style={CVStyles.underline}>{GetString(EnumStringKeys.CV_Bosmat_Project_1)}</Text>
        {GetString(EnumStringKeys.CV_Bosmat_Project_2)}
        <Text style={CVStyles.bold}>{GetString(EnumStringKeys.CV_Bosmat_Project_Grade)}</Text>
      </Text>
      <Text style={CVStyles.title}>{GetString(EnumStringKeys.CV_Bosmat_Bagrut)}</Text>
    </View>
  );
}

export function fViewCollapsedBosmat() {
  return (
    <View style={CVStyles.item}>
      <View>
        <Image
          source={require('../../../assets/images/Common/ic_expand_more_white_24dp.png')}
          style={[CVStyles.buttonImageIconStyle, CVStyles.row_end]}
        />
        <Text style={CVStyles.title}>{GetString(EnumStringKeys.CV_Task_Bosmat)}</Text>
      </View>

      <View>
        <Text style={CVStyles.row}>
          {GetString(EnumStringKeys.CV_Bosmat_Practical_Electrical_Engineering)}
        </Text>
        <LinearGradient
          colors={[Colors.avi_almost_black_11, Colors.avi_almost_black_80]}
          style={CVStyles.linearGradient}
        />
      </View>
    </View>
  );
}
