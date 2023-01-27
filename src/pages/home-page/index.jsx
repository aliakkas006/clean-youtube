import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { useStoreState } from 'easy-peasy';
import PlaylistCardItem from '../../components/playlist-card-item';

const HomePage = () => {
  const { data } = useStoreState((state) => state.playlists);

  const playlistArray = Object.values(data);

  return (
    <Container maxWidth={'lg'} sx={{ my: 16 }}>
      {playlistArray.length > 0 && (
        <Grid container alignItems="stretch">
          {playlistArray.map((item) => (
            <Grid key={item.playlistId} item xs={12} md={6} lg={4} mb={2}>
              <PlaylistCardItem
                key={item.playlistId}
                playlistId={item.playlistId}
                playlistThumbnail={item.playlistThumbnail}
                playlistTitle={item.playlistTitle}
                channelTitle={item.channelTitle}
              />
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default HomePage;
