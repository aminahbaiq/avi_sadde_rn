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
import { fViewCollapsedPersonalDetails, fViewExpandedPersonalDetails } from './PersonalDetails';
import { fViewCollapsedLanguages, fViewExpandedLanguages } from './Languages';
import { fViewCollapsedSummary, fViewExpandedSummary } from './Summary';
import { fViewCollapsedMyRecord, fViewExpandedMyRecord } from './MyRecord';
import { fViewCollapsedVanaga, fViewExpandedVanaga } from './Vanaga';
import { fViewCollapsedSanDisk, fViewExpandedSanDisk } from './SanDisk';
import { fViewCollapsedImpulseDynamics, fViewExpandedImpulseDynamics } from './ImpulseDynamics';
import { fViewCollapsedElbit, fViewExpandedElbit } from './Elbit';
import { fViewCollapsedArelNet, fViewExpandedArelNet } from './ArelNet';
import { fViewCollapsedTechnion, fViewExpandedTechnion } from './Technion';
import { fViewCollapsedBosmat, fViewExpandedBosmat } from './Bosmat';
import { GetString } from '../../../services/localization/localizationProvider';
import { EnumStringKeys } from '../../../services/localization/stringKeys';
import { isLandscape } from '../../../services/Orientation';
import { CVStyles } from '../../../Styles/cv.styles';
import { Colors } from '../../../res';

export enum ScreenCVTypes {
  None,
  PersonalDetails,
  Languages,
  Summary,
  MyRecord,
  Vanaga,
  SanDisk,
  ImpulseDynamics,
  Elbit,
  ArelNet,
  Technion,
  Bosmat
}

const DATA = [
  {
    title: GetString(EnumStringKeys.CV_Section_GeneralDetails),
    data: [
      {
        task: GetString(EnumStringKeys.CV_Task_PersonalDetails),
        funExpandedView: fViewExpandedPersonalDetails,
        funCollapsedView: fViewCollapsedPersonalDetails,
        ScreenCVType: ScreenCVTypes.PersonalDetails,
        imgFile_p: require('../../../assets/images/CV/personaldetails_p.jpg'),
        imgFile_l: require('../../../assets/images/CV/personaldetails_l.jpg')
      },
      {
        task: GetString(EnumStringKeys.CV_Task_Languages),
        funExpandedView: fViewExpandedLanguages,
        funCollapsedView: fViewCollapsedLanguages,
        ScreenCVType: ScreenCVTypes.Languages,
        imgFile_p: require('../../../assets/images/CV/languages_p.jpg'),
        imgFile_l: require('../../../assets/images/CV/languages_l.jpg')
      },
      {
        task: GetString(EnumStringKeys.CV_Task_Summary),
        funExpandedView: fViewExpandedSummary,
        funCollapsedView: fViewCollapsedSummary,
        ScreenCVType: ScreenCVTypes.Summary,
        imgFile_p: require('../../../assets/images/CV/summary_p.jpg'),
        imgFile_l: require('../../../assets/images/CV/summary_l.jpg')
      }
    ]
  },
  {
    title: GetString(EnumStringKeys.CV_Section_WorkExperience),
    data: [
      {
        task: GetString(EnumStringKeys.CV_Task_MyRecord),
        funExpandedView: fViewExpandedMyRecord,
        funCollapsedView: fViewCollapsedMyRecord,
        ScreenCVType: ScreenCVTypes.MyRecord,
        imgFile_p: require('../../../assets/images/CV/myrecord_p.jpg'),
        imgFile_l: require('../../../assets/images/CV/myrecord_l.jpg')
      },
      {
        task: GetString(EnumStringKeys.CV_Task_Vanaga),
        funExpandedView: fViewExpandedVanaga,
        funCollapsedView: fViewCollapsedVanaga,
        ScreenCVType: ScreenCVTypes.Vanaga,
        imgFile_p: require('../../../assets/images/CV/vanaga_p.jpg'),
        imgFile_l: require('../../../assets/images/CV/vanaga_l.jpg')
      },
      {
        task: GetString(EnumStringKeys.CV_Task_SanDisk),
        funExpandedView: fViewExpandedSanDisk,
        funCollapsedView: fViewCollapsedSanDisk,
        ScreenCVType: ScreenCVTypes.SanDisk,
        imgFile_p: require('../../../assets/images/CV/sandisk_p.jpg'),
        imgFile_l: require('../../../assets/images/CV/sandisk_l.jpg')
      },
      {
        task: GetString(EnumStringKeys.CV_Task_ImpulseDynamics),
        funExpandedView: fViewExpandedImpulseDynamics,
        funCollapsedView: fViewCollapsedImpulseDynamics,
        ScreenCVType: ScreenCVTypes.ImpulseDynamics,
        imgFile_p: require('../../../assets/images/CV/impulsedynamics_p.jpg'),
        imgFile_l: require('../../../assets/images/CV/impulsedynamics_l.jpg')
      },
      {
        task: GetString(EnumStringKeys.CV_Task_Elbit),
        funExpandedView: fViewExpandedElbit,
        funCollapsedView: fViewCollapsedElbit,
        ScreenCVType: ScreenCVTypes.Elbit,
        imgFile_p: require('../../../assets/images/CV/elbit_p.jpg'),
        imgFile_l: require('../../../assets/images/CV/elbit_l.jpg')
      },
      {
        task: GetString(EnumStringKeys.CV_Task_ArelNet),
        funExpandedView: fViewExpandedArelNet,
        funCollapsedView: fViewCollapsedArelNet,
        ScreenCVType: ScreenCVTypes.ArelNet,
        imgFile_p: require('../../../assets/images/CV/arelnet_p.jpg'),
        imgFile_l: require('../../../assets/images/CV/arelnet_l.jpg')
      }
    ]
  },
  {
    title: GetString(EnumStringKeys.CV_Section_Education),
    data: [
      {
        task: GetString(EnumStringKeys.CV_Task_Technion),
        funExpandedView: fViewExpandedTechnion,
        funCollapsedView: fViewCollapsedTechnion,
        ScreenCVType: ScreenCVTypes.Technion,
        imgFile_p: require('../../../assets/images/CV/technion_p.jpg'),
        imgFile_l: require('../../../assets/images/CV/technion_l.jpg')
      },
      {
        task: GetString(EnumStringKeys.CV_Task_Bosmat),
        funExpandedView: fViewExpandedBosmat,
        funCollapsedView: fViewCollapsedBosmat,
        ScreenCVType: ScreenCVTypes.Bosmat,
        imgFile_p: require('../../../assets/images/CV/bosmat_p.jpg'),
        imgFile_l: require('../../../assets/images/CV/bosmat_l.jpg')
      }
    ]
  }
];

