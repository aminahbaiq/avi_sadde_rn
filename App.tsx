import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { ReactNode } from 'react';
import ScreenSplash from './src/components/screens/ScreenSplash';
import ScreenHome from './src/components/screens/ScreenHome';
import ScreenCV from './src/components/screens/CV/ScreenCV';
import ScreenGallerySnapCarousel from './src/components/screens/Gallery/ScreenGallerySnapCarousel';
import ScreenLinks from './src/components/screens/Links/ScreenLinks';
import ScreenContact from './src/components/screens/Contact/ScreenContact';
import { Routes } from './src/components/Definitions/screens';
import { Colors } from './src/res';
import { I18nManager, Image, StatusBar } from 'react-native';
import { HomeStyles } from './src/Styles/home.styles';
import { HeaderStyles } from './src/Styles/header.styles';
import { GetString } from './src/services/localization/localizationProvider';
import { EnumStringKeys } from './src/services/localization/stringKeys';

const HomeStack = createStackNavigator();
I18nManager.allowRTL(true);
//I18nManager.forceRTL(false);
//I18nManager.swapLeftAndRightInRTL(true);

function BackImage(_props: { tintColor: string }) {
  return (
    <Image
      source={
        I18nManager.isRTL
          ? require('./src/assets/images/Common/baseline_arrow_forward_ios_white_24dp.png')
          : require('./src/assets/images/Common/baseline_arrow_back_ios_new_white_24dp.png')
      }
      style={[HomeStyles.backBtn, { tintColor: _props.tintColor }]}
    />
  );
}

const App: () => ReactNode = () => {
  return (
    <NavigationContainer>
      <HomeStack.Navigator>
        <HomeStack.Screen
          name={Routes.Splash}
          component={ScreenSplash}
          options={{
            headerShown: false
          }}
        />
        <HomeStack.Screen
          name={Routes.Home}
          component={ScreenHome}
          options={{
            title: GetString(EnumStringKeys.Home_Title),
            headerTintColor: Colors.home_tint,
            headerStyle: {
              backgroundColor: 'black',
              height: StatusBar.currentHeight
            }
          }}
        />
        <HomeStack.Screen
          name={Routes.CV}
          component={ScreenCV}
          options={{
            title: GetString(EnumStringKeys.CV_Title),
            headerTintColor: Colors.cv_tint,
            headerBackImage: () => <BackImage tintColor={Colors.cv_tint} />,
            headerStyle: HeaderStyles.headerStyle,
            headerTitleStyle: HeaderStyles.textsize
          }}
        />
        <HomeStack.Screen
          name={Routes.Contact}
          component={ScreenContact}
          options={{
            title: GetString(EnumStringKeys.Contact_Title),
            headerTintColor: Colors.contact_tint,
            headerStyle: {
              backgroundColor: 'black'
            }
          }}
        />
        <HomeStack.Screen
          name={Routes.Links}
          component={ScreenLinks}
          options={{
            title: GetString(EnumStringKeys.Links_Title),
            headerTintColor: Colors.links_tint,
            headerStyle: {
              backgroundColor: 'black'
            }
          }}
        />
        <HomeStack.Screen
          name={Routes.Gallery}
          component={ScreenGallerySnapCarousel}
          options={{
            title: GetString(EnumStringKeys.Gallery_Title),
            headerTintColor: Colors.gallery_tint,
            headerBackImage: () => <BackImage tintColor={Colors.gallery_tint} />,
            headerStyle: HeaderStyles.headerStyle,
            headerTitleStyle: HeaderStyles.textsize
          }}
        />
      </HomeStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
