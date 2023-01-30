import { useStoreState } from 'easy-peasy';
import PageLayout from '../../components/page-layout';

const FavoritesPage = () => {
  const playlists = useStoreState((state) => state.playlists.data);
  const favorites = useStoreState((state) => state.favorites.items);
  const favoritePlaylists = favorites.map((item) => playlists[item]);

  return (
    <PageLayout items={favoritePlaylists} pageTitle={'My Favorite Playlists'} />
  );
};

export default FavoritesPage;
