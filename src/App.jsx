import { useState } from 'react'
import './styles/Index.scss'
import InputPlaylist from './components/InputPlaylist'
function App() {
  const [loadedPlaylist, setLoadedPlaylist] = useState(false)

  return (
    <>
      <div className='main-window'>
        <div className='logo-title'>
          <h1>PlaylistVS</h1>
          <p>v0.1</p>
        </div>
        {loadedPlaylist ? playlistCargada : <InputPlaylist setLoadedPlaylist={setLoadedPlaylist} />}
      </div>
    </>
  )
}

export default App
