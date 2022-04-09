import React from "react";
import { Select, Button, Box, Container, Text} from '@mantine/core';
import { TicketTest } from "../components/ticketNotificationTest/ticketNotificationTest";
import {TrafficNotification} from "../components/trafficNotifications/trafficNotification";
import { AdaptiveSemaphore } from "../components/adaptiveSemaphore/adaptiveSemaphore";
import {ParkingFinder} from "../components/parkingFinder/parkingFinder";
import "./testingPage.css";

export function TestingPage() {
  return (
    <Container className="testPageContainer">
      <TicketTest/>
      <TrafficNotification/>
      <AdaptiveSemaphore/>
      <ParkingFinder/>
      
    </Container>
  );
}

