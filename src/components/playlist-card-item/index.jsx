import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import PlayCircleOutline from '@mui/icons-material/PlayCircleOutline';
import { Stack } from '@mui/system';

const PlaylistCardItem = ({
  playlistThumbnail,
  playlistTitle,
  channelTitle,
}) => {
  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        margin: 1,
      }}
    >
      <CardMedia
        component="img"
        image={playlistThumbnail.url}
        alt={playlistTitle}
      />

      <CardContent>
        <Typography variant="h6" color="text.primary">
          {`${
            playlistTitle.length > 50
              ? playlistTitle.substr(0, 50) + '...'
              : playlistTitle
          }`}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {channelTitle}
        </Typography>
      </CardContent>

      <Box sx={{ flexGrow: 1 }} />

      <CardActions disableSpacing>
        <Button>
          <Stack direction={'row'} spacing={1} alignItems={'center'}>
            <PlayCircleOutline />
            <Typography variant="body2">Start Tutorial</Typography>
          </Stack>
        </Button>
      </CardActions>
    </Card>
  );
};

export default PlaylistCardItem;
