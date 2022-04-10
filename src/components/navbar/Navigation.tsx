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
            <img src={logo} alt="logo" className="nav-logo" />
            <b>Synaptic</b>
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
            <h1>
              {" "}
              <img src={logo} alt="logo" className="nav-logo" />
              Synaptic
            </h1>
            <h3>
              <Anchor href="/" id="drawer-nav">
                Home
              </Anchor>
            </h3>
            <h3>
              <Anchor href="/" id="drawer-nav">
                About us
              </Anchor>
            </h3>
            <h3>
              <Anchor href="/dashboard" id="drawer-nav">
                Dashboard preview
              </Anchor>
            </h3>
            <h3>
              <Anchor href="/" id="drawer-nav">
                Contact us
              </Anchor>
            </h3>

            <h3>
              <Anchor href="/login" id="drawer-nav">
                Login
              </Anchor>
            </h3>
            <h3>
              <Anchor href="/register" id="drawer-nav">
                Register
              </Anchor>
            </h3>
          </Drawer>
          <Group position="center">
            <Button
              className="nav-button"
              onClick={() => setOpened(true)}
              style={{ fontSize: "22px", width: "125px", height: "40px" }}
              id="partner"
            >
              <Anchor>Menu</Anchor>
            </Button>
          </Group>
        </Grid.Col>
      </Grid>
    </Header>
  );
}
