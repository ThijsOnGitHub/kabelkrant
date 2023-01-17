import {useEffect, useState} from "react";

export function useTimePercentage(seconds: number): [number, ()=>void] {
    const [percentage, setPercentage] = useState(0)
    const [countInterval, setCountInterval] = useState<NodeJS.Timeout | null>(null)

    function resetTimer() {
        if(countInterval) {
            clearInterval(countInterval)
            setPercentage(0)
            startInterval()
        }
    }

    function startInterval() {
        let secondsDone = 0
        const interval = setInterval(() => {
            secondsDone += 0.01
            setPercentage(secondsDone / seconds * 100)
            if (secondsDone >= seconds) {
                clearInterval(interval)
            }
        }, 10)
        setCountInterval(interval)
        return interval
    }

    useEffect(() => {
        resetTimer()
        const interval = startInterval()
        return () => clearInterval(interval)
    }, [seconds])


    return [percentage,resetTimer]
}