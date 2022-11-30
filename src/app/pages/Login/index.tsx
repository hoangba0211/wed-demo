import * as React from 'react';
import { useForm } from '@mantine/form';
import { TextInput, Button, Group, Box, Container, Title } from '@mantine/core';
import { randomId } from '@mantine/hooks';

export function Login() {
  const form = useForm({
    initialValues: {
      name: '',
      email: '',
    },
  });

  return (
    <Container
      sx={theme => ({
        maxWidth: '100%',
        height: '100vh',
      })}
    >
      <Box
        sx={theme => ({
          maxWidth: '460px',
          margin: '100px auto',
          backgroundColor:
            theme.colorScheme === 'dark'
              ? theme.colors.dark[6]
              : theme.colors.gray[0],
          borderRadius: theme.radius.md,
          padding: '32px',
          cursor: 'pointer',

          '&:hover': {
            backgroundColor:
              theme.colorScheme === 'dark'
                ? theme.colors.dark[5]
                : theme.colors.gray[1],
          },
        })}
      >
        <Title order={3} align="center">
          Welcome to My App
        </Title>
        <TextInput
          label="Name"
          placeholder="Name"
          {...form.getInputProps('name')}
        />
        <TextInput
          mt="md"
          label="Email"
          placeholder="Email"
          {...form.getInputProps('email')}
        />

        <Group position="center" mt="xl">
          <Button
            variant="outline"
            onClick={() =>
              form.setValues({
                name: randomId(),
                email: `${randomId()}@test.com`,
              })
            }
          >
            Login
          </Button>
        </Group>
      </Box>
    </Container>
  );
}
