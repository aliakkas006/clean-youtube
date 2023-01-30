import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useState } from 'react';
import PlaylistForm from '../playlist-form';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@mui/material/Link';
import { MenuItem } from '@mui/material';
import routesPath from '../../constants/index';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ flexGrow: 1, marginBottom: 16 }}>
      <AppBar position="fixed" color="default" sx={{ py: 2 }}>
        <Container maxWidth={'lg'}>
          <Toolbar>
            <Stack sx={{ flexGrow: 1 }}>
              <Link component={RouterLink} to="/" underline="none">
                <Typography variant="h4">Clean Youtube</Typography>
              </Link>

              <Link
                href="https://www.linkedin.com/in/ali-akkas/"
                target={'_blank'}
                underline="none"
              >
                <Typography variant="subtitle2">
                  <small>By</small> Ali Akkas©
                </Typography>
              </Link>
            </Stack>

            <Box sx={{ display: 'flex', marginRight: '200px' }}>
              {routesPath.map((route, index) => (
                <Link
                  key={index}
                  component={RouterLink}
                  to={route.path}
                  underline="none"
                >
                  <MenuItem> {route.name} </MenuItem>
                </Link>
              ))}
            </Box>

            <Button variant="contained" onClick={handleClickOpen}>
              Add Playlist
            </Button>

            <PlaylistForm open={open} handleClose={handleClose} />
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};

export default Navbar;
