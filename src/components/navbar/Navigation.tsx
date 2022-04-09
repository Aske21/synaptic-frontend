import React from "react";
import {
  Header,
  useMantineTheme,
  Grid,
  Anchor,
  Drawer,
  Button,
  Group,
} from "@mantine/core";
import { useState } from "react";
import "./navigation.css";

export function Navigation() {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);

  return (
    <Header
      height={70}
      p="md"
      style={{
        background: theme.colors.blue[0],
        borderBottom: "none",
        width: "100%",
      }}
    >
      <Grid>
        <Grid.Col span={10}>
          <Anchor>Synaptic</Anchor>
        </Grid.Col>
        <Grid.Col span={2}>
          <Drawer
            opened={opened}
            onClose={() => setOpened(false)}
            padding="xl"
            size="xl"
            style={{
              fontFamily: theme.fontFamily,
            }}
          >
            <h1>Synaptic</h1>
            <h3>About us</h3>
            <h3>Login</h3>
            <h3>Register</h3>
          </Drawer>
          <Group position="center">
            <Button
              className="nav-button"
              onClick={() => setOpened(true)}
              style={{ fontSize: "22px" }}
            >
              Menu
            </Button>
          </Group>
        </Grid.Col>
      </Grid>
    </Header>
  );
}