import React from 'react';
import { Text, View, Image } from 'react-native';
import { GetString } from '../../../services/localization/localizationProvider';
import { EnumStringKeys } from '../../../services/localization/stringKeys';
import { CVStyles } from '../../../Styles/cv.styles';

export function fViewExpandedVanaga() {
  return (
    <View style={CVStyles.item}>
      <View>
        <Image
          source={require('../../../assets/images/Common/ic_expand_less_white_24dp.png')}
          style={[CVStyles.buttonImageIconStyle, CVStyles.row_end]}
        />
        <Text style={[CVStyles.title, CVStyles.rev]}>
          {GetString(EnumStringKeys.CV_Task_Vanaga)}
        </Text>
      </View>
      <Text style={CVStyles.row}>
        <Text style={CVStyles.underline}>{GetString(EnumStringKeys.CV_Vanaga_Independent)}</Text>
        {GetString(EnumStringKeys.CV_Vanaga_Application)}
      </Text>
      <Text style={CVStyles.rowunder}>{GetString(EnumStringKeys.CV_Vanaga_Network)}</Text>
      <Text style={CVStyles.rowunder}>{GetString(EnumStringKeys.CV_Vanaga_Env)}</Text>
    </View>
  );
}

export function fViewCollapsedVanaga() {
  return (
    <View style={CVStyles.item}>
      <View>
        <Image
          source={require('../../../assets/images/Common/ic_expand_more_white_24dp.png')}
          style={[CVStyles.buttonImageIconStyle, CVStyles.row_end]}
        />
        <Text style={[CVStyles.title, CVStyles.rev]}>
          {GetString(EnumStringKeys.CV_Task_Vanaga)}
        </Text>
      </View>
    </View>
  );
}
