import {FC} from "react";
import styles from './bar.module.scss'

export interface BarProps {
    percentage: number
}
export const Bar: FC<BarProps> = ({percentage}) => {
    return <div className={styles.bar}>
        <div className={styles.barFill} style={{width: `${percentage}%`}}></div>
    </div>
}