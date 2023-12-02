import React from 'react';
import { Stack, Typography } from '@mui/material';

const MiniTitle = ({ title, detail }) => {
  return (
    <Stack flex={1} gap={1}>
      <Typography variant='body1'>{title}</Typography>
      <Typography variant='body2' fontSize={26}>{detail}</Typography>
    </Stack>
  );
};
export default MiniTitle;
