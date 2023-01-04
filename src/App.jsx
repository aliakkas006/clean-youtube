import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import CssBaseline from '@mui/material/CssBaseline';
import Navbar from './components/navbar';
import PlaylistCardItem from './components/playlist-card-item';
import usePlaylists from './hooks/usePlaylists';
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom';
import { Typography } from '@mui/material';

const HomePage = ({ playlistArray }) => {
  return (
    <Container maxWidth={'lg'} sx={{ my: 16 }}>
      {playlistArray.length > 0 && (
        <Grid container alignItems="stretch">
          {playlistArray.map((item) => (
            <Grid item xs={12} md={6} lg={4} mb={2}>
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

const NotFound = () => (
  <Container maxWidth={'lg'} sx={{ my: 16 }}>
    <Typography variant="h4" align="center">
      404 Page Not Found!
    </Typography>
  </Container>
);

const PlayerPage = ({ playlists }) => {
  const { playlistId } = useParams();
  const current = playlists[playlistId];

  return (
    <Container maxWidth={'lg'} sx={{ my: 16 }}>
      <Typography variant="h4" align="center">
        {current.playlistTitle}
      </Typography>
    </Container>
  );
};

const App = () => {
  const { playlists, getPlaylistById } = usePlaylists();

  const playlistArray = Object.values(playlists);

  return (
    <BrowserRouter>
      <CssBaseline />
      <Navbar getPlaylistById={getPlaylistById} />
      <Routes>
        <Route path="/" element={<HomePage playlistArray={playlistArray} />} />
        <Route
          path="/player/:playlistId"
          element={<PlayerPage playlists={playlists} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
