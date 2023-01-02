import { useState } from 'react';
import getPlaylist from '../api';

const usePlaylists = () => {
  const [state, setState] = useState({
    playlists: {},
    recentPlaylists: [],
    favourites: [],
  });

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const getPlaylistById = async (playlistId, force = false) => {
    if (state.playlists[playlistId] && !force) return;

    setLoading(true);

    try {
      const playlist = await getPlaylist(playlistId);
      setError('');

      setState((prev) => ({
        ...prev,
        playlists: {
          ...prev.playlists,
          [playlistId]: playlist,
        },
      }));
    } catch (e) {
      setError(e?.response?.data?.error?.message || 'Something went wrong!');
    } finally {
      setLoading(false);
    }
  };

  const addToFavourites = (playlistId) => {
    setState((prev) => ({
      ...prev,
      favourites: [...prev, playlistId],
    }));
  };

  const addToRecent = (playlistId) => {
    setState((prev) => ({
      ...prev,
      recentPlaylists: [...prev, playlistId],
    }));
  };

  const getPlaylistsByIds = (ids = []) => {
    return ids.map((id) => state.playlists[id]);
  };

  return {
    playlists: state.playlists,
    favourites: getPlaylistsByIds(state.favourites),
    recentPlaylists: getPlaylistsByIds(state.recentPlaylists),
    error,
    loading,
    getPlaylistById,
    addToRecent,
    addToFavourites,
  };
};

export default usePlaylists;
