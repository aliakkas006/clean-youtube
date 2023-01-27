import { NavLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

const activeClass = {
  color: '#FF0000',
  border: '2px solid ',
  borderRadius: 5,
  textDecoration: 'none',
  marginTop: 10,
};
const nonActiveClass = {
  backgroundColor: '#fff',
  color: '#0f0f0f',
  textDecoration: 'none',
  marginTop: 10,
};

const VideoLinkCard = ({
  channelTitle,
  title,
  thumbnail,
  playlistId,
  videoId,
}) => {
  return (
    <NavLink
      to={`/player/${playlistId}/${videoId}`}
      style={({ isActive }) => (isActive ? activeClass : nonActiveClass)}
    >
      <Card sx={{ '&:hover': { backgroundColor: '#b6b6b6' } }}>
        <Stack
          direction={{ sm: 'column', md: 'row' }}
          justifyContent="space-between"
          alignItems="center"
          spacing={{ sm: 1, md: 2 }}
        >
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <CardContent>
              <Typography
                component="div"
                variant="subtitle2"
                sx={{ fontWeight: 'bold' }}
              >
                {title}
              </Typography>
              <Typography
                component="div"
                variant="subtitle1"
                color="text.secondary"
              >
                {channelTitle}
              </Typography>
            </CardContent>
          </Box>
          <CardMedia
            component="img"
            sx={{
              width: thumbnail?.width,
              height: thumbnail?.height,
            }}
            image={thumbnail?.url}
            alt={title}
          />
        </Stack>
      </Card>
    </NavLink>
  );
};

export default VideoLinkCard;
