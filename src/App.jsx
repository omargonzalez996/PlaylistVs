import { useEffect, useState } from 'react'
import './styles/Index.scss'
import InputPlaylist from './components/InputPlaylist'
import { VsArena } from './components/VsArena'

function App() {
  const [loadedPlaylist, setLoadedPlaylist] = useState(false)
  const [playlistURLS, setplaylistURLS] = useState([]);

  useEffect(() => {
    typeof (playlistURLS)
    console.log(playlistURLS);
  }, [playlistURLS])

  return (
    <>
      <div className='main-window'>
        <div className='logo-title'>
          <h1>PlaylistVS</h1>
          <p>v0.1</p>
        </div>
        {loadedPlaylist ? <VsArena playlistURLS={playlistURLS} /> : <InputPlaylist setLoadedPlaylist={setLoadedPlaylist} setplaylistURLS={setplaylistURLS} />}
      </div>
    </>
  )
}

export default App
