import { Nullable } from '../../models/main.model';

export type AuthContextType = {
  signOutUser: Function;
};

export type CurrentAppUser = {
  email: Nullable<string>;
  displayName: Nullable<string>;
  accessToken: string;
};
