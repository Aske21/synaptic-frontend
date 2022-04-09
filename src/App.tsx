import { GoogleMap, DirectionsRenderer } from "@react-google-maps/api";
import React, {useState} from 'react';
import {Login} from './components/login/login';
import {Register} from './components/register/register'
import GoogleMapReact from 'google-map-react';
import { listenerCount } from 'process';

interface CompDto {
  lat: number;
  lng: number;
  url: string;
}

function Map() {
  const parkingList = [
    [43.856128403457966, 18.388856675227576],
    [43.85423596199769, 18.38925838005175],
    [43.850987570071226, 18.367679001968487],
    [43.861056301523426, 18.40238234402748],
    [43.85674314965064, 18.40488715200673],
    [43.85782294239548, 18.40930720503427], 
    [43.85749484991928, 18.418276919612445],
    [43.85740587087186, 18.425823836314745],
    [43.84928932868748, 18.380937869991822],
    [43.84989863310964, 18.381842704790824],
    [43.850021911688216, 18.38509979305609],
    [43.84832392667594, 18.38598055302311],
    [43.85075254970065, 18.38925156988114],
    [43.853003869597146, 18.398077583616953],
    [43.85310631720042, 18.399294349888102],
    [43.85479464637232, 18.40975621212502],
    [43.85566641427526, 18.410853170628652],
    [43.85417150115206, 18.412519660076878],
    [43.855465587483465, 18.413789927730456],
    [43.85667900709609, 18.429502977395792],
    [43.85820940878116, 18.433406495587683]
  ] as any;

  const completeMarkerList = parkingList.map((x: [number, number]) => {
    let [lat, lng] = x;
    return {lat: lat, lng: lng, url: "/parking_icon.png"};
  });
  const [markerList, setMarkerList] = useState(completeMarkerList)
  const Marker = ({lat,lng, url}:CompDto) => <img style={{width: "25px", height: "30px"}} src={url}/>;
  const defaultProps = {
    center: {
      lat: 43.85689,
      lng: 18.39543
    },
    zoom: 16
  };

  class MapTypes {
    map: any
    maps: any
  }

  //Find the closest parking next to click
  function rad(x: any) {return x * Math.PI/180;}
  function find_closest_parking( event: any ){
    console.log(event)
    var lat = event.lat;
    var lng = event.lng;
    var R = 6371;
    var distances = [];
    var closest = -1;
    
    for(let i=0; i < parkingList.length; i++) {
      var mlat = parkingList[i][0]
      var mlng = parkingList[i][1]
      var dLat = rad(mlat - lat);
      var dlng = rad(mlng - lng);
      var a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.cos(rad(lat)) * Math.cos(rad(lat)) * Math.sin(dlng/2) * Math.sin(dlng/2);
      var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
      var d = R * c;
      distances[i] = d;
      if(closest == -1 || d < distances[closest]) {
        closest = i;
        } 
    }
    let newMarker = completeMarkerList.filter((x: any) => x.lat == parkingList[closest][0] && x.lng == parkingList[closest][1])[0]
    newMarker.url = "/parking_icon.png";
    setMarkerList([newMarker])
  }

  //Direction service (requires change)
  const apiIsLoaded = (map: any, maps: any) => {
    const directionsService = new google.maps.DirectionsService();
    const directionsRenderer = new google.maps.DirectionsRenderer();
    directionsRenderer.setMap(map);
    const origin = { lat: 43.856128403457966, lng: 18.388856675227576};
    const destination = { lat: 43.85423596199769, lng: 18.38925838005175};

    directionsService.route(
      {
        origin: origin,
        destination: destination,
        travelMode: google.maps.TravelMode.DRIVING
      },
      (result: any, status: any) => {
        if (status === google.maps.DirectionsStatus.OK) {
          directionsRenderer.setDirections(result);
        } 
        else {
        }
      }
    );
  };

  //Return the map
  return (
    <GoogleMapReact
      yesIWantToUseGoogleMapApiInternals
      onGoogleApiLoaded={({ map, maps }:MapTypes) => apiIsLoaded(map, maps)}
      bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_KEY }}
      onClick = {(event: any)=>find_closest_parking(event)}
      defaultCenter={defaultProps.center}
      defaultZoom={defaultProps.zoom}
    >
    {markerList.map((x: any) => {
      return <Marker
        lat={x.lat}
        lng={x.lng}
        url={x.url}
      />
    })}
    </GoogleMapReact>
  );
}

export default function App(){
  return (
    <div style = {{width: "100vw", height: "100vh"}}>
    <Map/>
    </div>
  );
}