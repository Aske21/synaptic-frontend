import { Select, Button, Box, Container, Text } from "@mantine/core";
import { useEffect, useState } from "react";
import "./trafficNotification.css";

export function TrafficNotification() {
  const [warn, setWarn] = useState("");
  function generateTrafficNotification() {
    var trafficWarnings = [
      "Sudar u nedzaricima prema Ilidzi",
      "Tramvaj izletio sa sina kod muzeja",
      "Poplavljen podvoznja u buca potoku",
      "Zaledila cesta prema vratniku",
    ];
    var randomNotification =
      trafficWarnings[Math.floor(Math.random() * trafficWarnings.length)]; //pl

    setWarn(randomNotification);
    setTimeout(function () {
      alert(randomNotification);
    }, 50);
  }
  return (
    <Container className="testContainer">
      <Text
        className="headerTitle"
        style={{ marginBottom: 3, color: "white", fontWeight: "bold" }}
      >
        Traffic Notification
      </Text>
      <Box className="testBox">
        <Button
          onClick={() => generateTrafficNotification()}
          className="button"
        >
          Generate Traffic Notification
        </Button>
        <Text style={{ marginTop: 20, fontSize: 20, fontWeight: "bold" }}>
          {warn}
        </Text>
        {/* TODO ADD TELEGRAM MESSAGE NOTIFICATION */}
      </Box>
    </Container>
  );
}
