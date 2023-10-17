import { FC, useState } from "react";
import { SidebarItem } from "./sidebarItem";

export interface SidebarProps {
}

export const Sidebar: FC<SidebarProps> = () => {
    const [selectedItem, setSelectedItem] = useState<string>("camera")

    return <div className="sidebar__container">
        <div className="sidebar__header">Blokken</div>
        <SidebarItem onClick={() => setSelectedItem("camera")} isSelected={selectedItem == "camera"}>Camera</SidebarItem>
        <SidebarItem onClick={() => setSelectedItem("test")} isSelected={selectedItem == "test"}>Test</SidebarItem>
        <SidebarItem isAdd={true}>Voeg nieuw programma toe</SidebarItem>
    </div>
}