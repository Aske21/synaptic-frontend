import {
  Container,
  Timeline,
  SimpleGrid,
  useMantineTheme,
  Center,
  Card,
  Text,
} from "@mantine/core";
import React from "react";

function Statistics() {
  const theme = useMantineTheme();

  return (
    <>
      <Container
        style={{ width: "100%", height: "100%", fontFamily: theme.fontFamily }}
      >
        <SimpleGrid
          cols={4}
          spacing="lg"
          breakpoints={[
            { maxWidth: 980, cols: 3, spacing: "md" },
            { maxWidth: 755, cols: 2, spacing: "sm" },
            { maxWidth: 600, cols: 1, spacing: "sm" },
          ]}
        >
          <div>
            <Center>
              <Card>
                <h3>Daily Throughput</h3>
                <Timeline active={1} bulletSize={24} lineWidth={2}>
                  <Timeline.Item title="New branch">
                    <Text color="dimmed" size="sm">
                      You&apos;ve created new branch{" "}
                      <Text variant="link" component="span" inherit>
                        fix-notifications
                      </Text>{" "}
                      from master
                    </Text>
                    <Text size="xs" mt={4}>
                      2 hours ago
                    </Text>
                  </Timeline.Item>
                </Timeline>
              </Card>
            </Center>
          </div>
          <div>
            <Center>
              <Card>
                <h3>Parking availability</h3>
              </Card>
            </Center>
          </div>
          <div>
            <Center>
              <Card>
                <h1>graph</h1>
              </Card>
            </Center>
          </div>
          <div>
            <Center>
              <Card>
                <h1>feature</h1>
              </Card>
            </Center>
          </div>
          <div>5</div>
        </SimpleGrid>
      </Container>
    </>
  );
}

export default Statistics;
