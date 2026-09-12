import React from "react";
import { colors } from "../colors";
import {
  Toolbar,
  AppBar,
  InputBase,
  IconButton,
  Avatar,
  Box,
  Badge,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import { drawerWidth } from "./Sidebar";

function Header() {
  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        bgcolor: colors.sidebarBg,
        color: "#fff",
        width: `calc(100% - ${drawerWidth}px)`,
        ml: `${drawerWidth}px`,
      }}
    >
      <Toolbar
        sx={{ display: "flex", justifyContent: "space-between", gap: 2 }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            bgcolor: "rgba(255,255,255,0.12)",
            borderRadius: "10px",
            px: 2,
            py: 0.5,
            width: 320,
          }}
        >
          <SearchIcon
            sx={{ color: "rgba(255,255,255,0.7)", mr: 1 }}
            fontSize="small"
          />
          <InputBase
            placeholder="Search here....."
            fullWidth
            sx={{
              color: "#fff",
              "& input::placeholder": {
                color: "rgba(255,255,255,0.6)",
                opacity: 1,
              },
            }}
          />
        </Box>
        <Box sx={{ display: "flex", alignItems: "centre", gap: 2 }}>
          <IconButton sx={{ color: "#fff" }}>
            <Badge color="secondary" variant="dot">
              <NotificationsNoneIcon />
            </Badge>
          </IconButton>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Avatar
              sx={{
                width: 36,
                height: 36,
                bgcolor: "rgba(255,255,255,0.15)",
                color: "#fff",
              }}
            >
              A
            </Avatar>
            <Typography variant="body2" fontWeight={600} sx={{ color: "#fff" }}>
              Abdul Arham Zahid
            </Typography>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
