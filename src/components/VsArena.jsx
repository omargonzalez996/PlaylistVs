import { useEffect, useState } from "react"
import { RandomIndex } from "./Brackets";

export function VsArena({ setEnded, playlistURLS, setIsloading }) {
    const [izq, setIzq] = useState()
    const [der, setDer] = useState()
    const [leftIndex, setLeftIndex] = useState(0);
    const [rightIndex, setRightIndex] = useState(0);
    //let leftIndex
    //let rightIndex
    let contenders = []
    let losers = []
    let round = 0

    const control = () => {
        console.log(`round: ${round} | remaining: ${contenders.length}`);
    }

    useEffect(() => {
        contenders = playlistURLS
        if (contenders.length >= 2 && round == 0) {
            sortVids()
            control()
            console.log('initial:', contenders);
        }
    }, [])

    const sortVids = () => {
        setIsloading(true)
        if (contenders.length > 1) {
            //leftIndex = RandomIndex(contenders)
            //rightIndex = RandomIndex(contenders)
            setLeftIndex(RandomIndex(contenders))
            setRightIndex(RandomIndex(contenders))
            setIzq(contenders[leftIndex])
            setDer(contenders[rightIndex])
            console.log('left: ', leftIndex);
            console.log('right: ', rightIndex);
            round++
        } else {
            setEnded(true);
        }
        setIsloading(false)
    }

    const RemoveLoser = (loserIndex) => {
        //console.log(`loser: ${loserIndex}`);
        //console.log('losers:', losers);
        //setplaylistURLS(prevURLS => prevURLS.filter((index) => index != loserIndex));
        losers.push(loserIndex);
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