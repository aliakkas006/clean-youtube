import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import YouTube from 'react-youtube';
import { useStoreState } from 'easy-peasy';
import { useParams } from 'react-router-dom';
import NotFound from '../not-found-page';
import VideoLinkCard from '../../components/video-link-card';

const VideoPlayerPage = () => {
  const { playlistId, videoId } = useParams();
  const playlists = useStoreState((state) => state.playlists.data);
  const currentPlaylist = playlists[playlistId];

  if (!currentPlaylist) return <NotFound />;

  const { playlistItems, channelId, channelTitle } = currentPlaylist;

  const video = playlistItems.filter(
    (item) => item.contentDetails.videoId === videoId
  )[0];

  if (!video) return <NotFound />;

  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <Container>
      <Box
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        <YouTube
          //   style={{
          //     display: 'flex',
          //     alignItems: 'center',
          //     justifyContent: 'center',
          //     backgroundColor: '#b6b6b6',
          //   }}
          videoId={videoId}
          opts={opts}
          onReady={(e) => e.target.pauseVideo()}
        />
      </Box>

      <Card sx={{ marginTop: 2, padding: 2, border: '1px #0F0F0F solid' }}>
        <Button
          variant="outlined"
          href={`https://www.youtube.com/channel/${channelId}`}
          target={'_blank'}
        >
          {channelTitle}
        </Button>
        <Typography variant="h6" sx={{ marginBottom: 2 }}>
          {video.title}
        </Typography>
        <Typography variant="subtitle2">{video.description}</Typography>
      </Card>

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

export default VideoPlayerPage;
