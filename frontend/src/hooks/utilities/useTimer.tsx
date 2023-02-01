import {useEffect, useState} from "react";

/**
 * Returns a timer that counts up to maxSeconds and then calls onComplete
 * @param maxSeconds
 * @param onComplete
 * @param intervalDuration How often the timer should update in miliseconds
 */

export function useTimer(maxSeconds: number, onComplete?: ()=>void, intervalDuration = 10): [number, ()=>void,()=>void] {
    const [seconds, setSeconds] = useState(0)
    const [countInterval, setCountInterval] = useState<NodeJS.Timeout[] >([])

    function stopTimer() {
        if(countInterval) {
            countInterval.forEach(interval => clearInterval(interval))
            setCountInterval([])
        }
    }

    function resetTimer() {
        stopTimer()
        startInterval(new Date())
    }

    function startInterval(date: Date) {
        const interval = setInterval(async () => {
            const secondsDone = (new Date().getTime() - date.getTime()) / 1000
            setSeconds(secondsDone)
            if (secondsDone >= maxSeconds) {
                if(onComplete) onComplete()
                clearInterval(interval)
            }
        }, intervalDuration)
        setCountInterval(intervals => [...intervals, interval])
        return interval
    }

    useEffect(() => {
        resetTimer()
        return () => stopTimer()
    }, [maxSeconds])


    return [seconds,resetTimer,stopTimer]
}