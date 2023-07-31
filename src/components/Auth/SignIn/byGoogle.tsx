/* eslint-disable no-console */
import React from 'react';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { Button, View } from 'react-native';
import auth from '@react-native-firebase/auth';

const ByGoogleScreen = () => {
  return (
    <View>
      <Button
        title={'Sign in with Google'}
        onPress={() => {
          GoogleSignin.configure({
            webClientId: '866659493726-f9349hidhrbqumnopo8cgetaujr46anj.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
            offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
            forceCodeForRefreshToken: true // [Android] related to `serverAuthCode`, read the docs link below *.
          });

          GoogleSignin.hasPlayServices()
            .then(hasPlayService => {
              if (hasPlayService) {
                GoogleSignin.signIn()
                  .then(userInfo => {
                    console.log(JSON.stringify(userInfo));
                    const googleCredential = auth.GoogleAuthProvider.credential(userInfo.idToken);
                    const val = auth().signInWithCredential(googleCredential);
                    console.log(JSON.stringify(val));
                  })
                  .catch(e => {
                    console.log('ERROR IS: ' + JSON.stringify(e));
                  });
              }
            })
            .catch(e => {
              console.log('ERROR IS: ' + JSON.stringify(e));
            });
        }}
      />
    </View>
  );
};

export default ByGoogleScreen;
