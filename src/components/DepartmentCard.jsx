import React from "react";
import { Typography, Box, Card, Avatar } from "@mui/material";
import { Schedule } from "@mui/icons-material";
import ScheduleIcon from "@mui/icons-material/Schedule";

function DepartmentCard({ title, icon, employees, updated, color }) {
  return (
    <Card
      sx={{ p: 2.5, minWidth: 200, flex:1, boxShadow: "0 4px 20px rgba(0,0,0,0.04)" }}
    >
      <Avatar sx={{ bgcolor: color, mb: 1.5 }}>{icon}</Avatar>
      <Typography fontWeight={600} sx={{ mb: 1 }}>
        {title}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Total Employee: {employees}
      </Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 0.5,
          mt: 1,
          color: "text.secondary",
        }}
      >
        <ScheduleIcon fontSize="inherit" />
        <Typography variant="caption">Updated {updated}</Typography>
      </Box>
    </Card>
  );
}

export default DepartmentCard;
