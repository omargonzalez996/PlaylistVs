import { useEffect, useState } from 'react'
import './styles/Index.scss'
import InputPlaylist from './components/InputPlaylist'
import { VsArena } from './components/VsArena'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Icon } from '@iconify/react';
import Modal from './components/Modal';

function App() {
  const [loadedPlaylist, setLoadedPlaylist] = useState(false)
  const [playlistURLS, setplaylistURLS] = useState([]);
  const [isLoading, setIsloading] = useState(false);
  const [ended, setEnded] = useState(false);

  const notify = (msg) => toast(`${msg}`);

  useEffect(() => {
    typeof (playlistURLS)
    console.log(playlistURLS);
  }, [playlistURLS])

  const onClose = () => {
    notify("Reiniciando...")
    setEnded(false)
    setLoadedPlaylist(false)
    setplaylistURLS([])
  }

  return (
    <>
      <div className='main-window'>
        <div className='logo-title'>
          <h1>PlaylistVS</h1>
          <p>v0.1</p>
        </div>
        {isLoading ? <Icon icon="line-md:loading-twotone-loop" />
          : loadedPlaylist ? <VsArena setEnded={setEnded} notify={notify} playlistURLS={playlistURLS} setplaylistURLS={setplaylistURLS} setIsloading={setIsloading} />
            : <InputPlaylist notify={notify} setLoadedPlaylist={setLoadedPlaylist} setplaylistURLS={setplaylistURLS} setIsloading={setIsloading} />}
      </div>
      {ended ? <Modal onClose={onClose} /> : null}
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
