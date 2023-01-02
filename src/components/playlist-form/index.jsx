import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';

const PlaylistForm = ({ open, handleClose, getPlaylistId }) => {
    const [state, setState] = useState('');

    const handleSubmit = () =>{
        //TODO: handle url later

        if(!state){
            alert('Invalid State!')
        } else{
            getPlaylistId(state)
            setState('')
            handleClose()
        }
    }

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Add Playlist</DialogTitle>
      <DialogContent>
        <DialogContentText>
          To add a new playlist, please insert the valid playlist id or
          link. Otherwise we won't able to fetch the playlist information.
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          label="Plylist ID or Link"
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
