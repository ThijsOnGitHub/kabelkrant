import { useEffect, useState } from "react";

/**
 * Returns a timer that counts up to maxSeconds and then calls onComplete
 * @param maxSeconds
 * @param onComplete
 * @param intervalDuration How often the timer should update in miliseconds
 */

export function useTimer(maxSeconds: number | false, onComplete?: ()=>void, intervalDuration = 10,tag?: string) {
    const [seconds, setSeconds] = useState(0)
    const [done, setDone] = useState(false)
    const [date, setDate] = useState(new Date())
    const [isRunning, setIsRunning] = useState(false)

    function stopTimer() {
        console.log("Stopping timer", tag)
        setIsRunning(false)
    }

    const resetAndStartTimer = () => {
        console.log("Resetting timer", tag)
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
        if (maxSeconds !== false && seconds>= maxSeconds) {
            setIsRunning(false)
            setDone(true)
        }
    },[seconds])


    useEffect(() => {
        console.log("Starting timer",isRunning, tag)
        if(!isRunning) return
        const interval = setInterval(async () => {
            console.log("Interval", tag)
            const secondsDone = (new Date().getTime() - date.getTime()) / 1000
            setSeconds(secondsDone)
            if(maxSeconds === false) {
                onComplete?.()
            }
        }, intervalDuration)
        return () => {
            clearInterval(interval)
        }
    }, [isRunning])


    return {seconds, resetAndStartTimer, stopTimer}
}