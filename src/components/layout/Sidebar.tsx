import { useEffect } from "react";
import { motion } from "framer-motion";
import Header from "./Header";
import MenuItem from "../molecules/MenuItem";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/store";
import { setIsMobile } from "../../store/screenSlice";

interface SidebarProps {
    isOpen: boolean;
    isHovered?: boolean;
    setIsOpen?: (isOpen: boolean) => void;
    setIsHovered?: (isHovered: boolean) => void;
}

export default function Sidebar({
    isOpen,
    isHovered = false,
    setIsOpen = () => { },
    setIsHovered = () => { },
}: SidebarProps) {
    const dispatch = useDispatch();
    const { isMobile } = useSelector((state: RootState) => state.screen);

    // Handle window resize
    useEffect(() => {
        const handleResize = () => {
            dispatch(setIsMobile(window.innerWidth < 1024));
        };

        window.addEventListener("resize", handleResize);
        handleResize(); // Initial check

        return () => window.removeEventListener("resize", handleResize);
    }, [dispatch]);

    function onSideBarHoverdStart() {
        setIsHovered(true);
    }

    function onSideBarHoverdEnd() {
        setIsHovered(false);
    }

    return (
        <div className="flex">
            <motion.div
                animate={{ width: isOpen ? 260 : 75 }}
                whileHover={{ width: 260 }}
                onHoverStart={onSideBarHoverdStart}
                onHoverEnd={onSideBarHoverdEnd}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="min-h-screen h-full bg-[#341d5a] border-r shadow-lg flex flex-col overflow-y-auto"
            >
                {!isMobile && (
                    <Header
                        open={isOpen}
                        isHovered={isHovered}
                        setOpen={() => setIsOpen(!isOpen)}
                    />
                )}
                <MenuItem isOpen={isOpen} isHovered={isHovered} />
            </motion.div>
        </div>
    );
}
