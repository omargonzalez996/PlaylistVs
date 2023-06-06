export function VsArena({ playlistURLS }) {

    let izq = "https://www.youtube.com/embed/MbqSMgMAzxU"
    let der = "https://www.youtube.com/embed/MbqSMgMAzxU"

    return (
        <>
            <div className="arena-container">
                <div className="left-corner">
                    <iframe width="420" height="315"
                        src={izq}>
                    </iframe>
                    <button>THIS ONE</button>
                </div>
                <div className="right-corner">
                    <iframe width="420" height="315"
                        src={der}>
                    </iframe>
                    <button>THIS ONE</button>
                </div>
            </div>
        </>
    )

}