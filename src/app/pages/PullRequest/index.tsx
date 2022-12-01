import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { Container } from '@mantine/core';

export function PullRequest() {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title>Pull Request</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>

      <Container h="1000px">
        <span>{t('Pull Requests')}</span>
      </Container>
    </>
  );
}
