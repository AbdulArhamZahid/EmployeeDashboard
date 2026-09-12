import React from 'react';
import { Card, Typography, Box } from '@mui/material';
import { LineChart } from '@mui/x-charts/LineChart';
import CardMenu from './CardMenu';
import { colors } from '../colors';

const departments = [
  { name: 'Engineering & Dev', color: colors.employees },
  { name: 'Marketing & Sales', color: colors.tasks },
  { name: 'Accounting & Finance', color: colors.payroll },
  { name: 'Human Resource', color: colors.attendance },
];

const days = Array.from({ length: 30 }, (_, i) => `D${i + 1}`);

const series = departments.map((d) => ({
  label: d.name,
  color: d.color,
  data: Array.from({ length: 30 }, () => Math.round(80 + Math.random() * 15)),
  showMark: false,
}));

export default function AttendanceByDepartmentChart() {
  return (
    <Card sx={{ p: 2.5, boxShadow: '0 4px 20px rgba(0,0,0,0.04)' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
      <Typography fontWeight={600} sx={{ mb: 2 }}>Attendance by Department</Typography>
      <CardMenu/>
      </Box>
      <Box sx={{ width: '100%' }}>
        <LineChart
          xAxis={[{ scaleType: 'point', data: days, tickInterval: (v, i) => i % 5 === 0 }]}
          series={series}
          height={280}
          grid={{ horizontal: true }}
          margin={{ left: 40, right: 20, top: 20, bottom: 30 }}
        />
      </Box>
    </Card>
  );
}