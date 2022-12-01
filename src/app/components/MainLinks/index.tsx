import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  IconGitPullRequest,
  IconAlertCircle,
  IconMessages,
  IconDatabase,
} from '@tabler/icons';
import { ThemeIcon, UnstyledButton, Group, Text } from '@mantine/core';
import { Link } from 'react-router-dom';

interface MainLinkProps {
  icon: React.ReactNode;
  color: string;
  label: string;
  to: string;
}

function MainLink({ icon, color, label, to }: MainLinkProps) {
  const { t } = useTranslation();
  return (
    <UnstyledButton
      sx={theme => ({
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
      })}
    >
      <Link to={`/${to}`}>
        <Group>
          <ThemeIcon color={color} variant="light">
            {icon}
          </ThemeIcon>

          <Text size="sm" weight="600">
            {t(`${label}`)}
          </Text>
        </Group>
      </Link>
    </UnstyledButton>
  );
}

const data = [
  {
    icon: <IconGitPullRequest size={16} />,
    color: 'blue',
    label: 'Pull Requests',
    to: 'request',
  },
  {
    icon: <IconAlertCircle size={16} />,
    color: 'teal',
    label: 'Open Issues',
    to: 'issues',
  },
  {
    icon: <IconMessages size={16} />,
    color: 'violet',
    label: 'Discussions',
    to: 'discussions',
  },
  {
    icon: <IconDatabase size={16} />,
    color: 'grape',
    label: 'Databases',
    to: 'databases',
  },
];

export function MainLinks() {
  const links = data.map(link => <MainLink {...link} key={link.label} />);
  return <div>{links}</div>;
}
