import React, { useState } from 'react';
import { createStyles, useMantineTheme } from '@mantine/core';
import { Header, MediaQuery, Button, Burger } from '@mantine/core';
import { Brand } from '../Brand';
import { useTranslation } from 'react-i18next';

const useStyles = createStyles(theme => ({
  header: {
    '@media (max-width: 800px)': {
      flex: '1',
      justifyContent: 'space-between',
    },
  },
}));
interface HeaderUi {
  opened: boolean;
  setOpened: any;
}
export const HeaderUi = ({ opened, setOpened }: HeaderUi) => {
  const { classes } = useStyles();
  const { i18n } = useTranslation();
  const theme = useMantineTheme();

  const [selected, setSelected] = useState(false);

  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
    setSelected(prev => !prev);
  };
  const handleOpened = () => {
    setOpened(prev => !prev);
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
      </div>
    </Header>
  );
};
