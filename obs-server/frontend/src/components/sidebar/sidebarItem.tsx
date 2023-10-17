import { FC} from "react";
import add from "../../assets/add.svg";


export interface SidebarItemProps {
    isAdd?: boolean;
    isSelected?: boolean;
    children: React.ReactNode 
}

export const SidebarItem: FC<SidebarItemProps & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>,HTMLDivElement>> = ({isSelected = false,children,isAdd = false,...props}) => {
    return <div {...props} className={"sidebar-item__container" + (isSelected ? " sidebar-item__container--selected" : "") }>
         {isAdd && <img className="sidebar-item__add-icon" src={add}/>}{children}
    </div>
}