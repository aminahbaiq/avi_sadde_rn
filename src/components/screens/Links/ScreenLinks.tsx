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
import { fViewCollapsedDownloads, fViewExpandedDownloads } from './Downloads';
import { fViewCollapsedWeb, fViewExpandedWeb } from './Web';
import { fViewCollapsedProjects, fViewExpandedProjects } from './Projects';
import { fViewCollapsedMusic, fViewExpandedMusic } from './Music';
import { fViewCollapsedSocial, fViewExpandedSocial } from './Social';
import { GetString } from '../../../services/localization/localizationProvider';
import { EnumStringKeys } from '../../../services/localization/stringKeys';
import { isLandscape } from '../../../services/Orientation';
import { LinksStyles } from '../../../Styles/links.styles';
import { Colors } from '../../../res';

export enum ScreenLinksTypes {
  None,
  Downloads,
  Web,
  Projects,
  Music,
  Social
}

const DATA = [
  {
    title: GetString(EnumStringKeys.Links_Section_Professional),
    data: [
      {
        task: GetString(EnumStringKeys.Links_Task_Downloads),
        funExpandedView: fViewExpandedDownloads,
        funCollapsedView: fViewCollapsedDownloads,
        ScreenLinksType: ScreenLinksTypes.Downloads,
        imgFile_l: require('../../../assets/images/Links/downloads_l.jpg'),
        imgFile_p: require('../../../assets/images/Links/downloads_p.jpg')
      },
      {
        task: GetString(EnumStringKeys.Links_Task_Web),
        funExpandedView: fViewExpandedWeb,
        funCollapsedView: fViewCollapsedWeb,
        ScreenLinksType: ScreenLinksTypes.Web,
        imgFile_l: require('../../../assets/images/Links/web_l.jpg'),
        imgFile_p: require('../../../assets/images/Links/web_p.jpg')
      },
      {
        task: GetString(EnumStringKeys.Links_Task_Projects),
        funExpandedView: fViewExpandedProjects,
        funCollapsedView: fViewCollapsedProjects,
        ScreenLinksType: ScreenLinksTypes.Projects,
        imgFile_l: require('../../../assets/images/Links/projects_l.jpg'),
        imgFile_p: require('../../../assets/images/Links/projects_p.jpg')
      }
    ]
  },
  {
    title: GetString(EnumStringKeys.Links_Section_Personal),
    data: [
      {
        task: GetString(EnumStringKeys.Links_Task_Music),
        funExpandedView: fViewExpandedMusic,
        funCollapsedView: fViewCollapsedMusic,
        ScreenLinksType: ScreenLinksTypes.Music,
        imgFile_l: require('../../../assets/images/Links/music_l.jpg'),
        imgFile_p: require('../../../assets/images/Links/music_p.jpg')
      },
      {
        task: GetString(EnumStringKeys.Links_Task_Social),
        funExpandedView: fViewExpandedSocial,
        funCollapsedView: fViewCollapsedSocial,
        ScreenLinksType: ScreenLinksTypes.Social,
        imgFile_l: require('../../../assets/images/Links/social_l.jpg'),
        imgFile_p: require('../../../assets/images/Links/social_p.jpg')
      }
    ]
  }
];

const ScreenLinks: React.FC = () => {
  const [openedScreenLinks, setOpenedScreenLinks] = useState({
    openedScreenLinks: ScreenLinksTypes.None,
    imgBgr_l: undefined,
    imgBgr_p: undefined
  });
  const [landscape, setLandscape] = useState(isLandscape());
  Dimensions.addEventListener('change', () => {
    setLandscape(isLandscape());
  });
  return (
    <SafeAreaView style={LinksStyles.linksContainer}>
      <ImageBackground
        source={landscape ? openedScreenLinks.imgBgr_l : openedScreenLinks.imgBgr_p}
        resizeMode="stretch"
        imageStyle={LinksStyles.imgBGR}>
        <View style={LinksStyles.container1}>
          <SectionList
            sections={DATA}
            keyExtractor={(item, index) => item.task + index}
            renderItem={({ item }) => (
              <TouchableHighlight
                activeOpacity={0.98}
                underlayColor={Colors.links_tint_transparent}
                onPress={() =>
                  item.ScreenLinksType === openedScreenLinks.openedScreenLinks
                    ? setOpenedScreenLinks({
                        openedScreenLinks: ScreenLinksTypes.None,
                        imgBgr_l: undefined,
                        imgBgr_p: undefined
                      })
                    : setOpenedScreenLinks({
                        openedScreenLinks: item.ScreenLinksType,
                        imgBgr_l: item.imgFile_l,
                        imgBgr_p: item.imgFile_p
                      })
                }>
                {item.ScreenLinksType === openedScreenLinks.openedScreenLinks
                  ? item.funExpandedView()
                  : item.funCollapsedView()}
              </TouchableHighlight>
            )}
            renderSectionHeader={({ section: { title } }) => (
              <Text style={LinksStyles.header}>{title}</Text>
            )}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default ScreenLinks;
