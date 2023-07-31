import React, { useState } from 'react';
import {
  Text,
  SafeAreaView,
  SectionList,
  TouchableHighlight,
  ImageBackground,
  View,
  Dimensions
} from 'react-native';
import { fViewCollapsedCall, fViewExpandedCall } from './Call';
import { fViewCollapsedMessaging, fViewExpandedMessaging } from './Messaging';
import { GetString } from '../../../services/localization/localizationProvider';
import { EnumStringKeys } from '../../../services/localization/stringKeys';
import { isLandscape } from '../../../services/Orientation';
import { ContactStyles } from '../../../Styles/contact.styles';
import { Colors } from '../../../res';

export enum ScreenContactTypes {
  None,
  Call,
  Messaging
}

const DATA = [
  {
    title: GetString(EnumStringKeys.Contact_Section_Connection),
    data: [
      {
        task: GetString(EnumStringKeys.Contact_Task_Call),
        funExpandedView: fViewExpandedCall,
        funCollapsedView: fViewCollapsedCall,
        ScreenContactType: ScreenContactTypes.Call,
        imgFile_l: require('../../../assets/images/Contact/call_l.jpg'),
        imgFile_p: require('../../../assets/images/Contact/call_p.jpg')
      },
      {
        task: GetString(EnumStringKeys.Contact_Task_Messaging),
        funExpandedView: fViewExpandedMessaging,
        funCollapsedView: fViewCollapsedMessaging,
        ScreenContactType: ScreenContactTypes.Messaging,
        imgFile_l: require('../../../assets/images/Contact/messaging_l.jpg'),
        imgFile_p: require('../../../assets/images/Contact/messaging_p.jpg')
      }
    ]
  }
];

const ScreenContact: React.FC = () => {
  const [openedScreenContact, setOpenedScreenContact] = useState({
    openedScreenContact: ScreenContactTypes.None,
    imgBgr_l: undefined,
    imgBgr_p: undefined
  });
  const [landscape, setLandscape] = useState(isLandscape());
  Dimensions.addEventListener('change', () => {
    setLandscape(isLandscape());
  });
  return (
    <SafeAreaView style={ContactStyles.contactContainer}>
      <ImageBackground
        source={landscape ? openedScreenContact.imgBgr_l : openedScreenContact.imgBgr_p}
        resizeMode="stretch"
        imageStyle={ContactStyles.imgBGR}>
        <View style={ContactStyles.container1}>
          <SectionList
            sections={DATA}
            keyExtractor={(item, index) => item.task + index}
            renderItem={({ item }) => (
              <TouchableHighlight
                activeOpacity={0.98}
                underlayColor={Colors.contact_tint_transparent}
                onPress={() =>
                  item.ScreenContactType === openedScreenContact.openedScreenContact
                    ? setOpenedScreenContact({
                        openedScreenContact: ScreenContactTypes.None,
                        imgBgr_l: undefined,
                        imgBgr_p: undefined
                      })
                    : setOpenedScreenContact({
                        openedScreenContact: item.ScreenContactType,
                        imgBgr_l: item.imgFile_l,
                        imgBgr_p: item.imgFile_p
                      })
                }>
                {item.ScreenContactType === openedScreenContact.openedScreenContact
                  ? item.funExpandedView()
                  : item.funCollapsedView()}
              </TouchableHighlight>
            )}
            renderSectionHeader={({ section: { title } }) => (
              <Text style={ContactStyles.header}>{title}</Text>
            )}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default ScreenContact;
