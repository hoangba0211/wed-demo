import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { createStyles, useMantineTheme } from '@mantine/core';
import { Header, MediaQuery, Button, Burger } from '@mantine/core';

import { Brand } from '../Brand';
import { getUsersSelector } from 'store/rootSlice/userSlice/selectors';
import { useNavigate } from 'react-router-dom';

const useStyles = createStyles(theme => ({
  header: {
    '@media (max-width: 800px)': {
      flex: '1',
      justifyContent: 'space-between',
    },
  },
}));

interface HeaderUiProps {
  opened: boolean;
  setOpened: any;
}
function HeaderUi({ opened, setOpened }: HeaderUiProps) {
  const navigate = useNavigate();
  const theme = useMantineTheme();
  const user = useSelector(getUsersSelector);
  console.log(28, user);
  const { classes } = useStyles();
  const { i18n } = useTranslation();
  const [selected, setSelected] = useState(false);

  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
    setSelected(prev => !prev);
  };

  const handleOpened = () => {
    setOpened(prev => !prev);
  };

  const handleLoginUser = () => {
    navigate('/login');
  };
  return (
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
        {!user ? (
          <Button
            onClick={handleLoginUser}
            variant="gradient"
            gradient={{ from: 'indigo', to: 'cyan' }}
            ml="sm"
          >
            Login
          </Button>
        ) : (
          <Button
            variant="gradient"
            gradient={{ from: '#ed6ea0', to: '#ec8c69', deg: 35 }}
            ml="sm"
          >
            Logout
          </Button>
        )}
      </div>
    </Header>
  );
}
export default HeaderUi;
