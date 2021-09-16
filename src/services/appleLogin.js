import * as AppleAuthentication from 'expo-apple-authentication';
import AsyncStorage from '@react-native-async-storage/async-storage';

async function signInWithApple() {
  try {
    const credential = await AppleAuthentication.signInAsync({
      requestedScopes: [
        AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
        AppleAuthentication.AppleAuthenticationScope.EMAIL
      ]
    });
    if(credential) {
      const userLogged = {
        id: String(credential.user),
        email: credential.email,
        name: credential.fullName.givenName,
        avatar: `https://ui-avatars.com/api/?name=${credential.fullName.givenName}&length=1`
      }
      userLogged.email && await AsyncStorage.setItem(`@uollet:${String(credential.user)}`, JSON.stringify(userLogged));
      return userLogged;
    }
  } catch(err) {
    throw new Error(err);
  }
}

export {
  signInWithApple
};