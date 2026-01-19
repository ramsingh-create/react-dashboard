import { RootState } from "../../store/store";
import { useSelector } from "react-redux";
import { Menu as MuiMenu, MenuItem, Typography, Box, Avatar, ListItemIcon } from "@mui/material";
import { LogOut, Bell, Menu, LockOpen, PhoneCall, Mail, User } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";
import logoImage from "../../assets/images/SuperMoney_Logo.png";
import { UserAPIDetails } from "../../store/loggedInUserSlice";
import ThemeToggle from "./ThemeToggle";

interface NavBarProps {
    onMenuClick: () => void;
}

export default function NavBar({ onMenuClick }: NavBarProps) {
    const { username, department, email, phoneNum } = useSelector(
        (state: RootState) => state.loggedInUser.userAPIDetails as UserAPIDetails || { username: "Guest User", department: "User" }
    );

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleMenuItemClick = (action: string) => {
        handleClose();
        switch (action) {
            case "profile":
                console.log("Profile clicked");
                break;
            case "account":
                console.log("Account clicked");
                break;
            case "logout":
                logout();
                localStorage.clear()
                break;
        }
    };

    const logout = () => {
        window.location.href = "https://www.supermoney.in/SMSmartdashPwaRbac/#/login";
    };

    // Get initials from userName
    const getInitials = (name: string) => {
        return (
            name
                ?.split(" ")
                .map((word) => word[0])
                .join("")
                .toUpperCase() || "U"
        );
    };

    return (
        <div className="w-full h-16 rounded-md bg-white border-b shadow-md flex items-center justify-between px-6 dark:bg-gray-300">
            <div className="flex items-center gap-4">
            {/* Mobile Menu Button */}
            <button
                onClick={onMenuClick}
                className="lg:hidden p-2 hover:bg-gray-100 rounded-md"
            >
                <Menu size={24} />
            </button>

            <motion.img
                className="ml-auto"
                transition={{ duration: 0.2 }}
                src={logoImage}
                style={{ width: 150 }}
            />
            <ThemeToggle/>
            </div>

            {/* User Info */}
            <div className="flex items-center gap-4">
                {/* Notification Icon */}
                <div className="relative">
                    <Bell size={24} className="text-gray-600" />
                    {/* <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full">
                        4
                    </span> */}
                </div>
                <div className="text-right">
                    <p className="font-medium text-gray-800">
                        {username || "Guest User"}
                    </p>
                    <p className="text-xs text-gray-500">{department || "User"}</p>
                </div>
                <div
                    onClick={handleClick}
                    className="w-10 h-10 bg-indigo-500 text-white flex items-center justify-center rounded-full relative cursor-pointer"
                >
                    {getInitials(username)}
                    <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white" />
                </div>
                <MuiMenu
                      id="user-menu"
                      anchorEl={anchorEl}
                      open={open}
                      onClose={handleClose}
                      MenuListProps={{
                        "aria-labelledby": "user-button",
                        sx: {
                            p: 2.5,
                        }
                      }}
                      anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "right",
                      }}
                      transformOrigin={{
                        vertical: "top",
                        horizontal: "right",
                      }}
                      PaperProps={{
                        elevation: 0,
                        sx: {
                          overflow: "visible",
                          filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                          mt: 1.5,
                          minWidth: 240,
                          borderRadius: 2,
                        },
                      }}
                    >
                      {/* 🧑 Profile Header */}
                      <Box px={2} py={1.5} display="flex" alignItems="center" gap={1.5}>
                        <Avatar sx={{ bgcolor: "#1976d2" }}>{getInitials(username)}</Avatar>
                        <Box>
                          <Typography variant="subtitle1" fontWeight={600}>
                            {username}
                          </Typography>
                          <Typography variant="caption" color="text.secondary">
                           {department}
                          </Typography>
                        </Box>
                      </Box>
                
                      {/* 📞 Contact Info */}
                    <MenuItem onClick={() => handleMenuItemClick("change-password")}>
                        <ListItemIcon>
                            <PhoneCall size={18} />
                        </ListItemIcon>
                       +91 {phoneNum}
                    </MenuItem>     
                    <MenuItem onClick={() => handleMenuItemClick("change-password")}>
                        <ListItemIcon>
                            <Mail size={18} />
                        </ListItemIcon>
                        {email}
                    </MenuItem>       
                    <MenuItem onClick={() => handleMenuItemClick("change-password")}>
                        <ListItemIcon>
                            <User size={18} />
                        </ListItemIcon>
                        Supermoney
                    </MenuItem>    
                      {/* 🔐 Change Password */}
                      <MenuItem onClick={() => handleMenuItemClick("change-password")}>
                        <ListItemIcon>
                          <LockOpen size={18} />
                        </ListItemIcon>
                        Change Password
                      </MenuItem>
                
                      {/* 🚪 Logout */}
                      <MenuItem onClick={() => handleMenuItemClick("logout")}>
                        <ListItemIcon>
                          <LogOut size={18} />
                        </ListItemIcon>
                        Logout
                      </MenuItem>
                    </MuiMenu>
            </div>
        </div>
    );
}
