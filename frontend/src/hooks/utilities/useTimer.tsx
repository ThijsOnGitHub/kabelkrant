import {useCallback, useEffect, useMemo, useState} from "react";

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

    const resetAndStartTimer = () => {
        stopTimer()
        startInterval(new Date())
    }

    useEffect(() => {
        if (seconds>= maxSeconds) {
            if(onComplete) onComplete()
            countInterval.forEach(interval => clearInterval(interval))
        }
    },[seconds])

    function startInterval(date: Date) {
        const interval = setInterval(async () => {
            const secondsDone = (new Date().getTime() - date.getTime()) / 1000
            setSeconds(secondsDone)
        }, intervalDuration)
        setCountInterval(intervals => [...intervals, interval])
        return interval
    }

    return [seconds,resetAndStartTimer,stopTimer]
}