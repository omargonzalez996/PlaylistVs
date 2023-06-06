import { useEffect, useState } from "react"

export function VsArena({ playlistURLS }) {
    const [izq, setIzq] = useState("")
    const [der, setDer] = useState("")

    const getRandomIndex = () => {
        var max = playlistURLS.length - 1;
        var randomNumInRange = Math.floor(Math.random() * (max - 0 + 1)) + 0;
        return randomNumInRange
    }

    useEffect(() => {
        if (playlistURLS.length >= 2) {
            setIzq(playlistURLS[getRandomIndex()])
            setDer(playlistURLS[getRandomIndex()])
        }
    }, [])

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