import { useEffect, useState } from "react"
import { RandomIndex } from "./Brackets";

export function VsArena({ notify, playlistURLS, setIsloading }) {
    const [izq, setIzq] = useState("")
    const [der, setDer] = useState("")
    const [leftIndex, SetLeftIndex] = useState(0);
    const [rightIndex, SetRightIndex] = useState(0);

    let losers = []
    let contenders = []
    let sortCount = 1

    useEffect(() => {
        contenders = playlistURLS
        if (contenders.length >= 2) {
            sortVids()
        }
    }, [])

    useEffect(() => {
        setIzq(contenders[leftIndex])
        console.log(`lI: ${leftIndex}`);
    }, [leftIndex])

    useEffect(() => {
        setDer(contenders[rightIndex])
        console.log(`rI: ${rightIndex}`);
    }, [rightIndex])

    const sortVids = () => {
        setIsloading(true)
        console.log('sort#: ' + sortCount);
        SetLeftIndex(RandomIndex(contenders))
        SetRightIndex(RandomIndex(contenders))
        sortCount++
        setIsloading(false)
    }

    const leftWins = (winnerIndex) => {
        console.log('winner: ' + winnerIndex);
        losers.push(rightIndex);
        contenders.splice(rightIndex, 1);
        sortVids()
    }

    const rightWins = (winnerIndex) => {
        console.log('loser: ' + winnerIndex);
        losers.push(leftIndex);
        sortVids()
    }

    return (
        <>
            <div className="arena-container">
                <div className="left-corner">
                    <iframe
                        src={izq}>
                    </iframe>
                    <button onClick={() => leftWins(leftIndex)}>{`THIS ONE: ${leftIndex}`}</button>
                </div>
                <h3 className="middle-vs">VS</h3>
                <div className="right-corner">
                    <iframe
                        src={der}>
                    </iframe>
                    <button onClick={() => rightWins(rightIndex)}>{`THIS ONE: ${leftIndex}`}</button>
                </div>
            </div>
        </>
    )

}