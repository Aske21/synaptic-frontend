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
import logo from "../../assets/logo.svg";

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
          <Anchor href="/" id="logo">
            {" "}
            <img src={logo} alt="logo" className="nav-logo" />
            Synaptic
          </Anchor>
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
            <h3>
              <Anchor href="/">Home</Anchor>
            </h3>
            <h3>
              <Anchor href="/">About us</Anchor>
            </h3>
            <h3>
              <Anchor href="/">Contact us</Anchor>
            </h3>
            <h3></h3>
            <h3>
              <Anchor href="/login">Login</Anchor>
            </h3>
            <h3>
              <Anchor href="/register">Register</Anchor>
            </h3>
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
