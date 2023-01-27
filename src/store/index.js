import { createStore, useLocalStore } from 'easy-peasy';
import storage from '../utils/Storage';
import favoriteModel from './favorite-model';
import playlistModel from './playlist-model';
import recentModel from './recent-model';

const store = createStore({
  playlists: playlistModel,
  favorites: favoriteModel,
  recents: recentModel,
});

export default store;
