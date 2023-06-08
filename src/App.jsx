import { useEffect, useState } from 'react'
import './styles/Index.scss'
import InputPlaylist from './components/InputPlaylist'
import { VsArena } from './components/VsArena'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Icon } from '@iconify/react';

function App() {
  const [loadedPlaylist, setLoadedPlaylist] = useState(false)
  const [playlistURLS, setplaylistURLS] = useState([]);
  const [isLoading, setIsloading] = useState(false);

  const notify = (msg) => toast(`${msg}`);

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
        {isLoading ? <Icon icon="line-md:loading-twotone-loop" />
          : loadedPlaylist ? <VsArena notify={notify} playlistURLS={playlistURLS} setplaylistURLS={setplaylistURLS} setIsloading={setIsloading} />
            : <InputPlaylist notify={notify} setLoadedPlaylist={setLoadedPlaylist} setplaylistURLS={setplaylistURLS} setIsloading={setIsloading} />}
      </div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable={false}
        pauseOnHover
        theme="light" />
    </>
  )
}

export default App
