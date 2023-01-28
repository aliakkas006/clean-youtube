import { action, persist } from 'easy-peasy';

const favoriteModel = persist(
  {
    items: [],
    addToFavorite: action((state, playlistId) => {
      state.items.push(playlistId);
    }),
    deleteFromFavorites: action((state, playlistId) => {
      state.items = state.items.filter((pId) => playlistId !== pId);
    }),
  },
  {
    storage: 'localStorage',
  }
);

export default favoriteModel;
