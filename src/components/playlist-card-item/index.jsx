import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import PlayCircleOutline from '@mui/icons-material/PlayCircleOutline';
import Stack from '@mui/material/Stack';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';
import { useStoreActions, useStoreState } from 'easy-peasy';

const PlaylistCardItem = ({
  playlistId,
  playlistThumbnail,
  playlistTitle,
  channelTitle,
}) => {
  const { addToRecent } = useStoreActions((actions) => actions.recents);
  const { addToFavorite, deleteFromFavorites } = useStoreActions(
    (actions) => actions.favorites
  );
  const { deletePlaylist } = useStoreActions((actions) => actions.playlists);
  const favoriteItems = useStoreState((state) => state.favorites.items);
  const recentItems = useStoreState((state) => state.recents.items);

  const handleDelete = () => {
    if (confirm('Do you want to delete this playlist?')) {
      deletePlaylist(playlistId);

      let favIndex = favoriteItems.findIndex((item) => item === playlistId);
      favoriteItems = favoriteItems.splice(favIndex, 1);

      let recentIndex = recentItems.findIndex((item) => item === playlistId);
      recentItems = recentItems.splice(recentIndex, 1);
    }
  };

  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        margin: 1,
        // '&:hover': {
        //   borderColor: 'red',
        // },
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
        <Stack direction="row" spacing={10}>
          <Button to={`/player/${playlistId}`} component={Link} onClick={()=> addToRecent(playlistId)}>
            <Stack direction={'row'} spacing={1} alignItems={'center'}>
              <PlayCircleOutline />
              <Typography variant="body2">Start Tutorial</Typography>
            </Stack>
          </Button>

          <Stack direction="row" spacing={5}>
            {favoriteItems.includes(playlistId) && (
              <FavoriteIcon
                onClick={() => deleteFromFavorites(playlistId)}
                sx={{ color: '#FF0000', cursor: 'pointer' }}
              />
            )}
            {!favoriteItems.includes(playlistId) && (
              <FavoriteBorderIcon
                onClick={() => addToFavorite(playlistId)}
                sx={{ color: '#FF0000', cursor: 'pointer' }}
              />
            )}
            <DeleteIcon
              onClick={handleDelete}
              sx={{
                color: '#ff0000',
                cursor: 'pointer',
                // display: deleteBtnDisplay,
              }}
            />
          </Stack>
        </Stack>
      </CardActions>
    </Card>
  );
};

export default PlaylistCardItem;
