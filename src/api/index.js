import axios from 'axios';

const key = 'AIzaSyBWnanuOxJkGcc6sA9ApWM_bkCSASSnzg0';

const getPlaylist = async (playlistId, pageToken = '', result = []) => {
  const URL = `https://www.googleapis.com/youtube/v3/playlistItems?key=${key}&part=id,contentDetails,snippet&maxResults=50&playlistId=${playlistId}&pageToken=${pageToken}`;

  const { data } = await axios.get(URL);
  result = [...result, ...data.items];

  if (data.nextPageToken) {
    result = getPlaylist(playlistId, data.nextPageToken, result);
  }

  return result;
};

export default getPlaylist;
