import React from 'react';
import { Text, View } from 'react-native';

export default function SignInScreens() {
  return (
    <View>
      <Text>SignInScreens</Text>
    </View>
  );
}

/*import appJson from '../../../app.json';
import { StyleSheet, View } from 'react-native';
import { createContext, Fragment, ReactNode, useEffect, useState } from 'react';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
//import { Headline, ActivityIndicator, Provider as PaperProvider } from 'react-native-paper';
import SignedInStack from './signed-in/Stack';
import SignedOutStack from './signed-out/Stack';
import { initialWindowMetrics, SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { useAppSettings } from './components/AppSettings';
import { AlertsProvider } from 'react-native-paper-alerts';
import React, { useContext, useEffect, useState } from 'react';
import { Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback } from 'react-native';

interface IAuthProps {
  onboarding?: boolean;
  closeModal: ActionWithAuthenticationResult;
}

enum AuthScreenType {
  ByEmail,
  ByGoogle,
  ByPhone
}

type User = FirebaseAuthTypes.User | null;

export const UserContext = createContext<User>(null);

//function App(): JSX.Element {
const SignInScreens: React.FC<IAuthProps> = (props: IAuthProps) => {
  const [initializing, setInitializing] = useState(true);
  const [listenUser, setListenUser] = useState(false);
  const [user, setUser] = useState<User>(null);
  const appSettings = useAppSettings();

  // Listen for auth state changes 
  useEffect(() => {
    const authListener = auth().onAuthStateChanged(result => {
      setUser(result);
      if (initializing && !listenUser) {
        setInitializing(false);
        setListenUser(true);
      }
    });

    return () => {
      if (authListener) {
        authListener();
      }
    };
  }, [initializing, listenUser]);

  // Listen for user changes 
  useEffect(() => {
    let userListener: () => void;

    if (listenUser) {
      // TODO @react-native-firebase/auth provides `onUserChanged` which is this and more.
      // what else can we add and still be web-compatible?
      userListener = auth().onIdTokenChanged(result => {
        setUser(result);
      });
    }

    return () => {
      if (userListener) {
        userListener();
      }
    };
  }, [listenUser]);

  if (initializing) {
    let waiting = true;
    setTimeout(() => {
      waiting = false;
    }, 1000);

    return (
      <View
        style={[
          styles.loadingContainer,
          { backgroundColor: appSettings.currentTheme.colors.background }
        ]}>
        {!waiting && (
          <Fragment>
            <Headline style={[styles.padded, { color: appSettings.currentTheme.colors.text }]}>
              {appSettings.t('loading')}...
            </Headline>
            <ActivityIndicator
              size={'large'}
              theme={{
                ...appSettings.currentTheme,
                colors: { primary: appSettings.currentTheme.colors.accent }
              }}
            />
          </Fragment>
        )}
      </View>
    );
  }

  function container(children: ReactNode | ReactNode[]) {
    return (
      <SafeAreaProvider initialMetrics={initialWindowMetrics}>
        <PaperProvider theme={appSettings.currentTheme}>
          <AlertsProvider>
            <NavigationContainer
              linking={{
                prefixes: [
                  'invertase.github.io/react-native-firebase-authentication-example',
                  'localhost'
                ],
                config: {
                  screens: {
                    // Our signed-out stack has these:
                    SignIn: '',
                    CreateAccount: 'account/create',
                    ForgotPassword: 'account/password/forgot',
                    PhoneSignIn: 'account/phone/login',
                    // Used as catch-all - there is a "Home" in signed-in and signed-out stacks!
                    NotFound: '*',

                    Details: 'details', // included from Luna template app
                    User: 'user',
                    UserProfile: 'profile',
                    UserSettings: 'profile/edit'
                  }
                }
              }}
              documentTitle={{
                formatter: (options, route) =>
                  `${appJson.displayName}${
                    options?.title || route?.name ? ' - ' + options?.title ?? route?.name : ' '
                  }`
              }}
              theme={appSettings.currentTheme}>
              {children}
            </NavigationContainer>
          </AlertsProvider>
        </PaperProvider>
      </SafeAreaProvider>
    );
  }

  return container(
    user ? (
      <UserContext.Provider value={user}>
        <SignedInStack />
      </UserContext.Provider>
    ) : (
      <SignedOutStack />
    )
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    // alignSelf: 'center',
    alignItems: 'center'
    // textAlignVertical: true,
  },
  padded: {
    padding: 40
  }
});

export default SignInScreens;*/

/*import React, { useContext, useEffect, useState } from 'react';
import { Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback } from 'react-native';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';


interface IAuthProps {
  onboarding?: boolean;
  closeModal: ActionWithAuthenticationResult;
}

enum AuthScreenType {
  ByEmail,
  ByGoogle,
  ByPhone
}

const SignInScreens: React.FC<IAuthProps> = (props: IAuthProps) => {
  const { changeLanguage } = useContext<LocalizationContext>(localizationContext);
  const userContext = useContext<UserContext>(currentUserContext);

  const [screenType, setScreenType] = useState<AuthScreenType>(
    props.onboarding
      ? AuthScreenType.Onboarding
      : userContext.userData?.user === undefined
      ? AuthScreenType.Login
      : AuthScreenType.Register
  );

  const processUserSettings = (appSettingsJson: string | undefined): void => {
    try {
      const appSettings: IAppSettings = appSettingsJson ? JSON.parse(appSettingsJson) : undefined;
      if (appSettings?.language) {
        changeLanguage(appSettings.language);
      }
    } catch (e) {
      Sentry.captureException(e);
    }
  };

  const onAuthStateChanged = async (
    firebaseUser: FirebaseAuthTypes.User | null
  ): Promise<boolean> => {
    const token = await auth().currentUser?.getIdToken();

    if (firebaseUser && token) {
      userContext.setUserData({ user: firebaseUser, token });
    } else {
      return false;
    }

    const user: IUser | undefined = await ApiService.getUser();
    if (user) {
      analytics.logEvent(analytics.eventNames.SIGN_IN_SUCCESS);
      props.closeModal(true);
      processUserSettings(user.app_settings);
    } else {
      setScreenType(AuthScreenType.Register);
    }
    return true;
  };

  useEffect(() => {
    return auth().onAuthStateChanged(onAuthStateChanged);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onBackPress = (): void => {
    props.closeModal(false);
  };

  const onSignUpPress = (): void => {
    if (userContext.userData?.user === undefined) {
      setScreenType(AuthScreenType.Login);
    } else {
      setScreenType(AuthScreenType.Register);
    }
  };

  return (
    <KeyboardAvoidingView behavior={isIOS() ? 'padding' : 'height'} style={flex}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <AuthBackground>
          {screenType === AuthScreenType.Onboarding ? (
            <AuthOnboarding onBack={onBackPress} onSignUp={onSignUpPress} />
          ) : screenType === AuthScreenType.Login ? (
            <LoginView onBack={onBackPress} onConfirmedSuccess={onAuthStateChanged} />
          ) : (
            <RegisterComponent onBack={onBackPress} onSuccessful={() => props.closeModal(true)} />
          )}
        </AuthBackground>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default SignInScreens;
*/
