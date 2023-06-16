import { useEffect, useState } from "react"
import { RandomIndex } from "./Brackets";

export function VsArena({ setEnded, playlistURLS, setIsloading }) {
    const [izq, setIzq] = useState()
    const [der, setDer] = useState()
    const [leftIndex, setLeftIndex] = useState(0);
    //let leftIndex
    const [rightIndex, setRightIndex] = useState(0);
    //let rightIndex
    let contenders = []
    let losers = []
    let round = 0

    const control = () => {
        console.log(`round: ${round} | remaining: ${contenders.length}`);
    }

    useEffect(() => {
        contenders = playlistURLS
        if (contenders.length >= 2) {
            sortVids()
            control()
            console.log('initial:', contenders);
        }
    }, [])

    const sortVids = () => {
        setIsloading(true)
        if (contenders.length > 1) {
            setLeftIndex(RandomIndex(contenders))
            //leftIndex = RandomIndex(contenders)
            console.log('left: ', leftIndex);
            setIzq(contenders[leftIndex])
            setRightIndex(RandomIndex(contenders))
            //rightIndex = RandomIndex(contenders)
            console.log('right: ', rightIndex);
            setDer(contenders[rightIndex])
            round++
        } else {
            setEnded(true);
        }
        setIsloading(false)
    }

    const RemoveLoser = (loserIndex) => {
        //console.log(`loser: ${loserIndex}`);
        losers.push(loserIndex);
        //console.log('losers:', losers);
        //setplaylistURLS(prevURLS => prevURLS.filter((index) => index != loserIndex));
        contenders.splice(loserIndex, 1)
        sortVids()
        control()
    }

    return (
        <>
            <div className="arena-container">
                <div className="left-corner">
                    <iframe
                        src={izq}>
                    </iframe>
                    <button onClick={() => RemoveLoser(rightIndex)}>{'THIS ONE'}</button>
                </div>
                <h3 className="middle-vs">VS</h3>
                <div className="right-corner">
                    <iframe
                        src={der}>
                    </iframe>
                    <button onClick={() => RemoveLoser(leftIndex)}>{'THIS ONE'}</button>
                </div>
            </div>
        </>
    )

}