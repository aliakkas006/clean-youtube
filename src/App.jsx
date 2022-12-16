import { useEffect } from "react";
import usePlaylists from "./hooks/usePlaylists";

const App = () => {
  const {getPlaylistId, playlists} = usePlaylists()

  useEffect(()=>{
    getPlaylistId('PL_XxuZqN0xVDr08QgQHljCecWtA4jBLnS')
  }, [])

  console.log('Playlists', playlists);

  return (
    <div>
      <h1>Clean YouTune Project</h1>
    </div>
  );
};

export default App;
