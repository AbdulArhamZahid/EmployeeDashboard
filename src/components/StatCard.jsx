import React from 'react';
import { Card, Box, Typography, Avatar, Chip } from '@mui/material';
import { alpha } from '@mui/material/styles';

export default function StatCard({ icon, label, value, trend, color }) {
  return (
    <Card sx={{
  p: 2.5, minWidth: 180, height: '100%',
  display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
  bgcolor: 'background.paper',
  borderTop: `4px solid ${color}`,
  boxShadow: `0 10px 24px ${alpha(color, 0.18)}`,
}}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Avatar sx={{ bgcolor: color, width: 48, height: 48 }}>{icon}</Avatar>
        <Box>
          <Typography variant="h5" fontWeight={700}>{value}</Typography>
          <Typography variant="body2" color="text.secondary">{label}</Typography>
        </Box>
      </Box>
      <Chip
        label={trend}
        size="small"
       sx={{
  mt: 1.5,
  alignSelf: 'flex-start',
  bgcolor: alpha('#34D399', 0.18),
  color: '#6EE7B7',
  fontWeight: 600,
}}
      />
    </Card>
  );
}