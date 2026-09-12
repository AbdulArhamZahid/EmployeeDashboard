import React, { useState } from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import CardMenu from "./CardMenu";
import {
  Card,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Avatar,
  Box,
  Chip,
  Button,
} from "@mui/material";

const rows = [
  {
    name: "Abdul Arham Zahid",
    role: "Chief Executive",
    checkIn: "10:36",
    checkOut: "18:55",
    working: "08hr 42min",
    status: "Late",
    statusColor: "error",
  },
  {
    name: "Bilal Bashinda",
    role: "Back End Developer",
    checkIn: "09:00",
    checkOut: "18:30",
    working: "09hr 30min",
    status: "On Time",
    statusColor: "success",
  },
  {
    name: "Noor M",
    role: "Head Chef",
    checkIn: "09:36",
    checkOut: "18:55",
    working: "09hr 02min",
    status: "On Time",
    statusColor: "success",
  },
  {
    name: "Yousaf",
    role: "Accountant",
    checkIn: "09:10",
    checkOut: "18:55",
    working: "09hr 00min",
    status: "Extra Shift",
    statusColor: "success",
  },
  {
    name: "Christiano Ronaldo",
    role: "Social Media Manager",
    checkIn: "09:10",
    checkOut: "18:55",
    working: "09hr 00min",
    status: "On Time",
    statusColor: "success",
  },
  {
    name: "Hamza Tariq",
    role: "Assistant Engineer",
    checkIn: "09:10",
    checkOut: "18:55",
    working: "09hr 00min",
    status: "On Time",
    statusColor: "success",
  },
];

export default function AttendanceTable() {
  const [showAll, setShowAll] = useState(false);
  const visibleRows = showAll ? rows : rows.slice(0, 3);
  return (
    <Card sx={{ p: 2.5, boxShadow: "0 4px 20px rgba(0,0,0,0.04)" }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mb: 2,
        }}
      >
        <Typography fontWeight={600} sx={{ mb: 2 }}>
          Attendance
        </Typography>
        <CardMenu />
      </Box>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Employee</TableCell>
              <TableCell>Check In</TableCell>
              <TableCell>Check Out</TableCell>
              <TableCell>Working Hrs</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {visibleRows.map((row) => (
              <TableRow key={row.name}>
                <TableCell>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                    <Avatar sx={{ width: 32, height: 32, color: "#fff" }}>
                      {row.name[0]}
                    </Avatar>
                    <Box>
                      <Typography variant="body2" fontWeight={600}>
                        {row.name}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        {row.role}
                      </Typography>
                    </Box>
                  </Box>
                </TableCell>
                <TableCell>{row.checkIn}</TableCell>
                <TableCell>{row.checkOut}</TableCell>
                <TableCell>{row.working}</TableCell>
                <TableCell>
                  <Chip
                    label={row.status}
                    color={row.statusColor}
                    size="small"
                    variant="outlined"
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
     <Button
  onClick={() => setShowAll(!showAll)}
  endIcon={showAll ? <ExpandLessIcon /> : <ArrowForwardIcon />}
  sx={{ mt: 1, textTransform: 'none', color: 'primary.main' }}
>
  {showAll ? 'Show less' : 'View all'}
</Button>
    </Card>
  );
}
