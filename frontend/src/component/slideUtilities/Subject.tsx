import { FC, ReactNode} from "react";
import Icon from '@mui/material/Icon';


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
            <Icon sx={{fontSize: 45}} >{props.icon}</Icon>
            <div style={styles.subject}>{props.subject}</div>
        </div>
    )
}

