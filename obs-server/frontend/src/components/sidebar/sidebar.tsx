import { FC } from "react"
import { SidebarItem } from "./sidebarItem"
import { ProgrammaFormSchema } from "@/type/programFormName";

export interface SidebarProps {
    items: ProgrammaFormSchema[]
    onAddBlock: () => void;
    selectedItem?: number
    setSelectedItem: (index: number) => void;
}

export const Sidebar: FC<SidebarProps> = ({selectedItem, setSelectedItem, items, onAddBlock}) => {

    return <div className="sidebar__container">
        <div className="sidebar__header">Blokken</div>
        {
            items.map((item,index) => {
                return <SidebarItem onClick={() => setSelectedItem(index)} isSelected={index== selectedItem }>{item.programName}</SidebarItem>
            })
        }
        <SidebarItem isAdd={true} onClick={onAddBlock}>Voeg nieuw programma toe</SidebarItem>
    </div>
}