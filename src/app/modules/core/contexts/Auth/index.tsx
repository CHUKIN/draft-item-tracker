import React, { Context, createContext, useContext } from 'react';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { logInAsync, LogInResult, logOutAsync } from 'expo-google-app-auth';

import { AuthContextType } from './model';

// const CLIENT_ID = googleServiceConfig.client[0].oauth_client[0].client_id;

// Context
const AuthContext: Context<AuthContextType> = createContext<AuthContextType>({} as AuthContextType);

// Provider
export function AuthProvider({ children }: any) {
  const signOutUser = () => {};
  return (
    <AuthContext.Provider
      value={{
        signOutUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
