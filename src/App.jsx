import CssBaseline from '@mui/material/CssBaseline';
import Navbar from './components/navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/home-page';
import PlayerPage from './pages/player-page';
import NotFound from './pages/not-found-page';
import FavoritesPage from './pages/favorites-page';
import RecentsPage from './pages/recents-page';
import VideoPlayerPage from './pages/video-player-page';

const App = () => {
  return (
    <BrowserRouter>
      <CssBaseline />
      <Navbar />
      <Routes>
        <Route
          path="/player/:playlistId/:videoId"
          element={<VideoPlayerPage />}
        />
        <Route path="/player/:playlistId" element={<PlayerPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/recents" element={<RecentsPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
