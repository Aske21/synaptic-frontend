import React from "react";
import "./home.css";
import {
  Center,
  useMantineTheme,
  Blockquote,
  Footer,
  Button,
  MantineProvider,
  Container,
  Anchor,
} from "@mantine/core";

import intro from "../assets/intro.svg";
import map from "../assets/map.svg";
import contribute from "../assets/contribute.svg";

// fix media queries - TODO
function Home() {
  const theme = useMantineTheme();
  return (
    <>
      <Center
        style={{
          padding: "30px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <img src={intro} alt="Intro" id="home-img" />
        <Blockquote
          style={{ color: "white", fontSize: "26px", fontWeight: "bold" }}
        >
          A real-time monitoring system to improve your city.
        </Blockquote>
        <Button
          className="nav-button"
          id="partner"
          style={{
            width: "200px",
            height: "60px",
          }}
        >
          <Anchor href="/register">Register now </Anchor>
        </Button>
      </Center>
      <hr style={{ width: "750px" }} />
      <Center style={{ backgroundColor: " #98c1d9", padding: "50px" }}>
        <img src={map} alt="map" id="home-img" />
        <p
          style={{
            fontFamily: theme.fontFamily,
            fontWeight: 500,
            width: "400px",
            padding: "5px",
            fontSize: "24px",
          }}
        >
          <b>Synaptic</b> is a web application which strives to make traffic
          faster and more secure. We offer solutions which can improve the
          congestion we all face on the road. Our services provide governments
          with ways to automatically and effortlessly control traffic lights in
          the times of the rush hour.
        </p>
        <br />
        {/* <p
          style={{
            fontFamily: theme.fontFamily,
            fontWeight: 500,
            width: "400px",
            padding: "5px",
            fontSize: "24px",
          }}
        >
          Plate number detection combined with the power to measure speeds and
          give automated notifications to users.
        </p> */}
      </Center>

      <Container size="xs" className="contribute-container">
        <Center>
          <img src={contribute} alt="contribute" id="contribute-svg" />
        </Center>
        <Center>
          <h2
            style={{
              fontFamily: theme.fontFamily,
              fontWeight: 500,
              width: "400px",
              padding: "5px",
            }}
          >
            Become a part of our team and help better your city!
          </h2>
          <Button
            className="nav-button"
            style={{
              width: "300px",
              height: "60px",
            }}
            id="partner"
          >
            {" "}
            Join us
          </Button>
        </Center>
      </Container>
      <Footer
        height={80}
        p="md"
        style={{
          background: theme.colors.blue[0],
          borderBottom: "none",
          width: "100%",
        }}
      >
        <Center style={{ padding: "10px" }}>
          <h5>@BESTMostar HackAtHome 2022.</h5>
          <h5> Team - Synaptic</h5>
        </Center>
      </Footer>
    </>
  );
}

export default Home;
