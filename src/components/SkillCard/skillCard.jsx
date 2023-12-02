import React from 'react';
import { Button, Typography } from '@mui/material';
import { Stack } from '@mui/system';

const SkillCard = ({ title, skills }) => {
  return (
    <Stack gap={1}>
      <Typography m={0}>{title}</Typography>
      <Stack direction="row" gap={2} flexWrap='wrap'>
        {skills.map((data, index) => {
          return (
            <Button  variant='outlined' key={index}>
              {data}
            </Button>
          );
        })}
      </Stack>
    </Stack>
  );
};
export default SkillCard;
