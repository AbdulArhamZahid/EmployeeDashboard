import { useState } from "react";
import {colors} from "../colors"
import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  Box,
  Divider,
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/DashboardOutlined";
import PeopleIcon from "@mui/icons-material/PeopleAltOutlined";
import EventAvailableIcon from "@mui/icons-material/EventAvailableOutlined";
import RequestQuoteIcon from "@mui/icons-material/RequestQuoteOutlined";
import PaidIcon from "@mui/icons-material/PaidOutlined";
import SettingsIcon from "@mui/icons-material/SettingsOutlined";
import LogoutIcon from "@mui/icons-material/LogoutOutlined";

export const drawerWidth = 240;

const menuItems = [
  { text: "Dashboard", icon: <DashboardIcon /> },
  { text: "Employees", icon: <PeopleIcon /> },
  { text: "Attendance", icon: <EventAvailableIcon /> },
  { text: "Leaves", icon: <RequestQuoteIcon /> },
  { text: "Payrolls", icon: <PaidIcon /> },
  { text: "Settings", icon: <SettingsIcon /> },
];

function Sidebar() {
  const [active, setActive] = useState("Dashboard");

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: drawerWidth,
          boxSizing: "border-box",
          border: "none",
          bgcolor: colors.sidebarBg,
        },
      }}
    >
      <Box
        sx={{ px: 3, py: 1.75, display: "flex", alignItems: "center", gap: 1 }}
      >
        <Box
          component="img"
          src="/apple-touch-icon.png"
          alt="Logo"
          sx={{
            width: 36,
            height: 36,
            borderRadius: "10px",
          }}
        />
        <Typography variant="h6" sx={{ color: "#fff" }}>
          eDashboard
        </Typography>
      </Box>
      <Divider sx={{ borderColor: "rgba(255, 255, 255, 0.27)" }} />
      <List sx={{ px: 2, py: 2, borderColor: "rgba(255,255,255,0.1)" }}>
        {menuItems.map((item) => {
          const isActive = active === item.text;
          return (
            <ListItemButton
              key={item.text}
              selected={isActive}
              onClick={() => setActive(item.text)}
              sx={{
                borderRadius: "10px",
                mb: 0.5,
                color: "rgba(255,255,255,0.7)",
                "&.Mui-selected": {
                  bgcolor: "primary.main",
                  color: "#fff",
                  "& .MuiListItemIcon-root": { color: "#fff" },
                  "&:hover": { bgcolor: "primary.main" },
                },
                "&:hover": {
                  bgcolor: isActive ? "primary.main" : "rgba(255,255,255,0.08)",
                },
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 40,
                  color: isActive ? "#fff" : "rgba(255,255,255,0.7)",
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          );
        })}
      </List>
      <Box sx={{ mt: "auto", pb: 3, px: 2 }}>
        <ListItemButton
          sx={{
            borderRadius: "10px",
            color: "rgba(255,255,255,0.7)",
            "&:hover": { bgcolor: "rgba(255,255,255,0.08)" },
          }}
        >
          <ListItemIcon sx={{ minWidth: 40, color: "rgba(255,255,255,0.7)" }}>
            <LogoutIcon />
          </ListItemIcon>
          <ListItemText primary="Log Out" />
        </ListItemButton>
      </Box>
    </Drawer>
  );
}
export default Sidebar;
