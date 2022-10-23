import {Episode} from './podcast';

export type RootStackParamList = {
  Home: undefined;
  Episode: {episode: Episode};
};
