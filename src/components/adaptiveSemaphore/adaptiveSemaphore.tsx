import { Select, Button, Box, Container, Text } from "@mantine/core";
import { wrap } from "module";
import { useState } from "react";

import "./adaptiveSemaphore.css";

export function AdaptiveSemaphore() {
  const [value, setValue] = useState("");
  const [congestion1, setCongestion1] = useState(0.1);
  const [congestion2, setCongestion2] = useState(0.7);
  const [light1, setLight1] = useState("Green");
  const [light2, setLight2] = useState("Red");
  const [crossroads, setCrossroads] = useState("Pofalici");
  async function adapt() {
    var c1 = congestion1;
    var c2 = congestion2;
    var i = 0;
    do {
      c1 = strip(c1);
      c2 = strip(c2);
      console.log(c1, c2);
      setCongestion1(c1);
      setCongestion2(c2);
      if (c1 < c2) {
        setLight2("Green");
        setLight1("Red");
        await sleep(getRandomInt(1, 2) * 1000);
        c1 += 0.1;
        await sleep(getRandomInt(1, 2) * 1000);
        c2 -= 0.1;
        c1 = strip(c1);
        c2 = strip(c2);
      } else if (c2 < c1) {
        setLight2("Red");
        setLight1("Green");
        await sleep(getRandomInt(1, 2) * 1000);
        c1 -= 0.1;
        await sleep(getRandomInt(1, 2) * 1000);
        c2 += 0.1;
        c1 = strip(c1);
        c2 = strip(c2);
      } else if (c2 == c1) {
        await sleep(getRandomInt(1, 2) * 1000);
        c1 += 0.2;
        await sleep(getRandomInt(1, 2) * 1000);
        c2 -= 0.2;
      }
      setCongestion1(c1);
      setCongestion2(c2);
      i += 1;
    } while (i < 3);
  }
  function strip(c: number) {
    return parseFloat(c.toPrecision(1));
  }
  function sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  function getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  return (
    <Container className="testContainer">
      <Text className="headerTitle" style={{ marginBottom: 3 }}>
        Adaptive Traffic Lights
      </Text>
      <Text
        style={{
          marginBottom: 10,
          marginTop: 7,
          fontSize: "1rem",
          fontWeight: 700,
          border: "2px solid",
          width: "50%",
        }}
      >
        {crossroads}
      </Text>
      <Box className="semaphoreBox">
        <Text id="s1">S1</Text>
        <Text id="s2">S2</Text>
        <Text id="l1">Light: {light1}</Text>
        <Text id="l2">Light: {light2}</Text>
        <Text id="c1">Congestion: {congestion1}</Text>
        <Text id="c2">Congestion: {congestion2}</Text>
      </Box>
      <Box>
        <Button onClick={adapt} className="button">
          Adapt Traffic Lights
        </Button>
      </Box>
    </Container>
  );
}
