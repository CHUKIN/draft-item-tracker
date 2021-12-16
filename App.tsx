import React from 'react';

import { initializeApp } from 'firebase/app';
import { StyleSheet, View } from 'react-native';

import { AuthProvider } from './src/app/modules/core/contexts/Auth';
import Main from './src/main';

// Initialize Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyASe2T45mb6vgdVcxoBsyAovpM_gjaJR2g',
  authDomain: 'item-tracker-6d5ed.firebaseapp.com',
  projectId: 'item-tracker-6d5ed',
  storageBucket: 'item-tracker-6d5ed.appspot.com',
  messagingSenderId: '469258232017',
  appId: '1:469258232017:web:fb63e6c478c31e9599e5f0',
  measurementId: 'G-DLZXSB1HDX',
};

initializeApp(firebaseConfig);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default function App() {
  return (
    <View style={styles.container}>
      <AuthProvider>
        <Main />
      </AuthProvider>
    </View>
  );
}
