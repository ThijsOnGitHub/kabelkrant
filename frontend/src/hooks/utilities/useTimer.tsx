import {useCallback, useEffect, useMemo, useState} from "react";

/**
 * Returns a timer that counts up to maxSeconds and then calls onComplete
 * @param maxSeconds
 * @param onComplete
 * @param intervalDuration How often the timer should update in miliseconds
 */

export function useTimer(maxSeconds: number, onComplete?: ()=>void, intervalDuration = 10,tag?: string) {
    const [seconds, setSeconds] = useState(0)
    const [done, setDone] = useState(false)
    const [date, setDate] = useState(new Date())
    const [isRunning, setIsRunning] = useState(false)

    function stopTimer() {
        setIsRunning(false)
    }

    const resetAndStartTimer = () => {
        setDate(new Date())
        setDone(false)
        setIsRunning(true)
    }

    useEffect(() => {
        if(done){
            if(onComplete) onComplete()
        }
    },[done])

    useEffect(() => {
        if (seconds>= maxSeconds) {
            setIsRunning(false)
            setDone(true)
        }
    },[seconds])


    useEffect(() => {
        if(!isRunning) return
        const interval = setInterval(async () => {
            const secondsDone = (new Date().getTime() - date.getTime()) / 1000
            setSeconds(secondsDone)
        }, intervalDuration)
        return () => {
            clearInterval(interval)
        }
    }, [isRunning])


    return {seconds, resetAndStartTimer, stopTimer}
}