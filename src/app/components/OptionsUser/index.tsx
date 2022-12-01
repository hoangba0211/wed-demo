import React from 'react';
import {
  IconChevronRight,
  IconChevronLeft,
  IconSettings,
  IconSearch,
  IconPhoto,
  IconMessageCircle,
  IconTrash,
  IconArrowsLeftRight,
} from '@tabler/icons';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Group, Avatar, Text, Box, useMantineTheme, Menu } from '@mantine/core';
import { useHeaderUiSlice } from 'store/slice/userSlice';

export function OptionsUser() {
  const theme = useMantineTheme();
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { actions } = useHeaderUiSlice();

  const handlLogoutUser = () => {
    console.log('1');
    dispatch(actions.logout());
  };
  return (
    <Menu shadow="md" width={200}>
      <Menu.Target>
        <Group>
          <Avatar
            src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&q=80"
            radius="xl"
          />
          <Box sx={{ flex: 1 }}>
            <Text size="sm" weight={500}>
              Amy Horsefighter
            </Text>
            <Text color="dimmed" size="xs">
              ahorsefighter@gmail.com
            </Text>
          </Box>

          {theme.dir === 'ltr' ? (
            <IconChevronRight size={18} />
          ) : (
            <IconChevronLeft size={18} />
          )}
        </Group>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Label>{t('Application')}</Menu.Label>
        <Menu.Item icon={<IconSettings size={14} />}>{t('Settings')}</Menu.Item>
        <Menu.Item icon={<IconMessageCircle size={14} />}>
          {t('Messages')}
        </Menu.Item>
        <Menu.Item icon={<IconPhoto size={14} />}>{t('Gallery')}</Menu.Item>
        <Menu.Item
          icon={<IconSearch size={14} />}
          rightSection={
            <Text size="xs" color="dimmed">
              ⌘K
            </Text>
          }
        >
          {t('Search')}
        </Menu.Item>

        <Menu.Divider />

        <Menu.Label>{t('Danger zone')}</Menu.Label>
        <Menu.Item icon={<IconArrowsLeftRight size={14} />}>
          {t('Transfer my data')}
        </Menu.Item>

        <Box onClick={handlLogoutUser}>
          <Menu.Item color="red" icon={<IconTrash size={14} />}>
            {t('Logout')}
          </Menu.Item>
        </Box>
      </Menu.Dropdown>
    </Menu>
  );
}
