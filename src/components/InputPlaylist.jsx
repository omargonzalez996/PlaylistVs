import { useEffect, useState } from "react"
import { getPlayListID, getPlaylistUrls } from "../connection/Scrap";

function InputPlaylist({ setLoadedPlaylist, setplaylistURLS }) {
    var regex = /^.*(youtu.be\/|list=)([^#\&\?]*).*/;
    const [playlist, setPlaylist] = useState("")
    const [validPl, setValidPl] = useState(0)
    const [buttonActive, setButtonActive] = useState(false);

    let testUrl = 'https://www.youtube.com/playlist?list=PLprujdq-InUvvP5HvT911lvNQiYl9RGhV'

    const updatePl = (pl) => {
        setPlaylist(pl)
        console.log(pl);
    }

    useEffect(() => {
        if (playlist.length == 0) {
            setValidPl(0) // empty playlist input field
        } else {
            if (regex.test(playlist)) {
                setValidPl(1) // valid playlist url
                setButtonActive(true)
            } else {
                setValidPl(2) // invalid playlist url
                setButtonActive(false)
            }
        }
    }, [playlist])

    const loadPlaylist = async () => {
        try {
            setButtonActive(false) // desactivar boton para evitar peticiones multiples
            let playlistID = await getPlayListID(playlist) //sacar el id de la url
            console.log('PL_ID: ', playlistID);
            let urls = await getPlaylistUrls(playlistID) // obtener el array de urls de videos de la playlist
            setplaylistURLS(urls)
            setLoadedPlaylist(true) //cambia el estado de control en App para indicar que hay una lista de videos cargada
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <div className="playlist-input-container">
                <input
                    className={
                        validPl == 0 ? null
                            : validPl == 1 ? "correct"
                                : validPl == 2 ? "incorrect" : null
                    }
                    placeholder="playlist URL"
                    onChange={(e) => updatePl(e.target.value)}
                    name="playlist-input"
                    type="text"

                />
                <div className="under-input">
                    <div className="left">
                        <button
                            disabled={!buttonActive}
                            onClick={() => loadPlaylist()}
                        >Load Playlist</button>
                    </div>
                    <div className="right">
                        <p className="input-info">{
                            validPl == 0 ? null
                                : validPl == 2 ? "Invalid URL" : null}</p>
                    </div>
                </div>

            </div>
        </>
    )
}

export default InputPlaylist