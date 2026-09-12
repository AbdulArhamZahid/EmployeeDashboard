import React from "react";
import { Card, Typography, Box } from "@mui/material";
import { BarChart } from "@mui/x-charts/BarChart";
import CardMenu from "./CardMenu";
import { colors } from "../colors";
import { alpha } from "@mui/material/styles";

export default function PayrollChart() {
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
          Payroll — Paid vs Pending
        </Typography>
        <CardMenu />
      </Box>
      <Box sx={{ width: "100%" }}>
        <BarChart
          xAxis={[{ scaleType: "band", data: ["This Month"] }]}
          series={[
            {
              label: "Paid",
              data: [77500],
              color: colors.payroll,
              valueFormatter: (v) => `$${v.toLocaleString()}`,
            },
            {
              label: "Pending",
              data: [6700],
              color: alpha(colors.payroll, 0.3),
              valueFormatter: (v) => `$${v.toLocaleString()}`,
            },
          ]}
          height={240}
          grid={{ horizontal: true }}
          margin={{ left: 50, right: 20, top: 20, bottom: 30 }}
        />
      </Box>
    </Card>
  );
}
