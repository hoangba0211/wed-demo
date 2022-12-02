import React, { useState } from 'react';
import { AppShell, Navbar, createStyles, Button } from '@mantine/core';
import { useNavigate } from 'react-router-dom';

import { Brand } from 'app/components/Brand';
import { User } from 'app/components/User';
import { MainLinks } from 'app/components/MainLinks';
import HeaderUi from 'app/components/Header';
import { useSelector } from 'react-redux';
import { getTokenSelector } from 'store/slice/userSlice/selectors';
import { useTranslation } from 'react-i18next';

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
  loginBtn: {
    transform: 'translateX(-12px)',
    width: '100%',
    maxWidth: '100%',
    marginRight: '12px',
  },
}));
interface LayoutProps {
  children?: React.ReactElement;
}
const Layout = ({ children }: LayoutProps) => {
  const navigate = useNavigate();
  const { classes } = useStyles();
  const { t } = useTranslation();

  // Global State
  const token = useSelector(getTokenSelector);

  // Local State
  const [opened, setOpened] = useState(false);

  const handleLoginUser = () => {
    navigate('/login');
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
              {token ? (
                <User />
              ) : (
                <Button
                  className={classes.loginBtn}
                  onClick={handleLoginUser}
                  variant="outline"
                  gradient={{ from: 'indigo', to: 'cyan' }}
                  ml="sm"
                >
                  {t('Login')}
                </Button>
              )}
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
