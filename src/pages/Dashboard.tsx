import React, { useState } from "react";
import "./dashboard.css";

import {
  AppShell,
  Navbar,
  Header,
  Footer,
  Avatar,
  Text,
  MediaQuery,
  Burger,
  useMantineTheme,
  Anchor,
  Center,
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
            <Navbar.Section>
              {/* need on click */}
              <Center style={{ padding: "15px", margin: "2px" }}>
                <Avatar src={null} alt="WhoAmI" color="red">
                  WAI
                </Avatar>{" "}
                <h2 style={{ padding: "15px", fontSize: "22px" }}>
                  Ime Prezime
                </h2>
              </Center>
            </Navbar.Section>

            <Navbar.Section grow mt="md" className="dashboard-navigation">
              <Text>
                <Anchor href="/">Maps</Anchor>
              </Text>
              <Text>
                <Anchor href="/">Parking Finder</Anchor>
              </Text>
              <Text>
                <Anchor href="/">Traffic Status</Anchor>
              </Text>
              <Text>
                <Anchor href="/">Road Warnings</Anchor>
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
              <Anchor href="/" id="logo">
                <img src={logo} alt="logo" className="nav-logo" />
                <b>Synaptic</b>
              </Anchor>
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
