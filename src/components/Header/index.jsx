import React, { useState } from "react";
import Button from "@mui/material/Button";
import { RiMenu2Line } from "react-icons/ri";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import { FaRegBell } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Divider from '@mui/material/Divider';
import {IoMdLogOut} from 'react-icons/io';
import { TfiAlignRight } from "react-icons/tfi";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

const Header = ({ toggleSidebar, isSidebarOpen }) => {
  const [anchorMyAcc, setAnchorMyAcc] = React.useState(null);
  const openMyAcc = Boolean(anchorMyAcc);
  const handleClickMyAcc = (event) => {
    setAnchorMyAcc(event.currentTarget);
  };
  const handleCloseMyAcc = () => {
    setAnchorMyAcc(null);
  };
  return (
      <header className={`h-[60px] py-2 px-7 shadow-md bg-[#fff] flex items-center justify-between fixed top-0 z-50 transition-all duration-300 ${isSidebarOpen ? 'left-[18%] right-0' : 'left-0 right-0'}`}>
        <div className="part1">
          <Button
            onClick={toggleSidebar}
            className="!w-[40px] !h-[40px] !min-w-[40px] !rounded-full !bg-gray-50 hover:!bg-gray-100"
          >
            <RiMenu2Line className="text-[20px] text-[rgba(0,0,0,0.8)]" />
          </Button>
        </div>

        <div className="part2 w-[40%] flex items-center justify-end gap-5">
        <IconButton aria-label="cart">
          <StyledBadge badgeContent={4} color="secondary">
            <FaRegBell />
          </StyledBadge>
        </IconButton>

        <div className="relative">
          <div
            className="rounded-full w-[35px] h-[35px] overflow-hidden cursor-pointer"
            onClick={handleClickMyAcc}
          >
            <img
              src="https://ecme-react.themenate.net/img/avatars/thumb-1.jpg"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <Menu
          anchorMyAcc={anchorMyAcc}
          id="account-menu"
          open={openMyAcc}
          onClose={handleCloseMyAcc}
          onClick={handleCloseMyAcc}
          slotProps={{
            paper: {
              elevation: 0,
              sx: {
                overflow: "visible",
                filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                mt: 1.5,
                "& .MuiAvatar-root": {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
                "&::before": {
                  content: '""',
                  display: "block",
                  position: "absolute",
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: "background.paper",
                  transform: "translateY(-50%) rotate(45deg)",
                  zIndex: 0,
                },
              },
            },
          }}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        >
          <MenuItem onClick={handleCloseMyAcc} className="!bg-white">
            <div className="flex items-center gap-3">
              <div className="rounded-full w-[35px] h-[35px] overflow-hidden cursor-pointer">
                <img
                  src="https://ecme-react.themenate.net/img/avatars/thumb-1.jpg"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="info">
              <h3 className="text-[15px] font-[500] leading-5">
                Angelina Gotelli
              </h3>
              <p className="text-[12px] font-[400] opacity-70">
                admin-01@ecme.com
              </p>
            </div>
          </MenuItem>

          <Divider/>

          <MenuItem onClick={handleCloseMyAcc} className="flex items-center gap-3">
            <FaRegUser className="text[16px]"/> <span className="text-[14px]">Profile</span>
          </MenuItem>

          <MenuItem onClick={handleCloseMyAcc} className="flex items-center gap-3">
            <IoMdLogOut className="text[18px]" /> <span className="text-[14px]">Sign Out</span>
          </MenuItem>
        </Menu>
      </div>
    </header>
  );
};

export default Header;
