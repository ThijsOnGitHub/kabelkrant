import { FC, ReactNode} from "react";


export interface SubjectProps {
    subject: string
    icon: string
}

const styles = {
    subject: {
        fontSize: '40px',
        color: 'black',
        font: 'Roboto Semibold'
    },
}

function SvgIcon(props: { sx: { color: string; width: number; height: number }, children: ReactNode }) {
    return null;
}

export const Subject: FC<SubjectProps> = (props) => {
    return (
        <div className="flex flex--gap-20 flex--center">
            <span className={"material-icons-outlined"} style={{fontSize:50}} >{props.icon}</span>
            <div style={styles.subject}>{props.subject}</div>
        </div>
    )
}

