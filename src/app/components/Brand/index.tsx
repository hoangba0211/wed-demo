import React from 'react';
import { Group, Box, createStyles } from '@mantine/core';
import { Logo } from '../Logo';

const useStyles = createStyles(theme => ({
  brand: {
    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      transform: 'translateX(50%)',
    },
  },
}));
export function Brand() {
  const { classes } = useStyles();
  return (
    <Box
      sx={theme => ({
        paddingLeft: theme.spacing.xs,
        paddingRight: theme.spacing.xs,
        flex: '2',
        '@media (min-width: 800px) and (max-width:1023px)': {
          display: 'flex',
          justifyContent: 'center',
        },
      })}
    >
      <Group position="apart">
        <div className={classes.brand}>
          <Logo colorS="light" />
        </div>
      </Group>
    </Box>
  );
}
