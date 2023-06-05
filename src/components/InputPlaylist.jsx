import { useEffect, useState } from "react"

function InputPlaylist({ setLoadedPlaylist }) {
    var regex = /^.*(youtu.be\/|list=)([^#\&\?]*).*/;
    const [playlist, setPlaylist] = useState("")
    const [validPl, setValidPl] = useState(0)
    const [buttonActive, setButtonActive] = useState(false);

    const updatePl = (pl) => {
        setPlaylist(pl)
        console.log(pl);
    }

    useEffect(() => {
        if (playlist.length == 0) {
            setValidPl(0) //empty playlist input field
        } else {
            if (regex.test(playlist)) {
                setValidPl(1) //valid playlist url
                setButtonActive(true)
            } else {
                setValidPl(2) //invalid playlist url
                setButtonActive(false)
            }
        }
    }, [playlist])

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
                            onClick={() => setLoadedPlaylist(true)}
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