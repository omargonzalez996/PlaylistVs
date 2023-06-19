import { useEffect, useState } from "react"
import { RandomIndex } from "./Brackets";
import { Icon } from '@iconify/react';

export function VsArena({ setEnded, playlistURLS }) {
    const [izq, setIzq] = useState({}) //left obj
    const [der, setDer] = useState({}) //right obj
    const [contenders, setContenders] = useState([]) //still in play
    const [losers, setLosers] = useState([]) //eliminated
    const [leftIndex, setLeftIndex] = useState(null) //left index
    const [rightIndex, setRightIndex] = useState(null) //right index
    const [round, setRound] = useState(0) //iteration number
    const [isLoading, setIsLoading] = useState(false)

    const control = () => {
        console.log(`round: ${round} | remaining: ${contenders.length}`);
    }

    useEffect(() => {
        setContenders(playlistURLS)
        if (contenders.length >= 2) {
            sortVids()
        }
    }, [])

    useEffect(() => {
        console.log('state: ', contenders);
        console.log('losers: ', losers);
    }, [contenders])

    useEffect(() => {
        setIzq(contenders[leftIndex])
    }, [leftIndex])

    useEffect(() => {
        setDer(contenders[rightIndex])
    }, [rightIndex])

    const sortVids = () => {
        return new Promise((resolve, reject) => {
            try {
                setIsLoading(true)
                if (contenders.length > 1) {
                    setRound(prevCount => prevCount + 1)
                    setLeftIndex(RandomIndex(contenders))
                    setRightIndex(RandomIndex(contenders))
                    control()
                } else {
                    setEnded(true);
                    console.log('ENDED');
                }
                setIsLoading(false)
                resolve()
            } catch (error) {
                setIsLoading(false)
                reject(console.log(error));
            }
        })

    }

    const RemoveLoser = (index) => {
        try {
            setLosers(prevLosers => {
                const updatedLosers = [...prevLosers];
                updatedLosers.push(index);
            })
            setContenders(prevContenders => {
                const updatedContenders = [...prevContenders];
                updatedContenders.splice(index, 1);
            });
            sortVids()
                .then((res) => {
                    console.log(res);
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
                {isLoading ? <Icon icon="eos-icons:loading" />
                    : (
                        <>
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
                        </>
                    )
                }

            </div>
        </>
    )

}
