import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { IconDatabase } from '@tabler/icons';
import {
  AppShell,
  Navbar,
  Header,
  useMantineTheme,
  MediaQuery,
  Button,
  Burger,
  createStyles,
} from '@mantine/core';
import { Brand } from 'app/components/Brand';
import { User } from 'app/components/User';
import { MainLinks } from 'app/components/MainLinks';

const useStyles = createStyles(theme => ({
  header: {
    '@media (max-width: 800px)': {
      flex: '1',
      justifyContent: 'space-between',
    },
  },
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
  const theme = useMantineTheme();
  const { i18n } = useTranslation();
  const { classes } = useStyles();

  const [opened, setOpened] = useState(false);
  const [selected, setSelected] = useState(false);
  const handleOpened = () => {
    setOpened(prev => !prev);
  };
  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
    setSelected(prev => !prev);
  };
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
        header={
          <Header height={{ base: 70, md: 70 }} p="md">
            <div
              className={classes.header}
              style={{ display: 'flex', alignItems: 'center', height: '100%' }}
            >
              <MediaQuery largerThan="md" styles={{ display: 'none' }}>
                <Burger
                  opened={opened}
                  onClick={handleOpened}
                  size="sm"
                  color={theme.colors.gray[6]}
                  mr="xl"
                />
              </MediaQuery>
              <Brand />

              {selected ? (
                <Button
                  miw="65px"
                  variant="default"
                  onClick={() => changeLanguage('vi')}
                >
                  VN
                </Button>
              ) : (
                <Button
                  miw="65px"
                  variant="default"
                  onClick={() => changeLanguage('en')}
                >
                  EN
                </Button>
              )}
            </div>
          </Header>
        }
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