const ScreenCV: React.FC = () => {
  const [openedScreenCV, setOpenedScreenCV] = useState({
    openedScreenCV: ScreenCVTypes.None,
    imgBgr_l: undefined,
    imgBgr_p: undefined
  });
  const [landscape, setLandscape] = useState(isLandscape());
  Dimensions.addEventListener('change', () => {
    setLandscape(isLandscape());
  });
  return (
    <SafeAreaView style={CVStyles.cvContainer}>
      <ImageBackground
        source={landscape ? openedScreenCV.imgBgr_l : openedScreenCV.imgBgr_p}
        resizeMode="stretch"
        imageStyle={CVStyles.imgBGR}>
        <View style={CVStyles.container1}>
          <SectionList
            sections={DATA}
            keyExtractor={(item, index) => item.task + index}
            renderItem={({ item }) => (
              <TouchableHighlight
                activeOpacity={0.98}
                underlayColor={Colors.cv_tint_transparent}
                onPress={() =>
                  item.ScreenCVType === openedScreenCV.openedScreenCV
                    ? setOpenedScreenCV({
                        openedScreenCV: ScreenCVTypes.None,
                        imgBgr_l: undefined,
                        imgBgr_p: undefined
                      })
                    : setOpenedScreenCV({
                        openedScreenCV: item.ScreenCVType,
                        imgBgr_l: item.imgFile_l,
                        imgBgr_p: item.imgFile_p
                      })
                }>
                {item.ScreenCVType === openedScreenCV.openedScreenCV
                  ? item.funExpandedView()
                  : item.funCollapsedView()}
              </TouchableHighlight>
            )}
            renderSectionHeader={({ section: { title } }) => (
              <Text style={CVStyles.header}>{title}</Text>
            )}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default ScreenCV;
