import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { Container } from '@mantine/core';

export function Discussions() {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title>Discussions</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>

      <Container h="1000px">
        <span>{t('Discussions')}</span>
      </Container>
    </>
  );
}
