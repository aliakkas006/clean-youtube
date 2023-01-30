import Typography from '@mui/material/Typography';
import { useStoreState } from 'easy-peasy';
import PageLayout from '../../components/page-layout';

const HomePage = () => {
  const { data, isLoading } = useStoreState((state) => state.playlists);

  const playlistArray = Object.values(data);

  return (
    <PageLayout items={playlistArray} pageTitle={'My Playlists'}>
      {isLoading && (
        <Typography
          variant="h3"
          align="center"
          color={'#FF0000'}
          sx={{ marginBottom: 3 }}
        >
          Please wait...
        </Typography>
      )}
    </PageLayout>
  );
};

export default HomePage;
