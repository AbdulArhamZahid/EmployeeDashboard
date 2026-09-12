import React from "react";
import { Box, Stack, Toolbar } from "@mui/material";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import StatCard from "./components/StatCard";
import PeopleAltIcon from "@mui/icons-material/PeopleAltOutlined";
import HowToRegIcon from "@mui/icons-material/HowToRegOutlined";
import AssignmentIcon from "@mui/icons-material/AssignmentOutlined";
import AccessTimeIcon from "@mui/icons-material/AccessTimeOutlined";
import PaidIcon from "@mui/icons-material/PaidOutlined";
import AttendanceByDepartmentChart from "./components/AttendanceByDepartmentChart";
import WeeklyTasksChart from "./components/WeeklyTasksChart";
import PayrollChart from "./components/PayrollChart";
import AnnouncementsList from "./components/AnnouncementsList";
import LeaveRequestsList from "./components/LeaveRequestsList";
import AttendanceTable from "./components/AttendanceTable";
import { colors } from "./colors";

const stats = [
  {
    icon: <PeopleAltIcon />,
    label: "Active Employees",
    value: "1,081",
    trend: "+55% than last week",
    color: colors.employees,
  },
  {
    icon: <HowToRegIcon />,
    label: "Total Employees",
    value: "2,378",
    trend: "+3% than last week",
    color: colors.employees,
  },
  {
    icon: <AssignmentIcon />,
    label: "Total Tasks",
    value: "36",
    trend: "+4% than last week",
    color: colors.tasks,
  },
  {
    icon: <PaidIcon />,
    label: "Payroll (This Month)",
    value: "$84,200",
    trend: "92% paid  +17% Annualy ",
    color: colors.payroll,
  },
  {
    icon: <AccessTimeIcon />,
    label: "Attendance",
    value: "+112",
    trend: "Updated 3 hours ago",
    color: colors.attendance,
  },
];
function App() {
  return (
    <Box
      sx={{
        bgcolor: "background.default",
        minHeight: "100vh",
        display: "flex",
      }}
    >
      <Sidebar />
      <Header />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: 2,
            mb: 3,
          }}
        >
          {stats.map((s) => (
            <StatCard key={s.label} {...s} />
          ))}
        </Box>

        <Stack direction="row" spacing={2} sx={{ mb: 3, flexWrap: "wrap" }}>
          <WeeklyTasksChart />
          <PayrollChart />
        </Stack>
        <Box sx={{ mb: 3 }}>
          <AttendanceByDepartmentChart />
        </Box>
        <Stack direction="row" spacing={2} sx={{ mb: 3, flexWrap: "wrap" }}>
          <AnnouncementsList />
          <LeaveRequestsList />
        </Stack>
        <AttendanceTable />
      </Box>
    </Box>
  );
}

export default App;
