import React, { useState } from "react";
import "./dashboard.css";

import {
  AppShell,
  Navbar,
  Header,
  Footer,
  Aside,
  Text,
  MediaQuery,
  Burger,
  useMantineTheme,
  Anchor,
  Button,
} from "@mantine/core";
import logo from "../assets/logo.svg";

function Dashboard() {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  return (
    <>
      <AppShell
        styles={{
          main: {},
        }}
        navbarOffsetBreakpoint="sm"
        asideOffsetBreakpoint="sm"
        fixed
        navbar={
          <Navbar
            p="md"
            hiddenBreakpoint="sm"
            hidden={!opened}
            width={{ sm: 200, lg: 300 }}
          >
            {/* Links  - routing */}
            <Navbar.Section grow mt="md" style={{ padding: "20px" }}>
              <Text>
                <Anchor href="/map">Maps</Anchor>
              </Text>
              <Text>
                <Anchor href="/map">Parking Finder</Anchor>
              </Text>
              <Text>
                <Anchor href="/map">Traffic Status</Anchor>
              </Text>
              <Text>
                <Anchor href="/map">Road Warnings</Anchor>
              </Text>
            </Navbar.Section>
            <Navbar.Section>
              {/* need on click */}
              <Button className="nav-button">Log out</Button>
            </Navbar.Section>
          </Navbar>
        }
        footer={
          <Footer height={60} p="md">
            @BESTMostar HackAtHome 2022.
          </Footer>
        }
        header={
          <Header height={70} p="md">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                height: "100%",
                color: "white",
              }}
            >
              <MediaQuery largerThan="sm" styles={{ display: "none" }}>
                <Burger
                  opened={opened}
                  onClick={() => setOpened((o) => !o)}
                  size="sm"
                  color={theme.colors.gray[6]}
                  mr="xl"
                />
              </MediaQuery>
              <img src={logo} alt="logo" className="nav-logo" />
              <h1>Synaptic</h1>
            </div>
          </Header>
        }
      >
        <Text>content</Text>
      </AppShell>
    </>
  );
}

export default Dashboard;
