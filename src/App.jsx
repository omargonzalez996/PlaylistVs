import { useEffect, useState } from 'react'
import './styles/Index.scss'
import InputPlaylist from './components/InputPlaylist'
import { VsArena } from './components/VsArena'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [loadedPlaylist, setLoadedPlaylist] = useState(false)
  const [playlistURLS, setplaylistURLS] = useState([]);

  const notify = (msg) => toast(`${msg}`);

  const onClose = () => {
    notify("Reiniciando...")
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
        {loadedPlaylist ? <VsArena
          notify={notify}
          playlistURLS={playlistURLS}
          setplaylistURLS={setplaylistURLS} />
          : <InputPlaylist
            notify={notify}
            setLoadedPlaylist={setLoadedPlaylist}
            setplaylistURLS={setplaylistURLS} />}
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
