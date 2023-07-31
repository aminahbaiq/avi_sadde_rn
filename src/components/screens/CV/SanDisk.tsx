import React from 'react';
import { Text, View, Image } from 'react-native';
import { GetString } from '../../../services/localization/localizationProvider';
import { EnumStringKeys } from '../../../services/localization/stringKeys';
import { CVStyles } from '../../../Styles/cv.styles';

export function fViewExpandedSanDisk() {
  return (
    <View style={CVStyles.item}>
      <View>
        <Image
          source={require('../../../assets/images/Common/ic_expand_less_white_24dp.png')}
          style={[CVStyles.buttonImageIconStyle, CVStyles.row_end]}
        />
        <Text style={[CVStyles.title, CVStyles.rev]}>
          {GetString(EnumStringKeys.CV_Task_SanDisk)}
        </Text>
      </View>
      <Text style={[CVStyles.mainrow, CVStyles.rev]}>
        {GetString(EnumStringKeys.CV_SanDisk_Insight)}
      </Text>
      <Text style={CVStyles.row}>
        <Text>{GetString(EnumStringKeys.CV_SanDisk_Insight_Development)}</Text>
      </Text>
      <Text style={CVStyles.rowunder}>
        {GetString(EnumStringKeys.CV_SanDisk_Insight_Application)}
      </Text>
      <Text style={CVStyles.rowunder}>{GetString(EnumStringKeys.CV_SanDisk_Insight_Clients)}</Text>
      <Text style={[CVStyles.mainrow, CVStyles.rev]}>
        {GetString(EnumStringKeys.CV_SanDisk_Oscar)}
      </Text>
      <Text style={CVStyles.rowunder}>
        {GetString(EnumStringKeys.CV_SanDisk_Oscar_Development)}
      </Text>
      <Text style={CVStyles.rowunder}>{GetString(EnumStringKeys.CV_SanDisk_Oscar_GUI)}</Text>
      <Text style={[CVStyles.mainrow, CVStyles.rev]}>
        {GetString(EnumStringKeys.CV_SanDisk_Scripter)}
      </Text>
      <Text style={CVStyles.rowunder}>
        {GetString(EnumStringKeys.CV_SanDisk_Scripter_Development)}
      </Text>
      <Text style={CVStyles.rowunder}>{GetString(EnumStringKeys.CV_SanDisk_Scripter_System)}</Text>
      <Text style={CVStyles.rowunder}>{GetString(EnumStringKeys.CV_SanDisk_Scripter_GUI)}</Text>
      <Text style={CVStyles.rowunder}>{GetString(EnumStringKeys.CV_SanDisk_Scripter_Work)}</Text>
      <Text style={[CVStyles.rowunder, CVStyles.italic]}>
        {GetString(EnumStringKeys.CV_SanDisk_Scripter_Use)}
      </Text>
    </View>
  );
}

export function fViewCollapsedSanDisk() {
  return (
    <View style={CVStyles.item}>
      <View>
        <Image
          source={require('../../../assets/images/Common/ic_expand_more_white_24dp.png')}
          style={[CVStyles.buttonImageIconStyle, CVStyles.row_end]}
        />
        <Text style={[CVStyles.title, CVStyles.rev]}>
          {GetString(EnumStringKeys.CV_Task_SanDisk)}
        </Text>
      </View>
    </View>
  );
}
