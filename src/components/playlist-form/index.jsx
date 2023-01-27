import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';
import { useStoreActions, useStoreState } from 'easy-peasy';

const PlaylistForm = ({ open, handleClose }) => {
  const playlists = useStoreActions((actions) => actions.playlists);
  const { data } = useStoreState((state) => state.playlists);
  const [state, setState] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!state) return alert('Invalid State!');

    // URL link handle
    if (state.includes('https://www.youtube.com')) {
      const plalistId = state.split('=')[1];

      if (Object.keys(data).includes(plalistId))
        return alert(
          'This playlist is already exist! Please enter a new playlist url.'
        );

      playlists.getPlaylist(plalistId);
      setState('');
      handleClose();
      return;
    }

    // playlist ID handle
    if (Object.keys(data).includes(state))
      return alert(
        'This playlist is already exist! Please enter a new playlist ID.'
      );

    playlists.getPlaylist(state);
    setState('');
    handleClose();
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Add Playlist</DialogTitle>
      <DialogContent>
        <DialogContentText>
          To add a new playlist, please insert the valid playlist id or URL link.
          Otherwise we won't able to fetch the playlist information!
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          label="Plylist ID or URL Link"
          fullWidth
          variant="standard"
          onChange={(e) => setState(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleSubmit}>Add Playlist</Button>
      </DialogActions>
    </Dialog>
  );
};

export default PlaylistForm;
