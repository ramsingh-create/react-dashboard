import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import logoImage from "../../assets/images/newlogo.png";

type HeaderProps = {
    open: boolean;
    isHovered: boolean;
    setOpen: (open: boolean) => void;
};

export default function Header({ open, isHovered, setOpen }: HeaderProps) {
    return (
        <div className="flex items-center justify-between p-4 gap-1s">
            {(open || isHovered) && (
                <motion.img
                    // className="fixed"
                    transition={{ duration: 0.2 }}
                    src={logoImage}
                    style={{ width: 189 }}
                />
            )}
            <motion.button
                onClick={() => setOpen(!open)}
                className="p-2 ml-auto rounded-full bg-gray-200"
            >
                <ChevronRight
                    size={16}
                    className={`transition-transform transform ${open ? "rotate-180" : "rotate-0"}`}
                />
            </motion.button>

            {/* {isHovered && !open && (
        <motion.img
          className="width-70"
          animate={{ opacity: isHovered && !open ? 1 : 0 }}
          transition={{ duration: 0.2 }}
          src={logoImage}
        />
      )} */}
        </div>
    );
}
