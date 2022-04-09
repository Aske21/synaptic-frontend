import {
  TextInput,
  PasswordInput,
  Button,
  Group,
  Box,
  Container,
  Text,
  Checkbox,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import "./login.css";

export function Login() {
  const form = useForm({
    initialValues: {
      email: "",
      password: "",
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  });

  return (
    <Container className="loginContainer">
      <Box className="formBox">
        <Text className="headerTitle">Login</Text>

        <form onSubmit={form.onSubmit((values) => console.log(values))}>
          <TextInput
            required
            className="input"
            label="Email"
            placeholder="your@email.com"
            {...form.getInputProps("email")}
          />

          <PasswordInput
            className="input"
            placeholder="Password"
            label="Password"
            required
            {...form.getInputProps("password")}
          />

          <Group>
            <Button type="submit" className="nav-button button" size="md">
              Log In
            </Button>
          </Group>
        </form>
        <Group className="message">
          <Checkbox label="Remember me" />
          <a href="/register" style={{ textDecoration: "none" }}>
            Dont have an account?
          </a>
        </Group>
      </Box>
    </Container>
  );
}
