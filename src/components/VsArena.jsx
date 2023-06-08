import { useEffect, useState } from "react"
import { RandomIndex } from "./Brackets";

export function VsArena({ notify, playlistURLS, setplaylistURLS, setIsloading }) {
    const [izq, setIzq] = useState("")
    const [der, setDer] = useState("")
    const [leftIndex, SetLeftIndex] = useState(0);
    const [rightIndex, SetRightIndex] = useState(0);

    let losers = []
    let sortCount = 1

    useEffect(() => {
        if (playlistURLS.length >= 2) {
            sortVids()
        }
    }, [])

    useEffect(() => {
        setIzq(playlistURLS[leftIndex])
        console.log(`lI: ${leftIndex}`);
    }, [leftIndex])

    useEffect(() => {
        setDer(playlistURLS[rightIndex])
        console.log(`rI: ${rightIndex}`);
    }, [rightIndex])

    const sortVids = () => {
        if (condition) {
            
        }
        setIsloading(true)
        console.log('sort#: ' + sortCount);
        SetLeftIndex(RandomIndex(playlistURLS))
        SetRightIndex(RandomIndex(playlistURLS))
        sortCount++
        setIsloading(false)
    }

    const RemoveLoser = (loserIndex) => {
        losers.push(loserIndex);
        setplaylistURLS(prevURLS => prevURLS.filter((element, index) => index !== loserIndex));
        sortVids()
    }

    return (
        <>
            <div className="arena-container">
                <div className="left-corner">
                    <iframe
                        src={izq}>
                    </iframe>
                    <button onClick={() => RemoveLoser(rightIndex)}>{`THIS ONE: ${leftIndex}`}</button>
                </div>
                <h3 className="middle-vs">VS</h3>
                <div className="right-corner">
                    <iframe
                        src={der}>
                    </iframe>
                    <button onClick={() => RemoveLoser(leftIndex)}>{`THIS ONE: ${rightIndex}`}</button>
                </div>
            </div>
        </>
    )

}