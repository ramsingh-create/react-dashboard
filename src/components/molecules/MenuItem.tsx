import { JSX, useState } from "react";
import { motion } from "framer-motion";
import { getNavBarItems } from "../../utils/constants"
import { getLucideIcon } from "../../utils/Constant";
import { ChevronRight } from "lucide-react";
import MenuSubItem from "./MenuSubItem";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

export type SubMeuItem = {
    name: string;
    icon: JSX.Element;
    path: string;
};



type MenuItemProps = {
    isOpen: boolean;
    isHovered: boolean;
};

export default function MenuItem({ isOpen, isHovered }: MenuItemProps) {
    const [activeItem, setActiveItem] = useState("Dashboard");
    const [openSubMenus, setOpenSubMenus] = useState<{ [key: string]: boolean }>(
        {},
    );
    const userDetails = useSelector((state: RootState) => state.loggedInUser.userAPIDetails)

    const toggleSubMenu = (name: string) => {
        setOpenSubMenus((prev) => ({
            ...prev,
            [name]: !prev[name],
        }));
    };

    return (
        <ul className="mt-4">
            {getNavBarItems(userDetails?.roles[0].id as number).map((item) => (
                <div className="mx-4" key={item.name}>
                    <motion.li
                        className={`flex items-center justify-between p-3 hover:pl-4 cursor-pointer rounded-t-md transition-all duration-200 ${activeItem === item.name
                            ? "menu-item-color text-[#341d5a] bg-white"
                            : "hover:bg-white hover:text-[#341d5a] text-white"
                            }`}
                        onClick={() => {
                            setActiveItem(item.name);
                            if (item.subItems) toggleSubMenu(item.name);
                        }}
                    >
                        <div className="flex items-center gap-2">
                            {getLucideIcon(item.icon, { size: 20, color: 'green' })}
                            <motion.span
                                animate={{ opacity: isOpen || isHovered ? 1 : 0 }}
                                transition={{ duration: 0.2 }}
                                className="whitespace-nowrap"
                            >
                                {item.name}
                            </motion.span>
                        </div>
                        {item.subItems && (
                            <ChevronRight
                                size={20}
                                className={`transition-transform transform ${openSubMenus[item.name] ? "rotate-90" : "rotate-0"}`}
                            />
                        )}
                    </motion.li>

                    {/* Submenu Items */}
                    <MenuSubItem
                        isOpen={isOpen}
                        item={item}
                        activeItem={activeItem}
                        openSubMenus={openSubMenus}
                        setActiveItem={setActiveItem}
                        isHovered={isHovered}
                    />
                </div>
            ))}
        </ul>
    );
}
