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
import { useDispatch, useSelector } from 'react-redux';
import { useHeaderUiSlice } from 'store/slice/userSlice';
import { useNavigate } from 'react-router-dom';
import { getUsersSelector } from 'store/slice/userSlice/selectors';

export function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { actions } = useHeaderUiSlice();
  // Global State
  const user = useSelector(getUsersSelector);
  // Local State
  const [form, setForm] = useState({ username: '', password: '' });

  const handleLoginUser = () => {
    console.log('handleLoginUser 1');
    dispatch(
      actions.login({ username: form.username, password: form.password }),
    );
  };

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  React.useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [navigate, user]);
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
