import { useForm } from "@mantine/form";
import React from "react";
import {
  PasswordInput,
  Group,
  Button,
  Box,
  TextInput,
  Container,
  Text,
  ThemeIcon,
  useMantineTheme,
} from "@mantine/core";
import "./register.css";
export function Register() {
  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },

    validate: {
      confirmPassword: (value, values) =>
        value !== values.password ? "Passwords did not match" : null,
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      //add user already exists validation
    },
  });
  return (
    <Container className="registerContainer">
      <Box className="formBox">
        <Text className="headerTitle">Register</Text>
        <form onSubmit={form.onSubmit((values) => console.log(values))}>
          <TextInput
            required
            className="input"
            label="Name"
            placeholder="John Doe"
            {...form.getInputProps("name")}
          />
          <TextInput
            required
            className="input"
            label="Email"
            placeholder="your@email.com"
            {...form.getInputProps("email")}
          />
          <PasswordInput
            className="input"
            label="Password"
            placeholder="Password"
            required
            {...form.getInputProps("password")}
          />

          <PasswordInput
            className="input"
            label="Confirm password"
            placeholder="Confirm password"
            required
            {...form.getInputProps("confirmPassword")}
          />

          <Group>
            <Button type="submit" id="register" className="button">
              Register
            </Button>
          </Group>
        </form>
        <Group className="message">
          <Button className="button" id="registerGoogle" type="submit">
            Sign in with google
          </Button>
        </Group>
      </Box>
    </Container>
  );
}
