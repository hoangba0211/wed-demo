import React, { useState } from 'react';
import {
  TextInput,
  Button,
  Group,
  Box,
  Container,
  Title,
  PasswordInput,
} from '@mantine/core';
import { useDispatch } from 'react-redux';
import { useHeaderUiSlice } from 'store/slice/userSlice';

export function Login() {
  const dispatch = useDispatch();
  const { actions } = useHeaderUiSlice();
  const [form, setForm] = useState({ username: '', password: '' });

  const handleLoginUser = () => {
    console.log('handleLoginUser 1');
    dispatch(actions.loginSuccess(form));
    console.log('handleLoginUser 2');
  };

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
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
          placeholder="Username"
          label="Username"
          value={form.username}
          name="username"
          onChange={e => handleChange(e)}
        />

        <PasswordInput
          placeholder="Password"
          label="Password"
          withAsterisk
          value={form.password}
          name="password"
          onChange={e => handleChange(e)}
        />
        <Group position="center" mt="xl">
          <Button variant="outline" onClick={handleLoginUser}>
            Login
          </Button>
        </Group>
      </Box>
    </Container>
  );
}
