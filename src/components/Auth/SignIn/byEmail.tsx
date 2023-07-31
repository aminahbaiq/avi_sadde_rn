import React from 'react';
import { Button, Text, View } from 'react-native';
//import auth from '@react-native-firebase/auth';

const byEmailScreen = () => {
  const onCreateByEmailClickHandler = async () => {
    try {
    } catch (e) {}
  };

  return (
    <View>
      <Text>CREATE BY EMAIL SCREEN</Text>
      <Button
        color="#8811ff"
        title={'CREATE BY e-mail'}
        onPress={() => {
          onCreateByEmailClickHandler();
        }}
      />
    </View>
  );
};

export default byEmailScreen;

// Configure Firebase.
/*const config = {
  apiKey: 'AIzaSyBwdr8Z7OHRS7I4MZYScUlztGaHM7noOe4',
  authDomain: 'porlatero-1ec80.firebaseapp.com',
  projectId: 'porlatero-1ec80',
  storageBucket: 'porlatero-1ec80.appspot.com',
  messagingSenderId: '866659493726',
  appId: '1:866659493726:web:b17a2685b5ee8e607e91cf',
  measurementId: 'G-C1WHSHZSDW'
};

firebase.initializeApp(config);

// Configure FirebaseUI.
const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: 'popup',
  // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  signInSuccessUrl: '/signedIn',
  // We will display Google and Facebook as auth providers.
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID
  ]
};

function SignInScreen() {
  return (
    <div>
      <h1>My App</h1>
      <p>Please sign-in:</p>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
    </div>
  );
}

export default SignInScreen;
*/
