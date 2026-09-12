import React from "react";
import { Card, Typography, Box } from "@mui/material";
import { BarChart } from "@mui/x-charts/BarChart";
import CardMenu from "./CardMenu";
import { colors } from "../colors";
import { alpha } from "@mui/material/styles";

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const completed = [18, 22, 15, 20, 25, 10, 6];
const pending = [6, 4, 9, 5, 3, 2, 1];

export default function WeeklyTasksChart() {
  return (
    <Card
      sx={{
        p: 2.5,
        flex: 1,
        minWidth: 260,
        boxShadow: "0 4px 20px rgba(0,0,0,0.04)",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mb: 2,
        }}
      >
        <Typography fontWeight={600} sx={{ mb: 2 }}>
          Weekly Tasks
        </Typography>
        <CardMenu />
      </Box>
      <Box sx={{ width: "100%" }}>
        <BarChart
          xAxis={[{ scaleType: "band", data: days }]}
          series={[
            { label: "Completed", data: completed, color: colors.tasks },
            {
              label: "Pending",
              data: pending,
              color: alpha(colors.tasks, 0.3),
            },
          ]}
          height={240}
          grid={{ horizontal: true }}
          margin={{ left: 40, right: 20, top: 20, bottom: 30 }}
        />
      </Box>
    </Card>
  );
}
