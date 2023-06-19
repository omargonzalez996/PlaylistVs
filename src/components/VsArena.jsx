import { useEffect, useState } from "react"
import { RandomIndex } from "./Brackets";

export function VsArena({ setEnded, playlistURLS, setIsloading }) {
    const [izq, setIzq] = useState({})
    const [der, setDer] = useState({})
    //const [contenders, setContenders] = useState([])
    let leftIndex
    let rightIndex
    let contenders = []
    let losers = []
    let round = 0

    const control = () => {
        console.log(`round: ${round} | remaining: ${contenders.length}`);
    }

    useEffect(() => {
        //setContenders(playlistURLS)
        contenders = playlistURLS
        if (contenders.length >= 2 && round == 0) {
            sortVids()
        }
    }, [])

    const sortVids = () => {
        return new Promise((resolve, reject) => {
            try {
                setIsloading(true)
                if (contenders.length > 1) {
                    round++
                    leftIndex = RandomIndex(contenders)
                    rightIndex = RandomIndex(contenders)
                    setIzq(contenders[leftIndex])
                    setDer(contenders[rightIndex])
                    control()
                } else {
                    setEnded(true);
                    setIsloading(false)
                    console.log('ENDED');
                }
                setIsloading(false)
                resolve()
            } catch (error) {
                reject(console.log(error));
            }
        })

    }

    const RemoveLoser = (loserIndex) => {
        try {
            console.log('click: ', loserIndex);
            losers.push(loserIndex);
            contenders.splice(loserIndex, 1)
            //setContenders(prevContenders => { const updatedContenders = [...prevContenders]; updatedContenders.splice(index, 1);});
            sortVids()
                .then(() => {
                    console.log('state: ', contenders);
                    console.log('losers: ', losers);
                })
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <div className="arena-container">
                <div className="left-corner">
                    <div className="vid-title-container">
                        {izq.title ? <p className="vid-title">{`${izq.title}`}</p> : null}
                    </div>
                    <iframe
                        src={izq.videoUrl}>
                    </iframe>
                    <button onClick={() => RemoveLoser(rightIndex)}>{'THIS ONE'}</button>
                </div>
                <h3 className="middle-vs">VS</h3>
                <div className="right-corner">
                    <div className="vid-title-container">
                        {der.title ? <p className="vid-title">{`${der.title}`}</p> : null}
                    </div>
                    <iframe
                        src={der.videoUrl}>
                    </iframe>
                    <button onClick={() => RemoveLoser(leftIndex)}>{'THIS ONE'}</button>
                </div>
            </div>
        </>
    )

}
