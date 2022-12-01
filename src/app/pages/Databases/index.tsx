import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { Container } from '@mantine/core';

export function Databases() {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title>Databases</title>
        <meta
          name="description"
          content="A Boilerplate application Databases"
        />
      </Helmet>

      <Container h="1000px">
        <span>{t('Databases')}</span>
      </Container>
    </>
  );
}
