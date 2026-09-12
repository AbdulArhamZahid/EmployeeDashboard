import React from 'react';
import { Card, Typography, Box, Divider } from '@mui/material';
import CampaignIcon from '@mui/icons-material/CampaignOutlined';
import CardMenu from './CardMenu';

const announcements = [
  { title: 'Dinner scheduled at Pearl continental', date: '1 hour ago' },
  { title: 'Office closed Sep 12 for maintenance', date: '2 days ago' },
  { title: 'New health insurance policy rolled out', date: '4 days ago' },
];

export default function AnnouncementsList() {
  return (
    <Card sx={{ p: 2.5, flex: 1, minWidth: 260, boxShadow: '0 4px 20px rgba(0,0,0,0.04)' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
      <Typography fontWeight={600} sx={{ mb: 1.5 }}>Recent Announcements</Typography>
      <CardMenu/>
      </Box>
      {announcements.map((a, i) => (
        <Box key={a.title}>
          <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5, py: 1 }}>
            <CampaignIcon sx={{ color: 'primary.main', fontSize: 20, mt: 0.3 }} />
            <Box>
              <Typography variant="body2" fontWeight={500}>{a.title}</Typography>
              <Typography variant="caption" color="text.secondary">{a.date}</Typography>
            </Box>
          </Box>
          {i < announcements.length - 1 && <Divider />}
        </Box>
      ))}
    </Card>
  );
}