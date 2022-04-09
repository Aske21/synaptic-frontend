import { Select, Button, Box, Container, Text} from '@mantine/core';
import { useState } from 'react';
import './ticketNotificationTest.css';

export function TicketTest() {
    const [value,setValue]=useState('')
    
    return (
        <Container className="testContainer">
            <Text className="headerTitle">Ticket Proof Of Concept</Text>
            <Box className="testBox">
                <Select
                
                label="Choose ticket type"
                placeholder="Choose ticket type"
                data={[
                    {value: "50KM",label:"Prekoracenje od 11 do 20"},
                    {value: "100KM, 1 mjesec zabrane, 2KB",label:"Prekoracenje od 21 do 30"},
                    {value: "400KM, 2 mjeseca zabrane, 2KB",label:"Prekoracenje preko 30"},
                    {value: "100KM, 1KB",label:"Nekoristenje sig. pojasa"},
                ]}  
                onChange={(selectedValue)=> setValue(selectedValue!)}
                />
                {/* dodati user selection za poc i promjenit iz alerta u text notifikaciju*/}
                <Button onClick={()=>alert(value)} className="button" >Send ticket notification</Button>
            </Box>
        </Container>
    );
}