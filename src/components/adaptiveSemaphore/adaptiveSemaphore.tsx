import { Select, Button, Box, Container, Text} from '@mantine/core';
import { useState } from 'react';

import './adaptiveSemaphore.css';

export function AdaptiveSemaphore() {
    const [value,setValue]=useState('')
    const [congestion1,setCongestion1]=useState(0.1)
    const [congestion2,setCongestion2]=useState(0.7)
  async  function adapt(){
        var c1=congestion1;
        var c2 =congestion2;
        while (c1!==c2) {
        setCongestion1(c1)
        setCongestion2(c2)
        console.log(c1,c2)
        strip(c1)
        strip(c2)
        if(c1<c2){       
            c1+=0.1;
            await sleep(getRandomInt(1,2) * 1000);
           c2-=0.1

        }else if(c2<c1) {
            c1-=0.1
            await sleep(getRandomInt(1,2) * 1000);
            c2+=0.1
           
        }else if(c1===c2){
            
            setCongestion1(c1)
            setCongestion2(c2)
        }       
        }
    }     
    function strip(c:number){
        parseFloat(c.toPrecision(1))
    }
    function sleep(ms:number) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    
   function getRandomInt(min:number, max:number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
    return (
        <Container className="testContainer">
        <Text className="headerTitle">Adaptive semaphore</Text>
            <Box className="testBox">
            
            </Box>
            <Text id="congestion1">S1 congestion: {congestion1}</Text>
            <Text id="congestion2">S2 congestion: {congestion2}</Text>
            <Box>
            <Button onClick={adapt} className="button" >Adapt Semaphores</Button>

            </Box>
        </Container>
    );
}