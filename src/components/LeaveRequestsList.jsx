import React from 'react';
import { Card, Typography, Box, Avatar, Chip, Divider } from '@mui/material';
import CardMenu from './CardMenu';

const requests = [
  { name: 'Ayesha Malik', dates: 'Sep 10 - Sep 12', status: 'Pending', statusColor: 'warning' },
  { name: 'Bilal Hussain', dates: 'Sep 15', status: 'Approved', statusColor: 'success' },
  { name: 'Hamza Tariq', dates: 'Sep 20 - Sep 22', status: 'Pending', statusColor: 'warning' },
];

export default function LeaveRequestsList() {
  return (
    <Card sx={{ p: 2.5, flex: 1, minWidth: 260, boxShadow: '0 4px 20px rgba(0,0,0,0.04)' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
      <Typography fontWeight={600} sx={{ mb: 1.5 }}>Leave Requests</Typography>
      <CardMenu/>
      </Box>
      {requests.map((r, i) => (
        <Box key={r.name}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', py: 1 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
              <Avatar sx={{ width: 32, height: 32, color: "#fff" }}>{r.name[0]}</Avatar>
              <Box>
                <Typography variant="body2" fontWeight={600}>{r.name}</Typography>
                <Typography variant="caption" color="text.secondary">{r.dates}</Typography>
              </Box>
            </Box>
            <Chip label={r.status} color={r.statusColor} size="small" variant="outlined" />
          </Box>
          {i < requests.length - 1 && <Divider />}
        </Box>
      ))}
    </Card>
  );
}