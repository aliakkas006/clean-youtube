import { createStore } from 'easy-peasy';
import favoriteModel from './favorite-model';
import playlistModel from './playlist-model';
import recentModel from './recent-model';

const store = createStore({
  playlists: playlistModel,
  favorites: favoriteModel,
  recents: recentModel,
});

export default store;
