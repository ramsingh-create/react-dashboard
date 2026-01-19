import { motion } from "framer-motion";
import { getLucideIcon } from "../../utils/Constant";
import { useNavigate } from "react-router-dom";

type MenuSubItemProps = {
    isOpen: boolean;
    item: { name: string; icon?: React.ReactNode; subItems?: { name: string }[] };
    activeItem: string;
    openSubMenus: { [key: string]: boolean };
    setActiveItem: (name: string) => void;
    isHovered: boolean;
};

export default function MenuSubItem({
    isOpen,
    item,
    activeItem,
    openSubMenus,
    setActiveItem,
    isHovered,
}: MenuSubItemProps) {

    const navigate = useNavigate();
    const handleNavigation = (subItem: any) => {
        setActiveItem(subItem.name);
        if (subItem.isExternalLink) {
            const newURL = `http://localhost:8080/${subItem.path}/#/`;
            const queryParam = localStorage.getItem('authtoken');

            if (!queryParam) {
                console.error('No auth token found in localStorage');
                return;
            }

            window.location.href = `${newURL}?token=${encodeURIComponent(queryParam)}`;
        } else {
            navigate(subItem.path);
        }
    }

    return (
        <div>
            {isOpen && item.subItems && openSubMenus[item.name] && (
                <motion.ul
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.3 }}
                    className="bg-white rounded-b-md"
                >
                    {item.subItems.map((subItem) => (
                        <li
                            key={subItem.name}
                            className={`flex items-center gap-2 p-2 pl-4 cursor-pointer transition-all hover:pl-5 ${activeItem === subItem.name
                                ? "bg-[linear-gradient(70deg,_#4328ae,_rgba(175,159,235,0.4))] text-white"
                                    : "hover:bg-gray-100"
                                }`}
                            onClick={() => handleNavigation(subItem)}
                        >
                            {getLucideIcon("Circle", { size: 10, color: 'green' })}
                            <motion.span
                                animate={{ opacity: isOpen || isHovered ? 1 : 0 }}
                                transition={{ duration: 0.2 }}
                                className="whitespace-nowrap"
                            >
                                {subItem.name}
                            </motion.span>
                        </li>
                    ))}
                </motion.ul>
            )}
        </div>
    );
}
