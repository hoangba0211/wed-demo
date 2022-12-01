import React, { useState } from 'react';
import { AppShell, Navbar, createStyles } from '@mantine/core';
import { Brand } from 'app/components/Brand';
import { User } from 'app/components/User';
import { MainLinks } from 'app/components/MainLinks';
import { HeaderUi } from 'app/components/Header';

const useStyles = createStyles(theme => ({
  hiden: {
    '@media (max-width: 800px)': {
      display: 'none',
    },
    '@media (min-width: 800px) and (max-width:1023px)': {
      width: '270px',
      display: 'none',
    },
  },
  appear: {
    '@media (max-width: 800px)': {
      display: 'flex',
    },
    '@media (min-width: 800px) and (max-width:1023px)': {
      width: '270px',
      display: 'flex',
    },
  },
}));
interface LayoutProps {
  children: React.ReactNode;
}
const Layout = ({ children }: LayoutProps) => {
  const { classes } = useStyles();

  const [opened, setOpened] = useState(false);
  return (
    <>
      <AppShell
        sx={theme => ({
          background:
            theme.colorScheme === 'dark'
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        })}
        padding="md"
        navbar={
          <Navbar
            width={{ base: 300 }}
            p="xs"
            className={!opened ? classes.hiden : classes.appear}
          >
            <Navbar.Section mt="xs" style={{ display: 'none' }}>
              <Brand />
            </Navbar.Section>
            <Navbar.Section grow mt="md">
              <MainLinks />
            </Navbar.Section>
            <Navbar.Section>
              <User />
            </Navbar.Section>
          </Navbar>
        }
        header={<HeaderUi opened={opened} setOpened={setOpened} />}
        styles={theme => ({
          main: {
            backgroundColor:
              theme.colorScheme === 'dark'
                ? theme.colors.dark[8]
                : theme.colors.gray[0],
            '@media (max-width: 800px)': {
              paddingLeft: 0,
              paddingRight: 0,
            },
          },
        })}
      >
        {children}
      </AppShell>
    </>
  );
};

export default Layout;
