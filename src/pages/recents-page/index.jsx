import { useStoreState } from 'easy-peasy';
import PageLayout from '../../components/page-layout';

const RecentsPage = () => {
  const playlists = useStoreState((state) => state.playlists.data);
  const recents = useStoreState((state) => state.recents.items);
  const recentPlaylists = recents.map((item) => playlists[item]);

  return (
    <PageLayout items={recentPlaylists} pageTitle={'My Recent Playlists'} />
  );
};

export default RecentsPage;
