import React from 'react';
import { Typography, Grid, Stack } from '@mui/material';
import SkillCard from '../SkillCard';
import * as constant from './constants';
import MiniTitle from '../MiniTitle';

const Header = () => {
  return (
    <Grid
      container
      px={2}
      py={4}
      sx={{
        bgcolor: (theme) => theme.palette.grey[300],
        boxShadow: '2px 4px 4px 0px rgba(0, 0, 0, 0.25)',
      }}
    >
      <Grid item xs={12} md={3}>
        left side
      </Grid>
      <Grid item xs={12} md={9}>
        <Stack gap={3}>
          <Typography variant='h3'>{constant.name}</Typography>
          <Typography variant='h6'>{constant.objective}</Typography>
          <Stack direction={'row'} flexBasis={0} gap={2}>
            {constant.rolesExperience.map((data, index) => (
              <MiniTitle key={index} {...data} />
            ))}
          </Stack>
          {constant.skills.map((data, index) => (
            <SkillCard key={index} {...data} />
          ))}
        </Stack>
      </Grid>
    </Grid>
  );
};

export default Header;
