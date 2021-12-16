import React from 'react';

import { View, Text, Button } from 'react-native';

import { useAuth } from './app/modules/core/contexts/Auth';

export default function Main(): any {
  const { signOutUser } = useAuth();
  return (
    <View>
      <Text>Main 12</Text>
      <Button
        title="LogOut"
        onPress={() => {
          signOutUser();
        }}
      />
    </View>
  );
}
