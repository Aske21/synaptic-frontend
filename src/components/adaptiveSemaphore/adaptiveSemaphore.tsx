import { Select, Button, Box, Container, Text } from "@mantine/core";
import { wrap } from "module";
import { useState } from "react";
import { NumberInput } from "@mantine/core";

import "./adaptiveSemaphore.css";

export function AdaptiveSemaphore() {
  const defaultGreenLightDuration = 20;
  const greenLightDurationIncrement = 2;
  const greenLightDurationDecrement = 0.2;
  const congestionIncrement = 0.1;
  const congestionDecrement = 0.01;
  const [leftcongestion, setLeftCongestion] = useState(0.05);
  const [rightcongestion, setRightCongestion] = useState(0.05);
  const [upcongestion, setUpCongestion] = useState(1);
  const [downcongestion, setDownCongestion] = useState(1);
  const [greenLight, setGreenLight] = useState(defaultGreenLightDuration);

  function adapt() {
    if (
      rightcongestion <= 0.25 &&
      upcongestion >= 0.5 &&
      downcongestion >= 0.5
    ) {
      setGreenLight(greenLight + greenLightDurationIncrement);
      setRightCongestion(rightcongestion + congestionIncrement);
    } else if (
      rightcongestion >= 0.25 &&
      upcongestion >= 0.5 &&
      downcongestion >= 0.5
    ) {
      setGreenLight(greenLight - greenLightDurationDecrement);
      setRightCongestion(rightcongestion - congestionDecrement);
    }
  }

  return (
    <Container className="testContainer">
      <Text
        className="headerTitle"
        style={{ marginBottom: 3, color: "white", fontWeight: "bold" }}
      >
        Adaptive Traffic Lights
      </Text>
      <Text id="gl">Green Light Duration</Text>
      <Text id="gl">{greenLight} </Text>
      <Text id="gl">
        Traffic Congestion (0.5 - moderate, 0.25 - congested, 1 - fastest
      </Text>
      <Text id="rc">{rightcongestion}</Text>

      <Button onClick={adapt} className="button">
        Pass Time
      </Button>
    </Container>
  );
}
