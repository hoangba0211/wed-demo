import React from 'react';
import { UnstyledButton, Box, useMantineTheme } from '@mantine/core';
import { OptionsUser } from '../OptionsUser';
import { useSelector } from 'react-redux';
import { getTokenSelector } from 'store/slice/userSlice/selectors';

export function User() {
  const theme = useMantineTheme();
  const token = useSelector(getTokenSelector);

  if (!token) return null;
  return (
    <Box
      sx={{
        paddingTop: theme.spacing.sm,
        borderTop: `1px solid ${
          theme.colorScheme === 'dark'
            ? theme.colors.dark[4]
            : theme.colors.gray[2]
        }`,
      }}
    >
      <Box
        sx={{
          display: 'block',
          width: '100%',
          padding: theme.spacing.xs,
          borderRadius: theme.radius.sm,
          color:
            theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,

          '&:hover': {
            backgroundColor:
              theme.colorScheme === 'dark'
                ? theme.colors.dark[6]
                : theme.colors.gray[0],
          },
        }}
      >
        <OptionsUser />
      </Box>
    </Box>
  );
}
