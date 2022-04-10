import { Route, Navigate } from 'react-router'
import { Select, Button, Box, Container, Text} from '@mantine/core';
import { useState } from 'react';
import './parkingFinder.css';

export function ParkingFinder() {
    
    return (
        <Container className="testContainer">
        <Text className="headerTitle" style={{ marginBottom: 3 }}>
            Find Parking
        </Text>
        <Button onClick={() => { return <Navigate to="/dashboard" replace={true} /> }} className="button">
        Go To Parking Locations
        </Button>
        </Container>
    );
}