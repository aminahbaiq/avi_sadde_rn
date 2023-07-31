import React from 'react';
import { Text, View, Image } from 'react-native';
import { GetString } from '../../../services/localization/localizationProvider';
import { EnumStringKeys } from '../../../services/localization/stringKeys';
import { CVStyles } from '../../../Styles/cv.styles';

export function fViewExpandedImpulseDynamics() {
  return (
    <View style={CVStyles.item}>
      <View>
        <Image
          source={require('../../../assets/images/Common/ic_expand_less_white_24dp.png')}
          style={[CVStyles.buttonImageIconStyle, CVStyles.row_end]}
        />
        <Text style={CVStyles.title}>{GetString(EnumStringKeys.CV_Task_ImpulseDynamics)}</Text>
      </View>
      <Text style={CVStyles.row}>{GetString(EnumStringKeys.CV_ImpulseDynamics_Development)}</Text>
      <Text style={CVStyles.rowunder}>{GetString(EnumStringKeys.CV_ImpulseDynamics_Env)}</Text>
    </View>
  );
}

export function fViewCollapsedImpulseDynamics() {
  return (
    <View style={CVStyles.item}>
      <View>
        <Image
          source={require('../../../assets/images/Common/ic_expand_more_white_24dp.png')}
          style={[CVStyles.buttonImageIconStyle, CVStyles.row_end]}
        />
        <Text style={CVStyles.title}>{GetString(EnumStringKeys.CV_Task_ImpulseDynamics)}</Text>
      </View>
    </View>
  );
}
