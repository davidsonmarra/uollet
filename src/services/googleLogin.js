import firebase from '../config/firebase';
import * as Google from 'expo-google-app-auth';

const onSignIn = (googleUser) => {
  console.log('Google Auth Response', googleUser);
  // We need to register an Observer on Firebase Auth to make sure auth is initialized.
  var unsubscribe = firebase.auth().onAuthStateChanged((firebaseUser) => {
    unsubscribe();
    // Check if we are already signed-in Firebase with the correct user.
    if (!isUserEqual(googleUser, firebaseUser)) {
      // Build Firebase credential with the Google ID token.
      var credential = firebase.auth.GoogleAuthProvider.credential(
          googleUser.idToken,
          googleUser.accessToken
      );

      // Sign in with credential from the Google user.
      firebase.auth()
      .signInWithCredential(credential).then(function() {
        console.log('usuario entrou')
      })
      .catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
    } else {
      console.log('User already signed-in Firebase.');
    }
  }
  )
}

const isUserEqual = (googleUser, firebaseUser) => {
  console.log("TESTE: ", googleUser)
  if (firebaseUser) {
    var providerData = firebaseUser.providerData;
    for (var i = 0; i < providerData.length; i++) {
      if (providerData[i].providerId === firebase.auth.GoogleAuthProvider.PROVIDER_ID &&
          providerData[i].uid === googleUser.user.id) {
        // We don't need to reauth the Firebase connection.
        return true;
      }
    }
  }
  return false;
}


const signInWithGoogleAsync = async () => {
  try {
    const result = await Google.logInAsync({
      // behavior: 'web',
      androidClientId: '413545501528-3sjnd0til6qc56qesaujg9di66knun2b.apps.googleusercontent.com',
      iosClientId: '413545501528-6u4gvptltq93p6vaqihuqkvj823kdi8g.apps.googleusercontent.com',
      scopes: ['profile', 'email'],
    });

    if (result.type === 'success') {
      onSignIn(result);
      return result;
    } else {
      return { cancelled: true };
    }
  } catch (e) {
    return { error: true };
  }
}

export {
  signInWithGoogleAsync,
};