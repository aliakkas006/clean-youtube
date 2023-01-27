import { action, persist } from 'easy-peasy';

const recentModel = persist(
  {
    items: [],
    addToRecent: action((state, playlistId) => {
      if (!state.items.includes(playlistId)) {
        state.items.unshift(playlistId);
        state.items.slice(0, 5);
      }
    }),
  },
  {
    storage: 'localStorage',
  }
);

export default recentModel;
