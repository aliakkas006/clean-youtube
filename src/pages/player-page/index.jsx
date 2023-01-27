import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useParams } from 'react-router-dom';
import { useStoreState } from 'easy-peasy';
import NotFound from '../not-found-page';
import VideoLinkCard from '../../components/video-link-card';

const PlayerPage = () => {
  const { playlistId } = useParams();
  const playlists = useStoreState((state) => state.playlists.data);

  const current = playlists[playlistId];
  if (!current) return <NotFound />;
  const { playlistItems, playlistTitle, playlistDescription, channelTitle } =
    current;

  return (
    <Container maxWidth={'lg'} sx={{ my: 16 }}>
      <Typography variant="h4" align="center">
        {playlistTitle}
      </Typography>
      <Typography variant="subtitle2"> {playlistDescription} </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        {playlistItems.map((item) => (
          <VideoLinkCard
            key={item.contentDetails.videoId}
            channelTitle={channelTitle}
            title={item.title}
            thumbnail={item.thumbnail}
            playlistId={playlistId}
            videoId={item.contentDetails.videoId}
          />
        ))}
      </Box>
    </Container>
  );
};

export default PlayerPage;
