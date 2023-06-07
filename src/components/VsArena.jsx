import { useEffect, useState } from "react"

export function VsArena({ notify, playlistURLS }) {
    const [izq, setIzq] = useState("")
    const [der, setDer] = useState("")
    const [leftIndex, SetLeftIndex] = useState(0);
    const [rightIndex, SetRightIndex] = useState(0);
    let losers = []
    let contenders = []

    const getRandomIndex = () => {
        var max = contenders.length - 1;
        var randomNumInRange = Math.floor(Math.random() * (max - 0 + 1)) + 0;
        return randomNumInRange
    }

    const sort = () => {
        SetLeftIndex(getRandomIndex())
        SetRightIndex(getRandomIndex())
    }

    useEffect(() => {
        setIzq(playlistURLS[leftIndex])
        console.log(`lI: ${leftIndex}`);
        setDer(playlistURLS[rightIndex])
        console.log(`rI: ${rightIndex}`);
    }, [leftIndex, rightIndex])

    useEffect(() => {
        contenders = playlistURLS
        if (contenders.length >= 2) {
            sort()
        }
    }, [])

    const leftWins = (winnerIndex) => {
        console.log(winnerIndex);
        losers.push(rightIndex);
        contenders.splice(rightIndex, 1);
        sort()
    }

    const rightWins = (winnerIndex) => {
        console.log(winnerIndex);
        losers.push(leftIndex);
        sort()
    }

    return (
        <>
            <div className="arena-container">
                <div className="left-corner">
                    <iframe
                        src={izq}>
                    </iframe>
                    <button onClick={() => leftWins(leftIndex)}>THIS ONE</button>
                </div>
                <h3 className="middle-vs">VS</h3>
                <div className="right-corner">
                    <iframe
                        src={der}>
                    </iframe>
                    <button onClick={() => rightWins(rightIndex)}>THIS ONE</button>
                </div>
            </div>
        </>
    )

}